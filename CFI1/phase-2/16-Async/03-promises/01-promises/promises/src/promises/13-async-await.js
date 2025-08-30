import axios from "axios";

async function hitAPI() {
  try {
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
  } catch (error) {
    console.log(err);
  }
}

hitAPI();