import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    // console.log(response);
    const data = response.data;
    console.log(data);
})
.catch((error)=> console.log(error));