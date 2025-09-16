function App(){
  let myElement = <h1>I'm a element outside of JSX</h1>;
  let button = <button>I'm a Button!</button>
  const fruits = ['apple', 'pineapple', 'orange', 'banana', 'watermelon','avacado'];
  return(
    <div>
      <h1>React is {10+2} times better!</h1>
      {myElement}{button}
      {/* <h1>{fruits[0]}</h1>
      <h1>{fruits[1]}</h1>
      <h1>{fruits[2]}</h1>
      <h1>{fruits[3]}</h1> */}
  {
    fruits.map((item)=>(
      <h1>{item}</h1>
    ))
  }

    </div>
  )
}

export default App;

/**
 * JSX Syntax:
 * () => HTML
 * {} => Javascript
 */