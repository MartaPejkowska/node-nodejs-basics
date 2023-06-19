import fs from 'fs'
import { getDirname } from '../util/getDirname.js';
import path from 'path';

const pathToRead= path.join(getDirname(import.meta.url),'files')
const list = async () => {
   fs.readdir(pathToRead,(err,files)=>{
    if(err) throw new Error('FS operation failed')
    else files.forEach((file)=>{console.log(file)})
   })
};

await list();