import mongoose from "mongoose";

async function connect() {
  await mongoose.connect(
    "mongodb+srv://Hrushi:hrushi123@expensor-mern.qctunid.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("MongoDB Coonection");
}
export default connect;
