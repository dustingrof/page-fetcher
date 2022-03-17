const args = process.argv.slice(2, process.argv.length);
const fs = require('fs');
const request = require('request');

request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const content = body;
  fs.writeFile(args[1], content, err => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
});

const downloadFile = function() {

};