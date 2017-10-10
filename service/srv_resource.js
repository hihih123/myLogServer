
const dao_resource = require('../dao/dao_resource');

//자원 생성

exports.create = {
  url : '/resource/com-id/:id/local-time/:time/cpu/:cpu/mem/:mem/hdd/:hdd',
  func : (req, res) => {

    dao_resource.create(req.prams.id, req.params.time, req.params.cpu, req.params.mem, req.params.hdd);
    res.send('결과 : 자원 생성');
  }
}

//자원 조회

exports.readByTime = {
  url : '/resource/com-id/:id/from-time/:time',
  func : (req, res) => {

    dao_resource.readByTime(req.params.id, req.params.time);
    res.send('결과 : 자원 읽기, 시간');
  }
}

exports.readByCount = {
  url : '/resource/com-id/:id/from-count/:count',
  func : (req, res) => {

    dao_resource.readByCount(req.params.id, req.params.count);
    res.send('결과 : 자원 읽기, 카운트');
  }
}

//자원 삭제

exports.delete = {
  url : '/resource/com-id/:id',
  func : (req, res) => {

    dao_resource.delete(req.params.id);
    res.send('결과 : 자원 삭제');
  }
}
