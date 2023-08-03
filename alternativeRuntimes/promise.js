const { readFile } = require('fs').promises;

async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
    console.log(file);
}

hello();