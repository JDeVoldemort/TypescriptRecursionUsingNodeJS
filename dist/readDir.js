// import modules
import * as fs from 'fs';
import * as path from 'path';
// create recursive funtion readDirectory
function readDirectory(dirPath) {
    const entries = fs.readdirSync(dirPath);
    for (const entry of entries) {
        const entryPath = path.join(dirPath, entry);
        const entryStats = fs.statSync(entryPath);
        if (entryStats.isFile()) {
            console.log(entryPath);
        }
        else if (entryStats.isDirectory()) {
            readDirectory(entryPath);
        }
    }
}
readDirectory('./');
