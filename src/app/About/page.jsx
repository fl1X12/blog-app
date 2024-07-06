import Image from "next/image"
import styles from "./about.module.css"

const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}> h2 text</h2>
          <h1 className={styles.title}> h1 text</h1>
          <p className={styles.desc}>
            paragraph messages
          </p>
          <div className={styles.box}>
            <h1> insert info </h1>
            <p> info description</p>

          </div>
        </div>
        <div className={styles.imgContainer}>
            <Image src="/about.png" alt="" fill className={styles.img}></Image>
        </div>
    </div>
  )
}

export default About
