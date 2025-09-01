import axios from "axios";
import config from 'config';



async function loginNamesGithub() {
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

    let names = res.data.map((user) => {
      return {
        name: user.login,
      };
    });

    names = names.sort((a,b) => {
        if(a.name < b.name){
            return -1;
        }
    });

    console.log(names);
  } catch (error) {
    console.log(error);
  }
}

// loginNamesGithub();

export default loginNamesGithub;