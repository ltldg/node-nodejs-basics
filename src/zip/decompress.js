import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputFilePath = path.join(__dirname, 'files', 'archive.gz');
const outputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    const readStream = fs.createReadStream(inputFilePath);
    const writeStream = fs.createWriteStream(outputFilePath);
    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File has been decompressed');
    });

    writeStream.on('error', (err) => {
        console.error('An error occurred:', err);
    });
};

await decompress();