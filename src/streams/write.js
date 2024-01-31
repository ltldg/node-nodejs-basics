import fs from'fs';
import path from 'path';
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');



const write = async () => {
    const writeStream = fs.createWriteStream(filePath);

    process.stdin.pipe(writeStream);

    process.stdin.on('end', () => {
        console.log('Data has been written to file');
    });

    writeStream.on('error', (err) => {
        console.error('An error occurred:', err);
    });
};

await write();