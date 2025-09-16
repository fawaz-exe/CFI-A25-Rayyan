import axios from "axios";
import { useEffect, useState } from "react";
import Title from "./components/Title";

import "./App.css";
import TableHeader from "./components/TableHeader";
import Loading from "./components/Loading";

function App() {
  const [data, setData] = useState([]);
  const [completed,setCompleted] = useState(true);
  const [totalData, setTotalData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/todos`
        );
        console.log(res.data);
        setData(res.data);
        setTotalData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const filterTodos = () => {
    const filteredData = totalData.filter((ele) => ele.completed == completed);
    setData(filteredData);

    // if(completed){
    //     const filteredData = data.filter((ele) => ele.completed);
    //     setData(filteredData);
    // } else {
    //     const filteredData = data.filter((ele) => !ele.completed);
    //     setData(filteredData);
    // }

    setCompleted(!completed);

  };


  return (
    <>
      <center>
        <Title />
        {/* <button onClick={filterTodos}>Filter Todo</button>
         */}
         {loading && <Loading/>}
        <label className="switch">
          <input type="checkbox" onClick={filterTodos}/>
          <span className="slider round"></span>
        </label>

        <table>
          <TableHeader/>
          <tbody>
            {data.map((ele, i) => (
              <tr key={i}>
                <td>{ele.userId}</td>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.completed ? "true" : "false"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </>
  );
}

export default App;


/**
 * React Hooks:
 * 
 * 1) State: Dynanmic Data of a compenent
 * 2) useEffect: to make api calls to get the data, post the data or do api operations.
 * 3) props: input to a component
 */