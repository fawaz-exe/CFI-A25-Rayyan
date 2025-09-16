import {Link} from 'react-router-dom';

function UserItem({user}){

  const {avatar_url, login} = user;

    return(
        <>
        <div className="card" style={{ width: "18rem" }}>
          <center>
            <img
              src={avatar_url}
              className="card-img-top"
              alt='avatar'
            />
            <h2 className="card-title">{login}</h2>
            <Link to={`/user/${login}`} className="btn btn-dark">Git Profile</Link>
          </center>
        </div>

        

        
        
        </>
    )
}

export default UserItem;