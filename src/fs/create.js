import fs from'fs/promises';
import path from 'path';
import { fileURLToPath } from "url";

const create = async () => {


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fresh.txt');
    try {
        await fs.access(filePath, fs.constants.F_OK);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(filePath, 'I am fresh and young');
            console.log('File created');
          } else {
            throw error;
          }
    }
};

await create(); 

