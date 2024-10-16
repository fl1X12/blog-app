import { getPosts } from "@/lib/data"
import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard"

//Fetch using APIs
// const getData=async()=>{
//   const res= await fetch("https://jsonplaceholder.typicode.com/posts" ,{next:{revalidate:360}});
//   if(!res.ok){
//     throw new Error("Something went wrong")
//   }
//   return res.json()
// }
export const metadata = {
  title: "Blog Page",
  description: "blogging page",
};
const Blog =async () => {
  //Fetch using APIs
  //const posts= await getData()

  //Fetch without APIs
  const posts=await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post)=>(
        <div className={styles.post} key={post.id}>
        <PostCard post={post}/>
      </div>
      ))}
      
    </div>
  )
}

export default Blog
