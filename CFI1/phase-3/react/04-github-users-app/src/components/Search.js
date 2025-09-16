import { useState } from 'react';
import '../styles/Search.css';

function Search({searchUsers}){

    const [username, setUsername] = useState("");

    const onChangeHandler = (e)=>{
        // console.log(e.target.value);
        setUsername(e.target.value);
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(username);
        searchUsers(username);
    }

    return (
    <>
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="text" id='search-bar' onChange={onChangeHandler}/>
                <input type='submit' id='submit' className='btn btn-dark' onSubmit={onSubmitHandler}/>
            </form>
        </div>
    </>)
}

export default Search;