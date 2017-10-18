const mongoose = require('mongoose');
const Resource = require('../models/resource');

//자원 생성

exports.create = (res, id, cpu, mem, hdd) => {

  const rsc = new Resource({
    com_id : id,
    cpu : cpu,
    mem : mem,
    hdd : hdd
  });

  rsc.save((err) => {
    if(err) console.log(err);
    else res.status(200).json({result: 'success'});
  });
}

//자원 조회

exports.read = (res,id,count) => {

  if(count.length != 24){

    res.status(500).json({result: 'error ([count] length is wrong)'});
    return;
  }

  var refId = mongoose.Types.ObjectId(count);

  Resource.find({com_id: id, _id: {$gt:refId} }).exec((err,docs) => {
    if(err) console.log(err);
    else res.status(200).json(docs);
  });
}

//자원 삭제

exports.delete = (res, id) => {

  Resource.remove({com_id: id},(err, computer) => {
    if(err) console.log(err);
    else res.status(200).json({result: 'success'});
  });
}
