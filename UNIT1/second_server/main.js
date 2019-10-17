// JavaScriptオブジェクトを文字列に変換する
const getJSONString = obj => {
  return JSON.stringify(obj, null, 2);
};

const port = 3000,
  // httpとhttp-status-codeのモジュールをロードする
  http = require('http'),
  httpStatus = require('http-status-codes'),
  // requestとresponseのパラメータを指定してサーバを作成
  app = http.createServer();

// リクエストを監視
app.on('request', (request, response) => {
  // チャンクを格納する配列を作成
  var body = [];
  // そのデータを別のコールバック関数で処理
  request.on('data', (bodyData) => {
    // 受信したデータをbody配列に入れる
    body.push(bodyData);
  });

  // データ転送の完了時に実行するコード
  request.on('end', () => {
    // body配列を文字列テキストに変換
    body = Buffer.concat(body).toString();
    // リクエストの内容をコンソールにロギングする
    console.log(`Request Body Contents: ${body}`);
  });

  // リクエストデータをログに出す
  console.log(`Method: ${getJSONString(request.method)}`);
  console.log(`URL: ${getJSONString(request.url)}`);
  console.log(`Headers: ${getJSONString(request.headers)}`);

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
