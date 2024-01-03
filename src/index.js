// const fs = require("fs/promises");
// const fileName = "myfile.txt";
// const reader = async (fileName) => {
//   // write code here
// 	// dont change function name
  
// };


// module.exports =  reader ;
const fs = require('fs');

// Function to read the content of the file
function reader(filename) {
  try {
    // Use fs.readFileSync to read the content of the file
    const content = fs.readFileSync(filename, 'utf-8');
    
    // Return the content
    return content;
  } catch (error) {
    // Handle errors if any (e.g., file not found)
    console.error(`Error reading file: ${error.message}`);
    return null;
  }
}

// Example usage:
const filename = 'myfile.txt';
const fileContent = reader(filename);

// Check if content is not null
if (fileContent !== null) {
  console.log(`File Content: ${fileContent}`);
} else {
  console.error('Error reading file');
}
