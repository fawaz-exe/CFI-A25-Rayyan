import axios from 'axios';

axios.get('https://api.github.com/users')
.then((res) => {
  console.log(res.data);
})
.catch(err => console.log(err));

function App(){
  return(
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App;