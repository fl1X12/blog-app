import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard"
const Blog = () => {
  return (
    <div classname={styles.container}>
      <div classname={styles.post}>
        <PostCard/>
      </div>
      
      <div classname={styles.post}>
        <PostCard/>
      </div>

      <div classname={styles.post}>
        <PostCard/>
      </div>
    </div>
  )
}

export default Blog
