import { useContext, useEffect, useState } from 'react';
import { PosteriorContext } from '../context/PosteriorContext';
import { priceFormatter, sizeFormatter } from '../utils/formatter';

function useFilter() {
  const {
    state: { filter, artworks },
  } = useContext(PosteriorContext);
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);

  useEffect(() => {
    if (!artworks || !filter.sort) return;
    const filtered = artworks
      .sort((a, b) => {
        if (filter.sort === 'artist') {
          if (a.artist < b.artist) {
            return -1;
          }
          if (a.artist > b.artist) {
            return 1;
          }
          return 0;
        }
        if (filter.sort === 'source') {
          if (a.source < b.source) {
            return -1;
          }
          if (a.source > b.source) {
            return 1;
          }
          return 0;
        }
        if (filter.sort === 'year') {
          return parseInt(a.year) - parseInt(b.year);
        }
      })

      .filter((artwork) => {
        if (!filter.term) {
          return true;
        }
        return (
          artwork.keywords.toString().includes(filter.term) ||
          artwork.artist.toLowerCase().includes(filter.term) ||
          artwork.source.toLowerCase().includes(filter.term) ||
          artwork.name.toLowerCase().includes(filter.term) ||
          artwork.year.toLowerCase().includes(filter.term)
        );
      })
      .filter((artwork) => {
        return (
          artwork.price > priceFormatter(filter.range.min) &&
          artwork.price < priceFormatter(filter.range.max)
        );
      })
      .filter((artwork) => {
        if (!filter.source.length) return true;

        return filter.source.some((source) => source.includes(artwork.source));
      })

      .filter((artwork) => {
        if (!filter.artist.length) return true;

        return filter.artist.some((artist) => artist.includes(artwork.artist));
      })
      .filter((artwork) => {
        if (!filter.year.length) return true;
        return filter.year.some((year) => year.includes(artwork.year));
      })
      .filter((artwork) => {
        const longestSide = Math.max(
          Math.floor(artwork.height) / 10,
          Math.floor(artwork.width) / 10
        );
        return (
          longestSide > sizeFormatter(filter.size.min) &&
          longestSide < sizeFormatter(filter.size.max)
        );
      })
      .filter((artwork) => {
        if (!filter.color.length) return true;
        if (filter === 'Colorful') {
          return !artwork.color.includes('Black' || 'White');
        }
        return filter.color.some((color) =>
          color.toUpperCase().includes(artwork.color.toUpperCase())
        );
      })
      .filter((artwork) => {
        if (!filter.orientation.length) return true;
        if (filter.orientation.includes('square')) {
          return artwork.height === artwork.width;
        }
        if (filter.orientation.includes('landscape')) {
          return artwork.height < artwork.width;
        }
        if (filter.orientation.includes('portrait')) {
          return artwork.height > artwork.width;
        }
      });

    setFilteredArtworks(filtered);
  }, [filter, artworks]);

  return filteredArtworks;
}

export default useFilter;
