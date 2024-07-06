import styles from "./home.module.css";
import Image from "next/image";
const Home =()=>{
    return(
        <div className={styles.container}> 
            <div className={styles.textContainer}>
                <h1 className={styles.title}> Random header text </h1>
                <p className={styles.desc}>
                    insert para here
                </p>
                <div className={styles.buttons}>
                    <button className={styles.button}>Learn More</button>
                    <button className={styles.button}>Contact</button>
                </div>
                <div className={styles.brands}>
                    <Image src="/brands.png" alt="" className={styles.brandImg} width={50} height={50}/>
                </div>
            </div>

            <div className={styles.imgContainer}>
                <Image src="/hero.gif" alt="" className={styles.heroImg} width={50} height={50}/>
            </div>
        </div>
    )
};
export default Home