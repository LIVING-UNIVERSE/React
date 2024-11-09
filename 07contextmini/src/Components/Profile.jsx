import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user}= useContext(UserContext);
    if(!user){
        return <div>user is not found !!</div>
    }
    return(
        <div>
            <p> username :{user.username}</p>
            <p> username :{user.password}</p>
        </div>
    )
}

export default Profile