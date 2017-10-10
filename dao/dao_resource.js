
//자원 생성

exports.create = (id,time,cpu,mem,hdd) => {

  console.log('create com-id : ' + id);
  console.log('create time : ' + time);
  console.log('create cpu : ' + cpu);
  console.log('create mem : ' + mem);
  console.log('create hdd : ' + hdd);
}

//자원 조회

exports.readByTime = (id,time) => {

  console.log('read readByTime : ' + time);
}

exports.readByCount = (id,count) => {

  console.log('read readByCount : ' + count);
}

//자원 삭제

exports.delete = (id) => {

  console.log('delete com-id : ' + id);
}
