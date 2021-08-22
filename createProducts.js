const fetch = require('node-fetch');
const fs = require('fs');
var path = require('path');
const axios = require('axios');
var he = require('he');
const ColorThief = require('colorthief');
var namer = require('color-namer');

namer.lists.riseArtColors = [
  { name: 'white', hex: '#fff' },
  { name: 'grey', hex: '#808080' },
  { name: 'maroon-neutral', hex: '#A52A2A' },
  { name: 'orange', hex: '#FFA500' },
  { name: 'yellow', hex: '#FFFF00' },
  { name: 'green', hex: '#008000' },
  { name: 'blue', hex: '#0000FF' },
  { name: 'purple', hex: '#800080' },
  { name: 'pink', hex: '#FFC0CB' },
  { name: 'red', hex: '#FF0000' },
  { name: 'black', hex: '#000' },
];

const ensureDirectoryExistence = (filePath) => {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
};

const scrape = async () => {
  const search = await fetch(
    'https://www.rawpixel.com/api/v1/boards?page=1&pagesize=10000&with_images=1&sort=changed&html=0&rawpixel_board=1&category=53'
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const boards = search.results.map((board) => board);

  for (let board of boards) {
    let probableArtist = board.title;
    let boardId = board.nid;
    await getImages(boardId, probableArtist);
  }
};

const getColor = async (url) => {
  let colors = await ColorThief.getColor(url).then((color) =>
    namer(color, { pick: ['myCustomList'] })
  );

  let palette = await ColorThief.getPalette(url, 5);

  const mappedpalette = palette.reduce((result, color) => {
    let namedColors = namer(color, { pick: ['riseArtColors'] }).riseArtColors;

    for (let i = 0; i < 5; i++) {
      if (result.includes(namedColors[i].name)) {
        i++;
      }
      if (!result.includes(namedColors[i].name)) {
        result.push(namedColors[i].name);
        i = 5;
      }
    }

    return result;
  }, []);

  return colors.riseArtColors[0].name;
};

const getImages = async (boardId, probableArtist) => {
  const search = await fetch(
    `https://www.rawpixel.com/api/v1/search?keys=&page=1&board=${boardId}&sort=curated&premium=&mode=shop&pagesize=1000&auth=1&html=0`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const images = search.results.map((image) => image);

  for (let i = 0; i < 5; i++) {
    if (!images[i]) return;

    let description = he.decode(images[i].pinterest_description);
    let id = `${images[i].id}`,
      color = await getColor(images[i].image_200);
    (artist = probableArtist),
      (image = `./artworks/${images[i].id}.jpeg`),
      (year =
        description.match(/(?<=\()\d{4}(?=\))/) !== null
          ? description.match(/(?<=\()\d{4}(?=\))/)[0]
          : ''),
      (name =
        description.match(/.+?(?= \(\d{4}\))/) !== null
          ? description.match(/.+?(?= \(\d{4}\))/)[0]
          : ''),
      (currency = 'EUR');
    (product_data = {
      metadata: {
        type: 'artwork',
      },
    }),
      (source = images[i].metadata.artists.length
        ? images[i].metadata.artist_names[0].replace(/ \(Source\)/, '')
        : ''),
      (keywords = images[i].metadata.popular_keywords);
    price = Math.floor(Math.random() * 200000) + 5000;
    width = images[i].width / 10;
    height = images[i].height / 10;

    if (!name || !source || !year) return;

    let artwork = {
      name,
      id,
      price,
      image,
      currency,
      product_data,
      artist,
      year,
      source,
      keywords,
      color,
      height,
      width,
    };

    try {
      await download(images[i], probableArtist);

      fs.readFile(
        './data/artworks.json',
        'utf8',
        function readFileCallback(err, data) {
          if (err) {
            let arr = [];
            arr.push(artwork);
            fs.writeFile(
              `./data/artworks.json`,
              JSON.stringify(arr),
              'utf8',
              function (err) {
                if (err) throw err;
              }
            );
          } else {
            let json;
            let artworks = JSON.parse(data);
            console.log('artworks', artworks);
            artworks.push(artwork);
            json = JSON.stringify(artworks);
            fs.writeFile('./data/artworks.json', json, 'utf8', function (err) {
              if (err) throw err;
            });
          }
        }
      );
    } catch {
      console.log('failed trying next');
    }
  }
};

const download = async (image, artist) => {
  const {
    image_full: url,
    id,
    pinterest_description: description,
    metadata,
  } = image;
  let year =
    description.match(/(?<=\()\d{4}(?=\))/) !== null
      ? description.match(/(?<=\()\d{4}(?=\))/)[0]
      : '1111';
  let title =
    description.match(/.+?(?= \(\d{4}\))/) !== null
      ? description.match(/.+?(?= \(\d{4}\))/)[0]
      : 'unknown';
  let source = metadata.artists.length ? metadata.artist_names[0] : 'unknown';
  let filename = `./data/artworks/${id}.jpeg`;

  ensureDirectoryExistence(filename);

  const jpeg = await axios
    .get(url, { responseType: 'arraybuffer' })
    .then((res) => res.data.toString('binary'))
    .catch((err) => console.log(err));

  var newJpeg = Buffer.from(jpeg, 'binary');

  fs.writeFileSync(filename, newJpeg);
};

scrape();
