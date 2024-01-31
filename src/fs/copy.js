
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from "url";


const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
      const sourceDir = path.join(__dirname, 'files');
      const destDir = path.join(__dirname, 'files_copy');
   
      try {
        await fs.access(sourceDir, fs.constants.F_OK);
      } catch (error) {
        throw new Error('FS operation failed');
      }
    
      try {
        await fs.access(destDir, fs.constants.F_OK);
        throw new Error('FS operation failed');
      } catch (error) {
        if (error.code !== 'ENOENT') {
          throw error;
        }
      } 
fs.mkdir(destDir);
      const files = await fs.readdir(sourceDir);
    for (const file of files) {
      console.log(file);
const sourceFile = path.join(sourceDir, file);
        const destFile = path.join(destDir, file);
        await fs.copyFile(sourceFile, destFile); 
      } 
    
};

await copy();
