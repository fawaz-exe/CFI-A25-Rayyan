import axios from "axios";
import rs from "readline-sync";

function add(n1, n2) {
  const url = `http://124.123.33.242/add/${n1}/${n2}`;
  return axios.get(url);
}

let num1 = rs.questionInt("Enter the num1: ");
let num2 = rs.questionInt("Enter the num2: ");

add(num1, num2)
  .then((res) => {
    let sum1 = res.data;
    let num3 = rs.questionInt("Enter num3: ");
    console.log(sum1);
    add(sum1, num3)
      .then((res2) => {
        let sum2 = res2.data;
        let num4 = rs.questionInt("Enter num4: ");
        console.log(sum2);
        add(sum2, num4)
          .then((res3) => {
            console.log("Sum3:", res3.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));