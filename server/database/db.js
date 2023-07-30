import mongoose from "mongoose";

export const Connection = async () => {
  const URL = `mongodb://user:codeforinterview@ac-6pjm841-shard-00-00.jqoc0ia.mongodb.net:27017,ac-6pjm841-shard-00-01.jqoc0ia.mongodb.net:27017,ac-6pjm841-shard-00-02.jqoc0ia.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-10ifxs-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true,useNewUrlParser: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.log("Error while connecting the database", error);
  }
}