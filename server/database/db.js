import mongoose from "mongoose";


export const Connection = async (username,password) =>{
    const URL = `mongodb+srv://${username}:${password}@ecommerce.qqr77.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce`;

    try {
      await mongoose.connect(URL,{useNewUrlParser: true,useUnifiedTopology: true})
      console.log('database connected successfully');
    } catch (error) {
        console.error(error);
        
    }
}

export default Connection;