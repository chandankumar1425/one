// import Courses ,Title and UserCard here
// keep a user object with mentioned properties and pass down to UserCard as prop

import Title from"./Components/Title"
import UserCard from"./Components/UserCard"
import Courses from"./Components/Courses"

export default function App() {
  let user = {
    avatar: "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
    name: "Alf",
    address: "43766 Mallory Place",
    followers: 97350,
    posts: 930,
  };
  return <>
  <Title/>
  <UserCard name={user.name} avatar={user.avatar} address={user.address} followers={user.followers} posts={user.posts}/>
 <Courses/>
  </>;
}
