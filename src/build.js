/* eslint-disable guard-for-in */
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import { direxists, getStaticProps } from './lib/file.js';
import { indexTemplate } from './lib/html.js';
// namskeidTemplate
// const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {

  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }

      const result = await getStaticProps;

      const filepath = join(OUTPUT_DIR, 'index.html');
      const template = indexTemplate(result);

      // eslint-disable-next-line no-await-in-loop
      await writeFile(filepath, template, { flag: 'w+' });
    };

 // const filepath = join(OUTPUT_DIR, filename);
  // const template = namskeidTemplate(deildTitle, result);

  // await writeFile(filepath, template, { flag: 'w+' });

main().catch((err) => console.error(err));
