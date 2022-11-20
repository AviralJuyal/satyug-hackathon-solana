import Image from 'next/future/image';
import { useRouter } from 'next/router';
import React from 'react'
// import  './DhyanaToken.css';
import Bg from '../assets/images/DhyanaTokenBg.png';
import Modal from '../components/Modal';
// import { useLocation } from 'react-router-dom';
const DhyanaToken = () => {
  const location = useRouter();
  console.log(location)


  return (
    <div className='DhyanTokenContainer'>
      <Modal pathName={location.route}/>
      <Image className='DhyanaBg' height="3000" src={Bg} alt="Bg" />
    </div>
  )
}

export default DhyanaToken