import {spawn} from 'node:child_process';
import { getDirname } from '../util/getDirname.js';
import path from 'node:path';

const childProgram=path.join(getDirname(import.meta.url),'files','script.js')

const spawnChildProcess = async (args) => {
    const childProcess = spawn(
        'node',
        [childProgram, ...args],
    );

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
await spawnChildProcess([1,2,3,'dsaf']);