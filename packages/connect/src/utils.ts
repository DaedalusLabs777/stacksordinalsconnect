export function getStacksProvider() {
  //console.log('StacksProvider:', window.StacksProvider); // Log the value of StacksProvider
  //console.log('BlockstackProvider:', window.BlockstackProvider); // Log the value of BlockstackProvider
  return window.StacksProvider || window.BlockstackProvider;
  }
  
  
  export function isStacksWalletInstalled() {
  const provider = getStacksProvider() as any;
  
  
  console.log('test', !provider.isHiroWallet); // Log the value of StacksProvider
  // If the provider exists and isHiroWallet is either not true or undefined, return true.
  if (provider && (!provider.isHiroWallet || provider.isHiroWallet === undefined)) {
  return true;
  }
  
  
  // Otherwise, return false.
  return false;
}

  