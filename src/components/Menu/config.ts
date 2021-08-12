import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      }
    ],
  },
  {
    label: t('Workouts'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Shakes'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Fit Loans'),
    icon: 'TicketIcon',
    href: '/',
    status: {
      text: t('Soon').toLocaleUpperCase(),
      color: 'success',
    },
  },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/',
    status: {
      text: t('Soon').toLocaleUpperCase(),
      color: 'success',
    },
  },
  {
    label: t('Collectibles'),
    icon: 'NftIcon',
    href: '/',
	status: {
      text: t('Soon').toLocaleUpperCase(),
      color: 'success',
    },
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    items: [
      {
        label: t('Actifit'),
        href: 'https://actifit.io',
      },
      {
        label: t('AFIT-Pancakeswap'),
        href: 'https://pancakeswap.info/token/0x4516bb582f59befcbc945d8c2dac63ef21fba9f6',
      },
      {
        label: t('AFITX-Pancakeswap'),
        href: 'https://pancakeswap.info/token/0x246d22ff6e0b90f80f2278613e8db93ff7a09b95',
      },
      {
        label: t('Coinmarketcap'),
        href: 'https://coinmarketcap.com/currencies/actifit/',
      },
      {
        label: t('AFIT-Astrotools'),
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x4516bb582f59befcbc945d8c2dac63ef21fba9f6',
      },
      {
        label: t('AFITX-Astrotools'),
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x246d22ff6e0b90f80f2278613e8db93ff7a09b95',
      },
    ],
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Github'),
        href: 'https://github.com/actifit',
      },
      {
        label: t('Docs'),
        href: 'https://docs.actifit.io/',
      },
      {
        label: t('Blog'),
        href: 'https://hive.blog/@actifit',
      },
	  {
        label: t('Contact'),
        href: 'mailto:info@actifit.io',
      },
      {
        label: t('BSC Scan AFIT'),
        href: 'https://bscscan.com/token/0x4516bb582f59befcbc945d8c2dac63ef21fba9f6',
      },
	  {
        label: t('BSC Scan AFITX'),
        href: 'https://bscscan.com/token/0x246d22ff6e0b90f80f2278613e8db93ff7a09b95',
      },
    ],
  },
]

export default config
