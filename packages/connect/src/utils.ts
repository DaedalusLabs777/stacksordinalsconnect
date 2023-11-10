export function getStacksProvider() {
  const provider = (window.StacksProvider || window.BlockstackProvider);
  console.log("Xverse provider found:", provider.getProductInfo());
  console.log('Bitcoin provider',window.BitcoinProvider)
  console.log('stacksprovider', window.StacksProvider);

  if (provider && provider.getProductInfo) {
    try {
      const productInfo = provider.getProductInfo();
      if (productInfo && productInfo.name === "Xverse Wallet") {
        console.log("Xverse provider found:", productInfo);
        console.log('Bitcoin provider',window.BitcoinProvider)
        console.log('stacksprovider', window.StacksProvider);
 
        return provider;
      } else {
        console.log("The provider is not Xverse Wallet");
        console.log('Bitcoin provider',window.BitcoinProvider)
        console.log('stacksprovider', window.StacksProvider);
        return undefined;
      }
    } catch (error) {
      console.error("Error getting product info from provider", error);
      return undefined;
    }
  } else {
    console.log("No suitable provider with getProductInfo method found");
    return undefined;
  }
}

/*
  if (provider && provider.getProductInfo) {
    try {
      const productInfo = provider.getProductInfo();
      if (productInfo && productInfo.name === "Xverse Wallet") {
        console.log("Xverse provider found:", productInfo);
        console.log('Bitcoin provider',window.BitcoinProvider)
        console.log('stacksprovider', window.StacksProvider);
        console.log('satsConnect', window.satsConnect);
        return provider;
      } else {
        console.log("The provider is not Xverse Wallet");
        console.log('Bitcoin provider',window.BitcoinProvider)
        console.log('stacksprovider', window.StacksProvider);
        console.log('satsConnect', window.satsConnect);
        return undefined;
      }
    } catch (error) {
      console.error("Error getting product info from provider", error);
      return undefined;
    }
  } else {
    console.log("No suitable provider with getProductInfo method found");
    return undefined;
  }
}
*/
/*
  if (typeof window.BitcoinProvider !== 'undefined') {
    console.log('Xverse Wallet (BitcoinProvider) is installed.');
    console.log('Bitcoin provider',window.BitcoinProvider)
    console.log('stacksprovider', window.StacksProvider);
    console.log('satsConnect', window.satsConnect);
    return window.StacksProvider;
  }
  return undefined;  
}*/

  /*
  const provider = (window.StacksProvider || window.BlockstackProvider) as any;
  if (provider && (provider.isHiroWallet === false || provider.isHiroWallet === undefined)) {
    console.log('isHiroWallet:', provider.isHiroWallet);  // Log the value of isHiroWallet
    return provider;
  } else
  {
    getStacksProvider()
  }
  return undefined;  // Return undefined if the conditions are not met
*/


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