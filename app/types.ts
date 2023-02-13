export type Network =
  | 'Bitcoin'
  | 'Ethereum'
  | 'Avalanche'
  | 'Binance'
  | 'Polygon'
  | 'Solana'
  | 'Cosmos'
  | 'Polkadot'
  | 'Tron'
  | 'Mina'
  | 'Cardano'
  | 'VeChain'
  | 'Waves'
  | 'Tezos'
  | 'Celo'
  | 'Gnosis'
  | 'Aptos'
  | 'Optimism'

export type OptionType = 'cryptocurrency' | 'bank' | 'btcturk' | 'card' | 'nft'

export type FilterOption = { id: string; label: string; checked: boolean }

export type Filter = { id: string; name: string; options: FilterOption[] }

export interface Option {
  type: OptionType
  name: string
  address?: string
  sourceUrls?: string[]
  linkName?: string
  linkUrl?: string
  info?: string
  warning?: string
}

export interface Organization {
  name: string
  description: string
  logoUrl?: string
  websiteUrl: string
  twitterUrl: string
  popularity?: number
  endorsementUrls?: string[]
  categories: string[]
  options: Option[]
}
