/* eslint-disable guard-for-in */
import { readFile } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { direxists } from './lib/file.js';
import { indexTemplate, namskeidTemplate } from './lib/html.js';

// const DATA_DIR = './data';
const OUTPUT_DIR = './dist';
const results = []

async function main() {

  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }

  readFile('././data/index.json', async (err, data) => {
    if (err) throw err;
    const deildir = JSON.parse(data);

    let result = [];
    for (const deild in deildir) {
      const deildTitle = deildir[deild].title;
      const deildDescription = deildir[deild].description;
      const filename = deildir[deild].csv;

      result = {
        deildTitle,
        deildDescription,
        filename
      };

      results.push(result);

      const filepath = join(OUTPUT_DIR, filename);
      const template = namskeidTemplate(deildTitle, result);

      writeFile(filepath, template, { flag: 'w+' });
    }
  });

  console.log(results);
  const filepath = join(OUTPUT_DIR, 'index.html');
  const template = indexTemplate(results);

  await writeFile(filepath, template, { flag: 'w+' });
}

main().catch((err) => console.error(err));
