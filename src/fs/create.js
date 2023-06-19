import * as fs from 'fs';
import path from 'node:path';
import { getDirname } from '../util/getDirname.js';

const pathToFile=path.join(getDirname(import.meta.url), 'files', 'fresh.txt')

const create = async () => {
    fs.writeFile(pathToFile,'I am fresh and young',{flag:'wx+'},function (err) {
        if (err) throw new Error('FS operation failed');
        else console.log('File was created successfully');
    })
};

await create();