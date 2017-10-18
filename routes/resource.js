
const srv_resource = require('../service/resource');

module.exports = function(app)
{

  //자원 생성
  app.post('/resource/com-id/:id/cpu/:cpu/mem/:mem/hdd/:hdd', (req,res) => {

    srv_resource.create(res, req.params.id, req.params.cpu, req.params.mem, req.params.hdd);
  });

  //자원 조회
  app.get('/resource/com-id/:id/count/:count', (req,res) => {

    srv_resource.read(res, req.params.id, req.params.count);
  });

  //자원 삭제
  app.delete('/resource/com-id/:id', (req,res) => {

    srv_resource.delete(res, req.params.id);
  });

}
