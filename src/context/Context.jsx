import React, {useEffect, useState} from 'react';
import { ethers } from 'ethers';

import {contractABI, contractAddress} from '../utils/utility'

export const ChainContext = React.createContext();

const  { ethereum } = window
// fetch contract 
const getEthContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner();
    const arnoldMartContract = new ethers.Contract(contractAddress,contractABI, signer)
        
    console.log({
        provider,
        signer,
        arnoldMartContract
    })

    return arnoldMartContract

}

// every provider needs to get children from props and must return the Provider (wrap application with all data passed into )
export const ChainProvider = ({children}) => {

    const [connectedAccount, setConnectAccount] = useState('')

    useEffect(() => {
        checkIfWalletIsConnected();
    })

    const checkIfWalletIsConnected = async () => {
        try {

                  
        if(!ethereum) return alert('Please install METAMASK');

        const accounts = await ethereum.request({method: 'eth_accounts'});
        if (accounts.length > 0) {
            setConnectAccount(accounts[0])        }
      

        } catch (error) {
            console.log(error)
            throw new Error(error.message)

        }

      
        
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert('Please install METAMASK');
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            console.log(accounts)
            setConnectAccount(accounts[0])
        } catch (error) {

            console.log(error)
            throw new Error(error.message)
    
    
        }
    }

    const makePurchase = async (id) => {
       const arnoldMartContract =   getEthContract()
       const testValue = ethers.utils.parseEther('.0001')
       //must set a value to send with transaction!
       await ethereum.request({
           method: 'eth_sendTransaction',
           params: [{
               from: connectedAccount,
               to: '0xbDA5747bFD65F08deb54cb465eB87D40e51B197E',
               gas: '0x5208', 
               value: testValue._hex
           }]
        
    })
    arnoldMartContract.makeSale(id)

       
    }
   
    return (
        <ChainContext.Provider value={{makePurchase, connectWallet, connectedAccount,makePurchase }}>
            {children}
        </ChainContext.Provider>
    )
}