import {createHash} from 'node:crypto'
import { getDirname } from '../util/getDirname.js';
import path from 'node:path';


const hashFile=path.join(getDirname(import.meta.url),'files','fileToCalculateHashFor.txt')

const calculateHash = async () => {
    const hash = createHash('sha256');

    hash.update(hashFile)
    const hex = hash.digest('hex');

    console.log(hex);
};

await calculateHash();