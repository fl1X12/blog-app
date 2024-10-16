import { getUser } from "@/lib/data";
import styles from "./postUser.module.css"     
import React from 'react'
import Image from "next/image";

// const getUser=async(userId)=>{
//     const res= await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     if(!res.ok){
//       throw new Error("Something went wrong")
//     }
//     return res.json()
// }

const PostUser = async ({userId}) => {
    //console.log(userId)
    const user= await getUser(userId);
    //console.log(user)
  return (
    <div className={styles.container}>
      {
        user.img &&<Image className={styles.avatar} src={user.img ? user.img :"/images/noavatar.png"} alt="" width={50} height={50}/> 
      }
          <span className={styles.Title}>Author</span>
          <span className={styles.UserName}>{user.userName}</span>
    </div>
  )
}

export default PostUser
