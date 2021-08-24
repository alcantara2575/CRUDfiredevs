'use strict';
const Groups = require('../models/groups.model');
exports.findAll = function(req, res) {
Groups.findAll(function(err, groups) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', groups);
  res.send(groups);
});
};
exports.create = function(req, res) {
const new_groups = new Groups(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Groups.create(new_groups, function(err, groups) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Group added successfully!",data:groups});
});
}
};
exports.findById = function(req, res) {
Groups.findById(req.params.id, function(err, groups) {
  if (err)
  res.send(err);
  res.json(groups);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Groups.update(req.params.id, new Groups(req.body), function(err, groups) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Group successfully updated' });
});
}
};
exports.delete = function(req, res) {
Groups.delete( req.params.id, function(err, groups) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Group successfully deleted' });
});
};