  import Image from "next/image"
  import styles from "./singlePost.module.css"
  import PostUser from "@/components/postUser/postUser";
  import { Suspense } from "react";
  import { getPost } from "@/lib/data";

  //fetching data with an API
  // const getData=async(slug)=>{
  //   const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`,{cache:'no-store'});
  //   if(!res.ok){
  //     throw new Error("Something went wrong")
  //   }
  //   return res.json()
  // }
  export const generateMetaData = async ({params})=>{
    const {slug} = params;
    const post = await getPost(slug);
    return {
      title: post.title,
      description: post.desc,
    };
  }

  const SinglePostPage = async ({params}) => {
    const {slug}=params;
    //fetch with APIs
    //const {slug}=params
    //const post= await getData(slug);
    
    const post = await getPost(slug);
    //console.log(slug);
    //console.log(post);
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          {post.img && <Image src={post.img} alt="" fill className={styles.img}/>}
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
          {post && <Suspense fallback={<div>loading ....</div>}>
            <PostUser userId={post.userId}/>
          </Suspense>}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
          </div>
          <div className={styles.detailText}>
            {post.desc}
          </div>

        </div>
      </div>
    )
  }



  export default SinglePostPage
