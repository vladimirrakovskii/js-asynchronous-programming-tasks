import fsp from 'fs/promises';

// BEGIN
export const getTypes = (paths) => {
  const promises = paths.map((path) =>
    fs.promises.stat(path)
      .then((stat) => (stat.isDirectory() ? 'directory' : 'file'))
      .catch(() => null)
  );
  return Promise.all(promises);
};
// END
