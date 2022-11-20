import { useContext, useEffect, useState } from "react";
// HIGHLIGHTSTART-importModules

import { ethers } from "ethers";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import RPC from "./ethersRPC";
import "web3";
import WalletContext from "../context/WalletContext";
import Web3 from "web3";
import { createTypePredicateNodeWithModifier } from "typescript";

// HIGHLIGHTSTART-registerApp
const clientId = "8118dbfab8021e3cfda426521120b69dacbdda8b37f24781c5bda"; // get from https://dashboard.web3auth.io


function App(){
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);
  const context = useContext(WalletContext);
  // console.log(context)
  const {walletConnected , setWalletConnected , currentAccount , setcurrentAccount , walletType , setWalletType} = context;
  useEffect(() => {
      const web3auth = new Web3Auth({
        clientId,
        chainConfig: {
          chainNamespace: "eip155",
    chainId: "0x1",
    rpcTarget: "https://rpc.ankr.com/eth",
    // Avoid using public rpcTarget in production.
    // Use services like Infura, Quicknode etc
    displayName: "Ethereum Mainnet",
    blockExplorer: "https://etherscan.io",
    ticker: "ETH",
    tickerName: "Ethereum", //This is the public RPC we have added, please pass on your own endpoint while creating an app
        },
      });    const init = async () => {
      try {


          setWeb3auth(web3auth);

      await web3auth.initModal();
            setProvider(web3auth.provider);
          }
         catch (error) {
          console.error(error);
        }
      };

      init();
  }, []);

  const login = async () => {
    console.log('login....')
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    if (!web3authProvider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(web3authProvider);
    const address = await rpc.getAccounts();
    console.log(address);
    // window.localStorage.setItem("walletId" , address);
    setcurrentAccount(address);
    setWalletConnected(true)
    setWalletType('web3Auth')
    console.log(await rpc.getChainId())

    // const user_onfo = await web3auth.getUserInfo()
    // console.log(user_onfo);
    
    const web3 = new Web3(web3authProvider as any);
     const adds = (await web3.eth.getAccounts())[0];
     console.log(adds);
     const bal = await web3.eth.getBalance(adds);
     console.log(bal);
     const provider = new ethers.providers.Web3Provider(web3authProvider);
     
     const signer = provider.getSigner();
     const destination = "0x34958ccf3e9d22Ff0511fD7E70b4C328328AB1a4";
     const tow = "0x65057bCFb2008e4BD87596c2e1041B9926e94559";
     const amount = ethers.utils.parseEther("1.0");

     const gas  = provider.getGasPrice();
     const wallet = ethers.Wallet.fromMnemonic("ecology decide share woman tenant example empty nature tank tortoise slender short")
     const gl = wallet.connect(provider);
     

     const tx = {
      from: wallet.address,
      to: tow,
      value:amount,
      gasPrice: gas,
      gasLimit: ethers.utils.hexlify(10000),
      nounce: await provider.getTransactionCount(wallet.address, 'latest')
     };

     const transection =  await signer.sendTransaction(tx);

     console.log(transection);

    //  const originalMessage = "YOUR_MESSAGE";

    //  const signedMessage = await web3.eth.personal.sign(originalMessage, adds,"dss");
    //  console.log(signedMessage)
    //  web3.eth.sendSignedTransaction()
// Submit transaction to the blockchain and wait for it to be mined

// console.log(receipt);
    
    
    getAccounts();
  };

  // const getUserInfo = async () => {
  //   if (!web3auth) {
  //     console.log("web3auth not initialized yet");
  //     return;
  //   }
  //   const user = await web3auth.getUserInfo();
  //   console.log(user);
  // };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
    setWalletType('')
    setcurrentAccount('');
    setWalletConnected(false)
  };

  // const getChainId = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const chainId = await rpc.getChainId();
  //   console.log(chainId);
  // };
  const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    console.log(address);
    // window.localStorage.setItem("walletId" , address);
    setcurrentAccount(address);
    setWalletConnected(true)
    setWalletType('web3Auth')
    // props.setWalletAddress(address);
  };

  // const getBalance = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const balance = await rpc.getBalance();
  //   console.log(balance);
  // };

  // const sendTransaction = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const receipt = await rpc.sendTransaction();
  //   console.log(receipt);
  // };

  // const signMessage = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const signedMessage = await rpc.signMessage();
  //   console.log(signedMessage);
  // };

  // const getPrivateKey = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const privateKey = await rpc.getPrivateKey();
  //   console.log(privateKey);
  // };
  // const loggedInView = (
  //   <>
  //     <button onClick={getUserInfo} className="card">
  //       Get User Info
  //     </button>
  //     <button onClick={getChainId} className="card">
  //       Get Chain ID
  //     </button>
  //     <button onClick={getAccounts} className="card">
  //       Get Accounts
  //     </button>
  //     <button onClick={getBalance} className="card">
  //       Get Balance
  //     </button>
  //     <button onClick={sendTransaction} className="card">
  //       Send Transaction
  //     </button>
  //     <button onClick={signMessage} className="card">
  //       Sign Message
  //     </button>
  //     <button onClick={getPrivateKey} className="card">
  //       Get Private Key
  //     </button>
  //     <button onClick={logout} className="card">
  //       Log Out
  //     </button>

  //     <div id="console" style={{ whiteSpace: "pre-line" }}>
  //       <p style={{ whiteSpace: "pre-line" }}></p>
  //     </div>
  //   </>
  // );

  // const unloggedInView = (
  //   <button onClick={login} className="card">
  //     Login
  //   </button>
  // );

  return (
    <div>
      {/* <h1 className="title">
        <a target="_blank" href="http://web3auth.io/" rel="noreferrer">
          Web3Auth
        </a>
        & ReactJS Example
      </h1> */}

      {/* <div className="grid">{provider ? loggedInView : unloggedInView}</div> */}
      {walletType==='' && walletConnected===false && (<button className="btn btn-primary" onClick={login}>Web3 Auth</button>)}
      

      {walletType==='web3Auth' && walletConnected===true && (<><div className="modal__submitButton">
                <button
                  className="btn-hover color-5"
                  onClick={logout}
                >
                  Disconnect Web3 Wallet
                </button>
              </div></>)}

      {/* <footer className="footer">
        <a href="https://github.com/Web3Auth/Web3Auth/tree/master/examples/react-app" target="_blank" rel="noopener noreferrer">
          Source code
        </a>
      </footer> */}
    </div>
  );
}

export default App;