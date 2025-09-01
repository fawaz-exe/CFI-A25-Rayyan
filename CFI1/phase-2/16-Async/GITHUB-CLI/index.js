/**
 * Github CLI - Command Line Interface
 *
 * 0 - Exit
 * 1 - Login Name of Github users
 * 2-  Follower of Github Users
 *
 * Input the name of username
 */

import loginNamesGithub from "./loginNames.js";
import axios from "axios";
import config from "config";

async function followers() {
  try {
    const res = await axios.get("https://api.github.com/users", {
      headers: {
        Authorization: `Bearer ${config.get("GITHUB_KEY")}`,
      },
      auth: {
        username: "fawaz-exe",
        password: config.get("GITHUB_KEY"),
      },
    });
    // console.log(res.data);

    for (let i = 0; i < res.data.length; i++) {
      let user = await axios.get(res.data[i].url, {auth: {username: "fawaz-exe",password: config.get("GITHUB_KEY"),},});
        // res.data[i].followers = user.data.followers;
        console.log(user.data.name,user.data.followers);
    }


    // console.log(followersData);
  } catch (error) {
    console.log(error);
  }
}

followers();