
const dao_computer = require('../dao/dao_computer');

//타겟 컴퓨터 생성

exports.create = {
  url : '/computer/id/:id/name/:name',
  func : (req, res) => {

    dao_computer.create(req.params.id, req.params.name);
    res.send('결과 : 컴퓨터 생성');
  }
}

//타겟 컴퓨터 조회

exports.read = {
  url : '/computer/id/',
  func : (req, res) => {

    dao_computer.read();
    res.send('결과 : 컴퓨터 조회');
  }
}

//타겟 컴퓨터 삭제

exports.delete = {
  url : '/computer/id/:id',
  func : (req, res) => {

    dao_computer.delete(req.params.id);
    res.send('결과 : 컴퓨터 삭제');
  }
}
