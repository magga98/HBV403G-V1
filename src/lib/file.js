import fsPromises, { readFile as fsReadFile, stat } from 'fs/promises';
import path from 'path';

/**
 * Check if a directory exists.
 * @param {string} dir Directory to check
 * @returns `true` if dir exists, `false` otherwise
 */
export async function direxists(dir) {
  try {
    const info = await stat(dir);
    return info.isDirectory();
  } catch (e) {
    return false;
  }
}

/**
 * Read only files from a directory and returns as an array.
 * @param {string} dir Directory to read files from
 * @returns {string[]} Array of files in dir with full path, empty if error or no files
 */
// export async function readFilesFromDir(dir) {
 // let files = [];
 // try {
  //  files = await readdir(dir);
 // } catch (e) {
 //   return [];
 // }
// }
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}

/**
 * Read a file and return its content.
 * @param {string} file File to read
 * @param {object} options.encoding asdf
 * @returns {Promise<string | null>} Content of file or `null` if unable to read.
 */
export async function readFile(file, { encoding = 'utf8' } = {}) {
  try {
    const content = await fsReadFile(file);
    return content.toString(encoding);
  } catch (e) {
    return null;
  }
}
