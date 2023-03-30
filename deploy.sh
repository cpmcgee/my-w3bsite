#!/bin/bash

## Pre-reqs
# Download/Install Azure CLI and SWA CLI
# Login to Azure CLI and SWA CLI

#build application
yarn build

#upload files to IPFS (uses thirdweb node with pinning)
#google domains has no API, so need to update _dnslink record with content hash output from this command
npx thirdweb@latest upload build

#deploy to Azure Static Web App
TOKEN=$(az staticwebapp secrets list --name cmcgee-website --query "properties.apiKey") #fetch deployment token
TOKEN="${TOKEN//\"}" #strip quotes
swa deploy ./build --deployment-token ${TOKEN} --env Production #upload files to swa

