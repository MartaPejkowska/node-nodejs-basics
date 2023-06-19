import { Worker} from 'node:worker_threads'
import {getDirname} from '../util/getDirname.js'
import {cpus} from 'os'
import path from 'node:path';

const hostCPU=cpus().length;
const startNumber=10
const results=[]

const workerFile=path.join(getDirname(import.meta.url),'worker.js')

const performCalculations = async () => {
    for(let i=0; i<hostCPU;i++){
       const worker= new Promise((resolve, reject) => {
            const newWorker = new Worker(workerFile, {
              workerData: startNumber+i,
            });

        newWorker.on('message', data => {
            resolve({
                status: 'resolved',
                data: data
            });
        });

        newWorker.on('error', data => {
            reject({
                status: 'error',
                data: null
            });
        })
    }
    )

    try{
        results.push(await worker)
    }
    catch{
        err=>console.log(err)
    }

}
console.log(results)
return results
};

await performCalculations();