const fs = require('fs/promises');

async function readJson() {
  try {
    const rawData = await fs.readFile('./data.json', 'utf-8');
    const data = await JSON.parse(rawData);

    console.log(data);
  } catch (error) {
    console.error(error)
    return 
  }
}

readJson();