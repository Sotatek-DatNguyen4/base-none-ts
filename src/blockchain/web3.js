import Web3 from 'web3';

export const getWeb3Instance = () => {
  const { ethereum, web3 } = window;
  if (ethereum && ethereum.isMetaMask) {
    return new Web3(ethereum);
  }

  if (web3) {
    return new Web3(web3.currentProvider);
  }

  return null;
};

export const isMetaMaskInstalled = () => {
  const { ethereum } = window;
  return ethereum && ethereum.isMetaMask;
};

export const getContractInstance = (ABIContract, contractAddress) => {
  const { ethereum } = window;
  if (ethereum && ethereum.isMetaMask) {
    const web3Instance = new Web3(ethereum);
    return new web3Instance.eth.Contract(
      ABIContract,
      contractAddress,
    );
  }

  if (window.web3) {
    const web3Instance = new Web3(window.web3.currentProvider);
    return new web3Instance.eth.Contract(
      ABIContract,
      contractAddress,
    );
  }

  return null;
};

export const convertFromWei = (value, unit = 'ether') => {
  const webInstance = getWeb3Instance();
  return webInstance.utils.fromWei(value, unit);
};

export const convertToWei = (value, unit = 'ether') => {
  const webInstance = getWeb3Instance();
  return webInstance.utils.toWei(value, unit);
};

export const isValidAddress = (address) => {
  return Web3.utils.isAddress(address);
};

export const getETHBalance = async (loginUser) => {
  const web3 = getWeb3Instance();
  if (web3) {
    const balance = await web3.eth.getBalance(loginUser);
    return web3.utils.fromWei(balance);
  }

  return 0;
};
