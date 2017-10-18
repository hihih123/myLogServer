
const Computer = require('../models/computer');

//타겟 컴퓨터 생성

exports.create = (res, id, name) => {

  // const com = new Computer({
  //   com_id : id,
  //   name : name
  // });

  Computer.findOneAndUpdate(
       {com_id: id}, /* query */
       {com_id: id, name: name}, /* update */
       {upsert: true}, /* create if it doesn't exist */
       (err) => {
         if(err) console.log(err);
         else res.status(200).json({result: 'success'});
       });

  // com.save((err) => {
  //   if(err) console.log(err);
  //   else res.status(200).json({result: 'success'});
  // });
}

//타겟 컴퓨터 조회

exports.read = (res) => {

  Computer.find((err,docs) => {
    if(err) console.log(err);
    else res.status(200).json(docs);
  });
}

//타겟 컴퓨터 삭제

exports.delete = (res, id) => {

  Computer.remove({com_id: id},(err, computer) => {
    if(err) console.log(err);
    else res.status(200).json({result: 'success'});
  });
}
