const path = require('path');
const fs = require('fs');

const basePathToData = path.join(__dirname, 'data');

const getJsonData = function (basePathToData, filename) {
  var filename = path.join(basePathToData, filename);
  return JSON.parse(fs.readFileSync(filename, 'utf-8'));
};

exports.getData = function (request, response) {
  var data = getJsonData(basePathToData, 'document.json');
  return response.send(data);
};

exports.uploadFile = function (request, response) {
  return response.send({message: 'file upladed'});
};

exports.download = function (request, response) {
  var filename = path.join(basePathToData, 'Jan 2023.pdf');
  return response.sendFile(filename);
};