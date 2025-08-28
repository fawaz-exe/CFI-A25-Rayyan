import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    // console.log(response);
    const data = response.data;
    // console.log(data);
    const geo = data.map(ele => ele.address.geo);
    console.log(geo);


})
.catch((error)=> console.log(error));