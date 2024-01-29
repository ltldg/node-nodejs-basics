import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const path = join(__dirname, 'files','script.js');
  const child = spawn('node', [path, ...args], {
    stdio: [process.stdin, process.stdout, 'pipe', 'ipc']
});

child.on('error', (error) => {
    console.error(` error: ${error.message}`);
});

};

spawnChildProcess(['car', 'landscape']);


