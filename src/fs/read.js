import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname,"files" ,'fileToRead.txt');

const read = async () => {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        console.log(content);
    } catch (error) {
            throw new Error('FS operation failed');
        }
    }


await read();