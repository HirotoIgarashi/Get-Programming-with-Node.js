// 経路としてレスポンスの対応を定義するマップ
const routeResponseMap = {
  '/info': '<h1>Info Page</h1>',
  '/contact': '<h1>Contact Us</h1>'
};
const port = 3000,
  // httpとhttp-status-codeのモジュールをロードする
  http = require('http'),
  httpStatus = require('http-status-codes'),
  // requestとresponseのパラメータを指定してサーバを作成
  app = http.createServer((request, response) => {
    // 「リクエストを受信しました！」
    console.log('Received an incoming request!');
    // クライアントに対するレスポンスを書く
    response.writeHead(httpStatus.OK, {
      "Content-Type": "text/html"
    });

    // リクエストの経路がマップで定義されているかチェック
    if (routeResponseMap[request.url]) {
      // レスポンスをsetTimeoutでラップして、わざとレスポンスを遅くする
      setTimeout(() => response.end(routeResponseMap[request.url]), 2000);

      // response.end(routeResponseMap[request.url]);
    }
    else {
      // デフォルトのHTMLでレスポンス
      response.end('<h1>Welcome!</h1>');
    }

  });

// アプリケーションのサーバーにポート3000を監視させる
app.listen(port);

// 「サーバーが起動して、このポートを監視中：」
console.log(`The server has started and is listening on port number: ${port}`);
