import React, { useState } from 'react';
export const WalletContext = React.createContext();
const {ethereum} = window; // we have this because we have metamask  

export const WalletProvider = ({ children }) => {

    const [currentAccount, setcurrentAccount] = useState("");



    const connectWallet = async () => {
        try {
            if(!ethereum) return alert('Please connect to a metamask wallet');

            const accounts = await ethereum.request({method:'eth_requestAccounts',}) 
            setcurrentAccount(accounts[0]);
            // window.location.reload();
        } catch (error) {
            console.log(error);
            throw new error('No ethereum object');
        }
    };


    const disconnectWallet = async () => {
        const accounts = await window.ethereum.request({
            method: "wallet_requestPermissions",
            params: [{
                eth_accounts: {}
            }]
        }).then(() => ethereum.request({
            method: 'eth_requestAccounts'
        }))
        
        const account = accounts[0]
        setcurrentAccount(account);
        // window.location.reload();
    };



    return(
        <WalletContext.Provider value={{connectWallet, currentAccount, disconnectWallet }}>
            {children}
        </WalletContext.Provider>
    )
}