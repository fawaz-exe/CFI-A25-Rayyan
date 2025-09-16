import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

const UserPage = ({getUser, user}) => {
    const {username} = useParams();
    console.log(username);
    console.log(user);


    const {hireable,name, avatar_url, bio, repos, company, blog, location, html_url, following, followers, email, public_repos, public_gists, login} = user;

    // use it to fetch the data by passing our username and use it inside our components.
    useEffect(()=>{
        getUser(username);
    },[])

  return (
    <>
    <h1>Welcome {username}</h1>
    <Link to="/" className='btn btn-dark'>Back to Search</Link>
    <div className='container'>
    <div className='card'>
        <div className='card grid-2'>
            <div className='all-center'>
                <h1>Open for Hiring: {hireable ? "Available" : "Not Avaiable"}{" "}</h1>
                <img src={avatar_url} className='round-img' style={{width: "250px"}}/>
            </div>
            <h2>{name}</h2>
            <h4>{location}</h4>
        </div>

        <div>
            {bio && (
                <>
                <h2>Bio:</h2>
                <h3>{bio}</h3>
                </>
            )}
            <a href={html_url} className='btn btn-dark' target='_blank'>Visit My GIthub Profile</a>
        </div>
        <div className='card text-center'>
            <div className='badge bg-success' style={{width:'20%', padding: '25px'}}>Followers: {followers}</div>
            <div className='badge bg-primary' style={{width:'20%', padding: '25px'}}>Following: {following}</div>
            <div className='badge bg-dark' style={{width:'20%', padding: '25px'}}>Public repos: {public_repos}</div>
        </div>
    </div>
    </div>
    </>
  )
}

export default UserPage;