const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
  name:{type:String,required:true},
  quantity:{type:Number,required:true},
  price:{type:Number,required:true},
  category:{type:String,required:true},
  imagePath:{type:String,required:true}
});

module.exports=mongoose.model('Product',productSchema);
