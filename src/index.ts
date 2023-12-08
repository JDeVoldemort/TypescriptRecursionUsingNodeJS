import * as fs from 'fs';
import * as path from 'path';
//read directory function
function readDirectory(dirPath: string) {
    const entries = fs.readdirSync(dirPath);
// loop through each item in the directory
    for (const entry of entries) {
        const entryPath = path.join(dirPath, entry);
        const entryStats = fs.statSync(entryPath);

        if (entryStats.isFile()) {
            // console long file path for each file
            console.log(entryPath);
            // add list features to use a list of files in future for stat puposes
        // if item is a folder (direcorruy) call the function recursivly to read files in subfolders
        } else if (entryStats.isDirectory()) {
            readDirectory(entryPath);
        }
    }
}
// call readdirectory function
readDirectory('./');
readDirectory('./src');
readDirectory('c:/Users/drago/OneDrive/Pictures/lotr cards');