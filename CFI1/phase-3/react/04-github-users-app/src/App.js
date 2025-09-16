// packages
// import config from 'config';
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Users from "./components/Users";

//pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserPage from "./pages/UserPage";

let key = "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";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({})

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("https://api.github.com/users", {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        });
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const searchUsers = async (username) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${username}`,
        {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        }
      );
      // console.log(data.items);
      setUsers(data.items);
    } catch (error) {
      console.log(error);
    }
  };


  const getUser = async (username)=>{
    try {
      const {data} = await axios.get(`https://api.github.com/users/${username}`,{
        headers: {
          Authorization: `Bearer ${key}`,
        },
      })
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Search searchUsers={searchUsers} />
              <Users data={users} />
            </>
          }
        ></Route>

        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/user/:username" element={<UserPage getUser={getUser} user={user}/>}></Route>
      </Routes>
    </>
  );
}

export default App;