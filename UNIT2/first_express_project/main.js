const port = 3000;

// expressモジュールをアプリケーションに追加
const express = require('express');

// expressアプリケーションをapp定数に代入
app = express();

// ホームページのGET経路を設定
app.get('/', (req, res) => {

  // requestのパラメータをアクセスする
  console.log(req.params);
  // リクエストの内容
  console.log(req.body);
  // リクエストのurl
  console.log(req.url);
  // リクエストのクエリ文字列
  console.log(req.query);

  // サーバからクライアントへのレスポンスを発行
  res.send('Hello, Universe!');
})
.listen(port, () => {
  console.log('The Express.js server has started and is listening on port number:' + `${port}`);
});

