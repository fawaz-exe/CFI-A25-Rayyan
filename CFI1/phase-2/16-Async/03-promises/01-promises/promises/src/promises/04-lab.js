import axios from 'axios';
import readlineSync from 'readline-sync';

const key = "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" // do not copy this key

function hitAPI(username){
    return axios.get(`https://api.github.com/users/${username}`,{
        headers: {
            'Authorization': `Bearer ${key}`
        }
    })
}

let askUsername = readlineSync.question('Enter the username: ');

hitAPI(askUsername)
    .then(res =>{
        console.log('Name: ', res.data.name);
        console.log('Username: ', res.data.login);
        console.log('Followers on Github: ', res.data.followers);
    })
    .catch(err => console.log(err));