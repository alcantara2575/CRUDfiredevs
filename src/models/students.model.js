'use strict';
var dbConn = require('./../../config/db.config');
//Student object create
var Estudent = function(student){
  this.name           = student.name;
  this.city           = student.city;
  this.email          = student.email;
  this.age            = student.age;
  this.sex            = student.sex;
  this.born_date      = student.born_date;
  this.group_id          = student.group_id;
};
Estudent.create = function (newEmp, result) {
dbConn.query("INSERT INTO students set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Estudent.findById = function (id, result) {
dbConn.query("Select * from students where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, error);
}
else{
  result(null, res);
}
});
};
Estudent.findAll = function (result) {
dbConn.query("Select * from students", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('students : ', res);
  result(null, res);
}
});
};
Estudent.update = function(id, student, result){
dbConn.query(`UPDATE students SET 
name="` + student.name +`",
city="` + student.city +`",
sex="` + student.sex +`",
group_id="` + student.group_id +`",
email="`+student.email+`",
age=`+student.age+
` WHERE id=`+ id , function (err, res){
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Estudent.delete = function(id, result){
dbConn.query("DELETE FROM students WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Estudent;