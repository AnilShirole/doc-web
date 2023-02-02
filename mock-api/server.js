const express = require('express');

const app = express();

var cors = require('cors');
app.use(cors({
    origin: '*'
}));

var path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

var dataController = require('./src/dataController');

app.get('/api/document', dataController.getData);

app.post('/api/document', dataController.uploadFile);

app.get('/api/document/download', dataController.download);
const port = 3002;

app.listen(process.env.PORT || port, () => console.log(`Mock API app listening on port ${port}!`));
