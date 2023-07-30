import { data } from "./constants/data.js";
import News from "./model/new-schema.js";

const DefaultData = async()=>{
    try {
        await News.insertMany(data);
        console.log('data imported successfully');
    } catch (error) {
        console.log('Error while calling default data',error);
    }
}
export default DefaultData;