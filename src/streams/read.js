import fs from 'fs'
import { getDirname } from '../util/getDirname.js';
import path from 'path';

const fileToRead= path.join(getDirname(import.meta.url),'files','fileToRead.txt')


const read = async () => {
    fs.readFile(fileToRead,{ encoding: 'utf8' },(err,data)=>{
        if(err) {console.log(err)}
        process.stdout.write(data);

    })

};

await read();