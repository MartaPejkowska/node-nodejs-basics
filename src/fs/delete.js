import fs from 'fs';
import { getDirname } from '../util/getDirname.js';
import path from 'path';

const delPath=path.join(getDirname(import.meta.url),'files_copy','fileToRemove.txt')

const remove = async () => {
fs.unlink(delPath, err=>{
    if(err) throw new Error('FS operation failed')
    console.log('File removed')
})
};

await remove();