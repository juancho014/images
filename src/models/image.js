const {Schema,model}= require('mongoose')

const imageSchema= new Schema({
title:{type:String},
description:{type:String},
filename:{type:String},
public_id:{type:String},
timestamp:{type:Date,default:Date.now}
});

module.exports= model('photo',imageSchema);