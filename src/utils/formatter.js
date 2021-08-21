export function priceFormatter(value) {
  let price;
  switch (value) {
    case 0:
      price = 0;
      break;
    case 1:
      price = 1000;
      break;
    case 2:
      price = 2000;
      break;
    case 3:
      price = 3000;
      break;
    case 4:
      price = 5000;
      break;
    case 5:
      price = 10000;
      break;
    case 6:
      price = 20000;
      break;
    case 7:
      price = 50000;
      break;
    case 8:
      price = 100000;
      break;
    case 9:
      price = 150000;
  }
  return price;
}

export function sizeFormatter(value) {
  let size;
  switch (value) {
    case 0:
      size = 20;
      break;
    case 1:
      size = 30;
      break;
    case 2:
      size = 50;
      break;
    case 3:
      size = 80;
      break;
    case 4:
      size = Math.pow(10, 1000);
  }
  return size;
}
