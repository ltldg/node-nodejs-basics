import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const numCPUs = os.cpus().length;
    const promises = Array.from({ length: numCPUs }, (_, i) => new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js');
        worker.postMessage(10 + i);
        worker.on('message', (result) => {
            resolve({ status: 'resolved', data: result });
        });
        worker.on('error', (err) => {
            console.error('Worker error:', err);
            resolve({ status: 'error', data: null });
        });
        worker.on('exit', (code) => {
            if (code !== 0) {
                console.error(`Worker stopped with exit code ${code}`);
                resolve({ status: 'error', data: null });
            }
        });
    }));

    const results = await Promise.all(promises);
    console.log(results);
};

await performCalculations();