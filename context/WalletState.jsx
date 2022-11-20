import React,{useState} from 'react'
import WalletContext from './WalletContext';

const WalletState = (props) => {
    const [walletConnected, setWalletConnected] = useState(false);
    const [currentAccount, setcurrentAccount] = useState('');
    const [walletType, setWalletType] = useState('');
  return (
    <WalletContext.Provider value={{walletConnected , setWalletConnected , currentAccount , setcurrentAccount , walletType , setWalletType}}> 
        {props.children}
    </WalletContext.Provider> 
     )
}

export default WalletState