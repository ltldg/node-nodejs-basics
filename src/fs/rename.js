
import fs from'fs/promises';
import path from 'path';
import { fileURLToPath } from "url";


const rename = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const firstFile = path.join(__dirname, 'files','wrongFilename.txt');
    const secondFile = path.join(__dirname, 'files','properFilename.md');             

    try {
        await fs.access(firstFile, fs.constants.F_OK);
      } catch (error) {
        throw new Error('FS operation failed');
      }
    
      try {
        await fs.access(secondFile, fs.constants.F_OK);
        throw new Error('FS operation failed');
      } catch (error) {
        if (error.code !== 'ENOENT') {
          throw error;
        }
      }
    
      try {
        await fs.rename(firstFile, secondFile);
      } catch (error) {
        throw new Error('FS operation failed');
      }
};

await rename();