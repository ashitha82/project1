import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('{ mongodb+srv://ashitha:<anil.9892>@cluster0.0vi4l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0}/project').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.