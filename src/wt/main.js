import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from "url";
import { rejects } from 'assert';



const performCalculations = async () => {

    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'worker.js');


    const numCPU = os.cpus().length;
    const promises = Array.from({ length: numCPU }, (_, i) => new Promise((resolve, reject) => {
        const worker = new Worker(filePath);
        worker.postMessage(10 + i);
        worker.on('message', (result) => {
            resolve({ status: 'resolved', data: result });
        });
        worker.on('error', (err) => {
            resolve({ status: 'error', data: null });
            reject(err);
        });
    }));
let dog = (dd) => {    console.log(dd);
    return process.exit();
};
    const results = await Promise.allSettled(promises);
    dog(results);
};

await performCalculations();