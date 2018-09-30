// datePart: 'y', 'm', 'w', 'd', 'h', 'n', 's'
Date.dateDiff = function(datePart, fromDate, toDate) {
  datePart = datePart.toLowerCase();
  var diff = fromDate - toDate;
  var divideBy = {
    w: 604800000,
    d: 86400000,
    h: 3600000,
    n: 60000,
    s: 1000
  };

  return diff / divideBy[datePart];
};

const oneDay = 1000 * 60 * 60 * 24;
