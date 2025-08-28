import fs from 'fs';

fs.readFile('zomato.json',(err,data)=>{
    if(err) console.log(err);

    const zomatoData = JSON.parse(data);
    const resdata = zomatoData[0];
    // console.log(resdata[0].restaurants.location.vity);
    
    // resdata[0].restaurants.location.city

    const city = resdata.map(ele => {
        return ele.restaurants.location.city;
    })
    city.filter(ele => {
        ele == 'Gurgaon' ? console.log(ele) : '';
    })
})

