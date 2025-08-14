const mongoose=require('mongoose')
//const Connection_String="mongodb://127.0.0.1:27017/qprofile_project";
const 
 Connection_String="mongodb+srv://ashishranjancu17:AR123@cluster0.s2sdy.mongodb.net/";
async function connection(){
    try{
        await mongoose.connect(Connection_String);
        console.log("MongoDb Connected")
        }
        catch(err){
            console.log("Connection Err"+err)
        }
}
module.exports=connection;
