import axios from 'axios'

const url = 'https://gist.githubusercontent.com/Shadid12/18642d735214920921f4f470300be11e/raw/6dcf7b456c40f110c313bbb1678474b01756bc1a/restaurants.json'

const key = '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'

function hitAPI(){
    return axios.get(url,{
        header: {
            'Authorization': `Bearer ${key}`
        }
    });
}
hitAPI()
    .then(res => {
        const responseData =  res.data
        responseData.forEach((ele)=>{
            console.log(ele.name);
            // let sum = 0;
            // ele.grades.forEach(grade =>sum+=grade)
            
            const sum = ele.grades.reduce((acc,currentValue)=>{
                return acc += currentValue
            },0)
            // console.log(sum)
            // console.log((sum/ele.grades.length).toFixed(2));

            const ObjectData = {
                name: ele.name,
                grades: ele.grades,
                aveage: Math.floor(sum/ele.grades.length)
            }

            console.log(ObjectData)
        })
    })
    .catch(err => console.log(err))