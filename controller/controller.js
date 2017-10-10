const express = require('express');
const route = express.Router();
const ls_computer = require('../service/srv_computer');
const ls_resource = require('../service/srv_resource');

module.exports = route;

//타겟 컴퓨터 생성
route.route(ls_computer.create.url).post(ls_computer.create.func);

//타켓 컴퓨터들 조회
route.route(ls_computer.read.url).get(ls_computer.read.func);

//타켓 컴퓨터 삭제
route.route(ls_computer.delete.url).delete(ls_computer.delete.func);



//자원 생성
route.route(ls_resource.create.url).post(ls_resource.create.func);

//자원 조회
route.route(ls_resource.readByTime.url).get(ls_resource.readByTime.func);
route.route(ls_resource.readByCount.url).get(ls_resource.readByCount.func);

//자원 삭제
route.route(ls_resource.delete.url).delete(ls_resource.delete.func);
