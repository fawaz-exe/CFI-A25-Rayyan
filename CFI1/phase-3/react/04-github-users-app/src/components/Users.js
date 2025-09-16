import UserItem from "./UserItem";

function Users({data}) {
  console.log(data);
  return (
    <>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gridGap: "1rem",
          margin: "auto",
        }}
      >
       {
        data.map((ele, index)=>(
          <UserItem key={index} user={ele}/>
        ))
       }
      </div>
    </>
  );
}

export default Users;