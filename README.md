I am building a personal website for tinkering and sharing interesting things.

This is a react/typescript SPA using [thirdweb](https://thirdweb.com/) web3 scaffolding as a starting point.

Initial iteration live on IPFS at [cmcgee.net]():
- If using Brave (or another web3 browser) with IPFS enabled, this should redirect to [ipns://cmcgee.net]() and serve the site directly from IPFS
- Otherwise, it should redirect to the Azure Static Web App instance at: https://orange-mud-031d6b210.2.azurestaticapps.net 

Future Plans:
- Separate page for Web2/Web3
   - Web2 - links to social media, etc, novelty api interactions
   - Web3 - option to connect wallet, view address, novelty blockchain interactions
- DNS name for static web app
- DNS Improvements? (currently only option is to manually update _dnslink when deploying to new IPFS content hash) 
- ENS name?