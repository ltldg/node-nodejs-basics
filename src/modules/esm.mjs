import path from 'path';
import { release, version } from 'os';
import { fileURLToPath } from "url";
import { createServer as createServerHttp } from 'http';
import a from './files/a.json' assert {type: "json"};
import b from './files/b.json' assert {type: "json"};

import('./files/c.js');

const __dirname = fileURLToPath(import.meta.url)
const filename =  path.dirname(__dirname);
export let unknownObject;
const random = Math.random();

if (random > 0.5){
    unknownObject = a
} else unknownObject = b

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, response) => {
    response.end('Request accepted');
});