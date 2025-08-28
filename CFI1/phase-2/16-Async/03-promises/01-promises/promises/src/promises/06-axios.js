// Take everyones username from the cohort, and put it inside an array.
// I want their name, username, followers, follwing of all the bootcampers in class.

import axios from 'axios';

const githubUsers = ['fawaz-exe', 'alishashaikh-create','nooreinfatima', 'umamadinaz', 'amtulnoor-15','syed-effath', 'syedsuleiman11', 'Anashussain17', 'mohishaik1'];

const url = 'https://api.github.com/users';
const key = "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" // do not copy this key


function hitAPI(username){
    return axios.get(`${url}/${username}`, {
        headers: {
            'Authorization': `Bearer ${key}`
        }
    });
}

githubUsers.forEach((ele)=>{
    hitAPI(ele)
        .then(res =>{
            console.log('Name: ', res.data.name);
        })
        .catch(err => console.log(err));
})