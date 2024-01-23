
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from "url";



const remove = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
    try {
        await fs.access(filePath, fs.constants.F_OK);
    } catch (error) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.unlink(filePath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();