import fs from 'fs';
import { getDirname } from '../util/getDirname.js';
import path from 'path';

const old=path.join(getDirname(import.meta.url), 'files_copy', 'wrongFilename.txt')
const newPath= path.join(getDirname(import.meta.url),'files_copy',' properFilename.md')

const rename = async () => {
    fs.rename(old, newPath, (err) => {
        if (err) throw new Error('FS operation failed');
        console.log('Rename complete');
      });
};

await rename();