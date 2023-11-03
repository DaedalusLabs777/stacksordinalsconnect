export function getStacksProvider() {
  const provider = (window.StacksProvider || window.BlockstackProvider) as any;
  
  // Check if the provider is StacksProvider and if isHiroWallet is undefined or false.
  if (provider && (provider.isHiroWallet === false || provider.isHiroWallet === undefined)) {
    console.log('isHiroWallet:', provider.isHiroWallet);  // Log the value of isHiroWallet
    return provider;
  }
  return undefined;  // Return undefined if the conditions are not met
}


export function isStacksWalletInstalled() {
  const provider = getStacksProvider() as any;
  if (provider) {
    console.log('test', provider.isHiroWallet); // Log the value of isHiroWallet
    // If the provider exists and isHiroWallet is either not true or undefined, return true.
    if (!provider.isHiroWallet || provider.isHiroWallet === undefined) {
      return true;
    }
  }
  // Otherwise, return false.
  return false;
}
  