var sys = require('sys');
var exec = require('child_process').exec;
var os = require('os');
const fs = require('fs');
const path = require('path');

function puts(error, stdout, stderr) { sys.puts(stdout) }

function runOsCommand(commands) {
  const osType = os.type();
  if (!(osType in commands)) {
    throw new Error(`Unsupported OS: ${osType}`);
  }
  exec(commands[osType], puts);
}

async function processFiles(files, targetString, replacementString) {
  let modifiedCount = 0;
  for (const { path } of files) {
    try {
      const content = await fs.promises.readFile(path, 'utf8');

      if (content.includes(targetString)) {
        const newContent = content.replace(new RegExp(targetString, 'g'), replacementString);
        await fs.promises.writeFile(path, newContent);
        modifiedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${path}:`, error);
    }
  }
  return modifiedCount;
}

async function replaceStringInFiles(inputDir, targetString, replacementString) {
  return new Promise((resolve, reject) => {
    const filesToProcess = [];

    async function traverseDirectory(dirPath) {
      const files = await fs.promises.readdir(dirPath);

      for (const file of files) {
        const filePath = path.join(dirPath, file);

        try {
          const stats = await fs.promises.stat(filePath);

          if (stats.isDirectory()) {
            if (file !== '.git' && !file.startsWith('.git')) {
              await traverseDirectory(filePath);
            }
          } else if (!stats.isFile() || file.endsWith('.bin')) {
            continue;
          }

          filesToProcess.push({ path: filePath });
        } catch (error) {
          console.error(`Error processing ${filePath}:`, error);
        }
      }

      resolve(filesToProcess);
    }

    traverseDirectory(inputDir).then(async () => {
      if (filesToProcess.length > 0) {
        const modifiedCount = await processFiles(filesToProcess, targetString, replacementString);
        console.log(`${modifiedCount} files were modified.`);
      } else {
        console.log('No files to process.');
      }
    }).catch(reject);
  });
}

function promptUserInput(prompt) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    readline.question(prompt, (input) => {
      readline.close();
      resolve(input.trim());
    });
  });
}

async function AskForReplacement(var_name, var_description, inputDir) {
  console.log(`Description: ${var_description}`);
  const replacementString = promptUserInput(`${var_name}:`);
  if (!replacementString || replacementString === "") {
    AskForReplacement(var_name, var_description, inputDir);
    return;
  }

  try {
    await replaceStringInFiles(inputDir, var_name, replacementString);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

async function main() { // Main execution
  const inputDir = process.cwd();
  await AskForReplacement("<VARIABLE_NAME>", "User Friendly Variable Description", inputDir);
}

main();


