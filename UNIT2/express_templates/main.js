// const port = 3000;

// expressモジュールをアプリケーションに追加
const express = require('express');

const layouts = require('express-ejs-layouts');

// expressアプリケーションをapp定数に代入
const app = express();

const homeController = require('./controllers/homeController');

app.set('view engine', 'ejs');

app.set('port', process.env.POST || 3000);

// URLエンコードされたデータを解析する
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());

app.use(layouts);

// ミドルウェア関数を定義
app.use((req, res, next) => {
  // リクエストのパスをログに出力する
  console.log(`request made to: ${req.url}`);
  // next関数を呼び出す
  next();
});

// ホームページ用に新しいPOST経路を作る
app.post('/', (req, res) => {
  // リクエスト本文をロギング
  console.log(req.body);
  console.log(req.query);
  res.send('POST Successful!');
});

// ホームページのGET経路を設定
app.get('/items/:vegetable', homeController.sendReqParam);

app.get('/name/:myName', homeController.respondWithName);

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});

