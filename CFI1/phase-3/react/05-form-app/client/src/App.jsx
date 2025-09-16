import React, { useState } from 'react';
import axios from 'axios';

//Styles
import './styles/App.css';

const App = () => {


  const [formData, setFormData] = useState({
    email : "",
    name: "",
    firstVisit: ""
  });

  const onChangeHandler = (e)=>{
    console.log(e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const onSubmitHandler = async (e)=>{
    try {
      e.preventDefault();
      console.log(formData);
      const {data} = await axios.post('http://localhost:5000/contact', formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div className='container'>
      <center>
      <h1>Contact Form</h1>
      <form onSubmit={onSubmitHandler}>
        <div className='form-group'>
            <label htmlFor='email'>Email Address:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter your Email Address' onChange={onChangeHandler} style={{width:'50%'}}/>
            <label htmlFor='name'>Full Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter your Full Name' style={{width:'50%'}} onChange={onChangeHandler}/>

            <fieldset>
              <legend>Is this your first visit to the website?</legend>
              <input type='radio' id='firstVisit' name='firstVisit' value="Yes" onChange={onChangeHandler}/>
              <label htmlFor='Yes'>Yes</label>
              <br/>
              <input type='radio' id='firstVisit' name='firstVisit' value="NO" onChange={onChangeHandler}/>
              <label htmlFor='No'>No</label>
            </fieldset>
        </div>
        <input type='submit' className='btn btn-dark' value="Submit"/>
      </form>
      </center>
    </div>
    </>
  )
}

export default App;

/**
 * API?
 * REST API
 * HTTP
 */