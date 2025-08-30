import axios from "axios";
import rs from "readline-sync";

function add(n1, n2) {
  const url = `http://192.168.0.4:8080/add/${n1}/${n2}`;
  return axios.get(url);
}

let num1 = rs.questionInt("Enter the num1: ");
let num2 = rs.questionInt("Enter the num2: ");

add(num1,num2)
    .then(res => {
        let sum1 = res.data;
        console.log('Sum1: ', sum1);
        let num3 = rs.questionInt("Enter num3: ");
        return add(sum1, num3)
    })
    .then((res)=>{
        let sum2 = res.data;
        console.log('Sum2: ', sum2);
        let num4 = rs.questionInt("Enter num4: ");
        return add(sum2, num4)
    })
    .then((res)=>{
        let sum3 = res.data;
        console.log('Sum3: ', sum3);
    })
    .catch(err => console.log(err));