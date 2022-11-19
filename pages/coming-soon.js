import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import coming from '../assets/images/cs.jpg';
import classes from "../assets/cssModules/satyug.module.css";
function ComingSoon() {
  const navigate = useRouter().push;
    setTimeout(() => {
        navigate("/")
    }, 4000);
// const x ='https://media.istockphoto.com/photos/coming-soon-neon-sign-the-banner-shining-light-signboard-collection-picture-id1332167985?b=1&k=20&m=1332167985&s=170667a&w=0&h=O-084eNJBhGZGJbJvNvUC1P6d4aSo6XkV4Kom7ZZcIQ='
  return (
    <div > 
      <Image src={coming} alt="s" layout="fill"
      // sizes="(max-width: 768px) 100vw,
      //         (max-width: 1200px) 50vw,
      //         33vw"
      className={classes.comingSoonImage}
/>
    </div>
  )
}


export default ComingSoon