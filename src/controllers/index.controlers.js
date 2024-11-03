const Cntrl={};
const Photo= require('../models/image')

Cntrl.renderindex=async(req,res) => {
    const image=await Photo.find()
  
    res.render('index',{image});
};

Cntrl.renderImage=async(req,res) => {
    const {_id}= req.params;
    const image= await Photo.findById(_id)
        console.log(image);
    res.render('image',{image})
}



Cntrl.postindex=async(req,res) => {
    const ext=req.file.filename;
    console.log(ext);
     const photo= new Photo({
        title:req.body.title,
        description:req.body.description,
        filename:ext,
    });
  
    await photo.save();
    res.redirect('/')
}

Cntrl.imgDelete=async(req,res) => {

    const{_id}=req.params;
    await Photo.findByIdAndDelete(_id)
    
    
    res.redirect('/')
}


module.exports=Cntrl;