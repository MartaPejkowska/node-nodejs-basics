import fs from 'fs'
import { getDirname } from '../util/getDirname.js';
import path from 'path';

const fileToRead= path.join(getDirname(import.meta.url),'files_copy','fileToRead.txt')

const read = async () => {
    fs.readFile(fileToRead,{ encoding: 'utf8' },(err,data)=>{
        if (err) throw new Error('FS operation failed')
        console.log(data)
    })
};

await read();