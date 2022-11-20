import { useContext, useEffect, useState } from "react";
// HIGHLIGHTSTART-importModules
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import RPC from "./ethersRPC";
import WalletContext from "../context/WalletContext";

// HIGHLIGHTSTART-registerApp
const clientId = "8118dbfab8021e3cfda426521120b69dacbdda8b37f24781c5bda"; // get from https://dashboard.web3auth.io


function App(){
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);
  const context = useContext(WalletContext);
  // console.log(context)
  const {walletConnected , setWalletConnected , currentAccount , setcurrentAccount , walletType , setWalletType} = context;
  useEffect(() => {
    const init = async () => {
      try {
      const web3auth = new Web3Auth({
        clientId,
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0x1",
          rpcTarget: "https://rpc.ankr.com/eth", // This is the public RPC we have added, please pass on your own endpoint while creating an app
        },
      });

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
    // getAccounts();
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