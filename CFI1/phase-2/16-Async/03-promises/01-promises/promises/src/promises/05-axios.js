import axios from 'axios';
import readlineSync from 'readline-sync';

const key = "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"

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
        console.log('Username: ', res.data.login);
        console.log('Following: ', res.data.following);
        console.log('City: ', res.data.location);
    })
    .catch(err => console.log(err));