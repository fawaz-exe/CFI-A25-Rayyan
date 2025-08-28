import axios from 'axios';

const githubUsers = ['fawaz-exe', 'alishashaikh-create','nooreinfatima', 'umamadinaz', 'amtulnoor-15','syed-effath', 'syedsuleiman11', 'Anashussain17', 'mohishaik1'];
const sortedArr = githubUsers.sort();
console.log(githubUsers);

const url = 'https://api.github.com/users';
const key = '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'


// function hitAPI(username){
//     return axios.get(`${url}/${username}`, {
//         headers: {
//             'Authorization': `Bearer ${key}`
//         }
//     });
// }

const urls = sortedArr.map(user => axios.get(`${url}/${user}`,{
             headers: {
                 'Authorization': `Bearer ${key}`
             }
       }));

       console.log('Line No: 26',urls);

       Promise.all(urls)
        .then(res => {
            res.forEach(responses =>{
                console.log(responses.data.name);
            })
        })
        .catch(err => console.log(err));