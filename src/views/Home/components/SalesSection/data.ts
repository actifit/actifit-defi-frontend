import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.actifit.io/',
    text: 'Learn',
    external: true,
  },
  /* images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'AFITX', alt: 'AFITX token' },
    ],
  }, */
  images: {
    path: '/images/home/actifit-bull/',
    attributes: [
      { src: 'actifit-bull-var2', alt: 'Actifit DeFi Bull' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'Actifit DeFi makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    // to: '/farms',
	to: '/',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.actifit.io/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/actifit-bull/',
    attributes: [
      { src: 'actifit-bull-var3', alt: 'Actifit DeFi Bull' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'Actifit leads the world healthier. Actifit DeFi brings health & financial wellbeing together!',
  bodyText:
    'AFITX token is the governance token of the Actifit DeFi ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x246d22ff6e0b90f80f2278613e8db93ff7a09b95',
    text: 'Buy AFITX',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.actifit.io',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'AFITX', alt: 'AFITX governance token' },
    ],
  },
}

export const cakeSectionDataExt: SalesSectionProps = {
  headingText: '',
  bodyText:
    'AFIT token is the utility token of the Actifit ecosystem. Buy it, challenge your friends, spend it on products & virtual gadgets, stake it and farm with it ... and much more!!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x4516bb582f59befcbc945d8c2dac63ef21fba9f6',
    text: 'Buy AFIT',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.actifit.io',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'AFIT', alt: 'AFIT utility token' },
    ],
  },
}
