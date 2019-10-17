const port = 3000,
  // httpとhttp-status-codeのモジュールをロードする
  http = require('http'),
  httpStatusCodes = require('http-status-codes'),
  router = require('./router'),
  fs = require('fs'),
  plainTextContentType = {
    "Content-Type": "text/html"
  },
  htmlContentType = {
    "Content-Type": "text/html"
  },

// リクエストされた名前のファイルを探す
customReadFile = (file, response) => {
  // ファイルは存在するか
  fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
      console.log('Error reading the file...');
    }
    response.end(data);
  });
};

router.get('/', (request, response) => {
  response.writeHead(httpStatusCodes.OK, plainTextContentType);
  response.end('INDEX');
});

router.get('/index.html', (request, response) => {
  response.writeHead(httpStatusCodes.OK, htmlContentType);
  customReadFile('views/index.html', response);
});

router.post('/', (request, response) => {
  response.writeHead(httpStatusCodes.OK, plainTextContentType);
  response.end('POSTED');
});

http
.createServer(router.handle)
.listen(port);

// 「サーバーが起動して、このポートを監視中：」
console.log(`The server has started and is listening on port number: ${port}`);
