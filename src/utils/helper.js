export const currencyFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0
});

export const currencyFormatterWOSymbol = new Intl.NumberFormat('id-ID', {
  maximumFractionDigits: 0
});

export function dateToStringFormatter(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function dateToStringPPOBFormatter(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}${month}${day}`;
}

export function stringToDateFormatter(date) {
  const dateSplit = date.split('/');
  const newDate = new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]);
  return newDate;
}

export function stringToDateTimeFormatter(startDate) {
  const dateTimeSplit = startDate.split(' ');
  const dateSplit = dateTimeSplit[0].split('/');
  const timeSplit = dateTimeSplit[1].split(':');
  const date = new Date(
    dateSplit[2],
    parseFloat(dateSplit[1] - 1),
    dateSplit[0],
    timeSplit[0],
    timeSplit[1]
  );
  return date;
}
export function stringISOToDateTimeFormatter(startDate) {
  const dateTimeSplit = startDate.split('T');
  const dateSplit = dateTimeSplit[0].split('-');
  const timeSplit = dateTimeSplit[1].split(':');
  const date = new Date(
    dateSplit[0],
    parseFloat(dateSplit[1]) - 1,
    parseFloat(dateSplit[2]),
    parseFloat(timeSplit[0]) + 7,
    timeSplit[1],
    timeSplit[2]
  );
  return date;
}

export const getUserLocation = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (location) => resolve(location),
      (error) => reject(error)
    );
  });

export const genRanHex = (size) =>
  [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
