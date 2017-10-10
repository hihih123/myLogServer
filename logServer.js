const express = require('express');
const app = express();
const port = 3000;
const routeList = require('./controller/controller');

app.use(routeList);

app.listen(port, (err) => {

  if(err) console.log(err);
  else{
    var d = new Date();
    console.log('서버가 가동되었습니다. - ' + d);
  }
});
