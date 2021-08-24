'use strict';
var dbConn = require('./../../config/db.config');
//Student object create
var Groups = function(group_data){
  this.name           = group_data.name;
  this.teacher        = group_data.teacher;
};
Groups.create = function (newEmp, result) {
dbConn.query("INSERT INTO group_data set ?", newEmp, function (err, res) {
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
Groups.findById = function (id, result) {
dbConn.query("Select * from group_data where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, error);
}
else{
  result(null, res);
}
});
};
Groups.findAll = function (result) {
dbConn.query("Select * from group_data", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Group : ', res);
  result(null, res);
}
});
};
Groups.update = function(id, group_data, result){
dbConn.query(`UPDATE group_data SET 
name="` + group_data.name +`",
teacher="` + group_data.teacher +
`" WHERE id=`+ id , function (err, res){
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Groups.delete = function(id, result){
dbConn.query("DELETE FROM group_data WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Groups;