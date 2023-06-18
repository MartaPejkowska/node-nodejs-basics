import zlib from 'zlib'
import fs from 'fs';
import { getDirname } from '../util/getDirname.js';
import path from 'path';

const fileToDecompress=path.join(getDirname(import.meta.url),'files','archive.gz');
const fileOutput=path.join(getDirname(import.meta.url),'files','fileToCompress.txt')

const decompress = async () => {
    const unzip=zlib.createUnzip();
    const input=fs.createReadStream(fileToDecompress);
    const output=fs.createWriteStream(fileOutput);

    input.pipe(unzip).pipe(output)

    console.log('File unzipped succesfully')
};

await decompress();