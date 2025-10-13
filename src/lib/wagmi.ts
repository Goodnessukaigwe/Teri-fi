import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { http } from 'viem'
import { mainnet, polygon, optimism, arbitrum, base, baseSepolia } from 'wagmi/chains'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || process.env.NEXT_PUBLIC_PROJECT_ID

// Log warning if project ID is not set (for development)
if (!projectId) {
  console.warn('WalletConnect Project ID is not set. Please set NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID in your .env.local file')
  console.warn('Get your project ID from: https://cloud.walletconnect.com/')
}

export const config = getDefaultConfig({
  appName: 'Terifi Frontend',
  projectId: projectId || 'demo-project-id', // Fallback for development
  chains: [baseSepolia],  // just testnet for now
  transports: {
    [baseSepolia.id]: http('https://base-sepolia.public.blastapi.io'),
  },
  ssr: true,
})