I am building a personal website for tinkering and sharing interesting things.

This is a react/typescript SPA using [thirdweb](https://thirdweb.com/) web3 scaffolding as a starting point.

Initial iteration live on IPFS at [cmcgee.net]():
- If using Brave (or another web3 browser) with IPFS enabled, this should redirect to [ipns://cmcgee.net]() and serve the site directly from IPFS
- Otherwise, it should redirect to the public IPFS Gateway: https://gateway.ipfscdn.io/ipfs/QmbdxzdRzbGtxt3Vf3FxRtUJTJxuTbksLRi9r7jCAvYUaj

Future Plans:
- Separate page for Web2/Web3
   - Web2 - links to social media, etc
   - Web3 - option to connect wallet, view address
- Web2 hosting (Azure Static Web App)
   - Web2 DNS to resolve to this instead of public IPFS public gateway
- Deployment script
   - Build code
   - Deploy to IPFS (thirdweb)
   - Deploy to Azure Static Web App
   - Update _dnslink TXT to new IPFS content hash
- ENS name?