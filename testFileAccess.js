import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testFilePath = path.join(__dirname, 'test-file.txt');

// Create or write to the file
fs.writeFile(testFilePath, 'Test content', (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File written successfully.');
  }

  // Check if the file exists
  fs.access(testFilePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('File does not exist or cannot be accessed:', err);
    } else {
      console.log('File exists and is accessible.');
    }
  });
});
