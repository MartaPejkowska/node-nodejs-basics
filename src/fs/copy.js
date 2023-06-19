import * as fs from 'fs';
import { getDirname } from '../util/getDirname.js';
import path from 'path';

const src=path.join(getDirname(import.meta.url), 'files')
const dest=path.join(getDirname(import.meta.url),'files_copy')

const copy = async () => {
    fs.cp(src, dest,{recursive: true ,force:false, errorOnExist:true},function (err) {
        if (err) throw new Error('FS operation failed');
        else console.log('File was ceopied successfully')});
};

await copy();
