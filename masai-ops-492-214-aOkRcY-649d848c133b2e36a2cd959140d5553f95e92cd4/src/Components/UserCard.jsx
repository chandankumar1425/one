// Your code goes here
// do a default export

import { useState } from "react"
console.log('useState:', useState)

function UserCard(props){
   let {name,avatar,posts,followers,address}=props
   const [foll,setFollow]=useState(false)
   let style={borderRadius:"50%"}
  

    return(
        <div>
            <img src={avatar} alt={name} style={style} />
        <h2 data-testid="user_name">{name}</h2>
        <p data-testid="user_address">{address}</p>
        <h3>Posts</h3>
       
        <p data-testid="user_posts">{posts}</p>
        <h3>Followers</h3>
        <p data-testid="user_followers">{followers}</p>
   <button onClick={()=>setFollow(!foll)}> {foll?"following":"follow"}</button>
        </div>
        
    )
}
export default UserCard