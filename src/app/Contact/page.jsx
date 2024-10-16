import Image from "next/image";
import styles from "./contact.module.css";


export const metadata = {
  title: "Contact Page",
  description: "Contact us page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="name and surname"/>
          <input type="text" placeholder="email"/>
          <input type="text" placeholder="Phone number"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button>send</button>
        </form>

      </div>
    </div>
  )
}

export default Contact
