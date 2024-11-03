const {Router}= require('express');
const router= Router();
const {renderindex,
       postindex,
       renderImage,
       imgDelete
   }= require('../controllers/index.controlers');

router.get('/',renderindex);

router.post('/images/add',postindex);

router.get('/image/:_id',renderImage);

router.get('/image/delete/:_id',imgDelete);


module.exports=router;