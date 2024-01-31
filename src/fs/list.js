import path from 'path';
import { fileURLToPath } from "url";
import fs from 'fs/promises';


const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const dirPath = path.join(__dirname, 'files');
    try {
        const files = await fs.readdir(dirPath);
        console.log(files);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw error;
        }
    }
};

await read();