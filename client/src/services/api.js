import axios from 'axios';


export const getNews =async()=>{
    const URL ='';
    try {
       const {data} =  await axios.get(URL);
       return data;
    } catch (error) {
        console.log('Error while calling getNews API',error);
    }
}