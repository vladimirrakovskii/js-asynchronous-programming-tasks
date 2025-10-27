import fs from 'fs';

// BEGIN
export const compareFileSizes = (filepath1, filepath2, callback) => {
  fs.stat(filepath1, (err1, stats1) => {
    if (err1) {
      callback(err1, null);
      return;
    }
    fs.stat(filepath2, (err2, stats2) => {
      if (err2) {
        callback(err2, null);
        return;
      }
      const size1 = stats1.size;
      const size2 = stats2.size;
      const result = Math.sign(size1 - size2);
      callback(null, result);
    });
  });
};
// END
