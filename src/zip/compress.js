import zlib from 'zlib'
import fs from 'fs';
import { getDirname } from '../util/getDirname.js';
import path from 'path';

const fileToCompress=path.join(getDirname(import.meta.url),'files','fileToCompress.txt')
const outputFile=path.join(getDirname(import.meta.url),'files','archive.gz')

const compress = async () => {
    const gzip=zlib.createGzip();
    const input= fs.createReadStream(fileToCompress);
    const output= fs.createWriteStream(outputFile);

    input.pipe(gzip).pipe(output);
    console.log('File compressed succesfully')
};

await compress();