
const srv_computer = require('../service/computer');

module.exports = function(app)
{

  //타겟 컴퓨터 생성
  app.post('/computer/id/:id/name/:name', (req,res) => {

    srv_computer.create(res, req.params.id, req.params.name);
  });

  //타겟 컴퓨터 조회
  app.get('/computer/id', (req,res) => {

    srv_computer.read(res);
  });

  //타겟 컴퓨터 삭제
  app.delete('/computer/id/:id', (req,res) => {

    srv_computer.delete(res, req.params.id);
  });

}
