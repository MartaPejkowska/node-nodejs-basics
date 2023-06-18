import fs from 'fs';
import { getDirname } from '../util/getDirname.js';
import path from 'path';

const write = async () => {
    const file = fs.createWriteStream(path.join(getDirname(import.meta.url),'files','fileToWrite.txt'));
    process.stdin.on('data', data => {
        file.write(data)
        process.exit();
      });

};

await write();