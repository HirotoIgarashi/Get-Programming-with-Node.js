const port = 3000,
  // httpとhttp-status-codeのモジュールをロードする
  http = require('http'),
  httpStatus = require('http-status-codes'),
  // requestとresponseのパラメータを指定してサーバを作成
  app = http.createServer();

app.on('request', (request, response) => {

  // リクエストデータをログに出す
  console.log(request.method);
  console.log(request.url);
  console.log(request.headers);

  // レスポンスを準備
  response.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });

  let responseMessage = '<H1>This will show on the screen.</h1>';
  // HTMLでレスポンスする
  response.end(responseMessage);
});

// アプリケーションのサーバーにポート3000を監視させる
app.listen(port);

// 「サーバーが起動しました、監視しているポート番号は：」
console.log(`The server has started and is listening on port number: ${port}`);
