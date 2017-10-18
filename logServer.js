const express = require('express');
const cors = require('cors');//크로스 도메인 허용
const app = express();
const port = 3000;
const db = require('./common/db')('mylogserver');
const router = require('./routes');

// CORS 설정, 크로스 도메인 허용
app.use(cors());
// 라우트 설정
router(app);

app.listen(port, (err) => {

  if(err) console.log(err);
  else{
    var d = new Date();
    console.log('서버가 가동되었습니다.-' + d);
  }
});
