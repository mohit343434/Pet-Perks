import React from 'react'
import styles from "@/app/Main.module.css"
const About = () => {
  return (
    <div className={styles.main_Layout}>
      <div className={styles.Secand_main_layout}>
        <div > <p className={styles.about_text}>ABOUT US</p> </div>
        <div className={styles.About}>
          <p className={styles.para_01}>Meet Pet Perks - Here for You and Your Pets!</p>
          <p className={styles.para_02}>Because Pets Deserve the Best” to resonate with visitors emotionally.</p>
          <p className={styles.para_03}>We Believe In Doing.</p>
          <p className={styles.para_04}> At Pet Perks, we're passionate pet lovers committed to enhancing the lives of pets and their humans. Our mission is to simplify pet care by offering a single platform for all your pet's needs. From essentials like food and toys to unique experiences like meetups and personalized grooming, we are building a pet - centric ecosystem. Whether you’re a new pet parent or a seasoned pro, our app will provide convenient solutions for every step of your pet journey.</p>
        </div>
      </div>
    </div>
  )
}

export default About