import process from 'process';

const parseEnv = () => {
    console.log(process.env);
    for (const key in process.env) {
        if (key.startsWith('RSS_')) {
            console.log(`${key}=${process.env[key]}`);
        }
    }
};

parseEnv();