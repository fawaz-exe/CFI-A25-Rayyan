import axios from "axios";
import rs from "readline-sync";

function hitAPI(n1, n2) {
  const url = `http://192.168.0.4:8080/add/${n1}/${n2}`;
  return axios.get(url);
}

async function add() {
  try {
    let num1 = rs.questionInt("Enter the num1: ");
    let num2 = rs.questionInt("Enter the num2: ");
    let res = await hitAPI(num1, num2);
    const sum1 = res.data;
    console.log(sum1);

    let num3 = rs.questionInt("Enter num3: ");
    res = await hitAPI(sum1, num3);
    let sum2 = res.data;
    console.log(sum2);

    let num4 = rs.questionInt("Enter num4: ");
    res = await hitAPI(sum2, num4);
    let sum3 = res.data;
    console.log(sum3);
  } catch (error) {
    console.log(error);
  }
}

add();

