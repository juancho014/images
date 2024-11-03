const mongoose=require('mongoose');
const URI= 'mongodb://127.0.0.1:27017/app-images';

mongoose.connect(URI,{   
}).then(db=>{console.log('conect and base');})
  .catch(err=>{console.log(err)})