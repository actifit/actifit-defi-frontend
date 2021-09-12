import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  /* {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  }, */
  
  {
    pid: 0,
    lpSymbol: 'AFITX',
    lpAddresses: {
      97: '',
      56: '0x246d22ff6e0b90f80f2278613e8db93ff7a09b95',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'AFITX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x150c81246df4e31847a613e18cab5ef601ca265a',
    },
    token: tokens.afitx,
    quoteToken: tokens.wbnb,
  },
  
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  {
    pid: 253,
    lpSymbol: 'AFITX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x150c81246df4e31847a613e18cab5ef601ca265a',
    },
    token: tokens.afitx,
    quoteToken: tokens.busd,
  },
  {
    pid: 254,
    lpSymbol: 'AFIT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xffff75bb7bf133a9e98bc62665f20a84e152b689',
    },
    token: tokens.afit,
    quoteToken: tokens.wbnb,
  },  
  {
    pid: 255,
    lpSymbol: 'AFIT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x4ddd56e2f34338839BB5953515833950eA680aFb',
    },
    token: tokens.afit,
    quoteToken: tokens.busd,
  },
   {
    pid: 256,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
   },
   {
    pid: 257,
    lpSymbol: 'CAKE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b',
    },
    token: tokens.cake,
    quoteToken: tokens.usdt,
   },
   {
    pid: 258,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3785F00457b663990E1Ec9bd72Ae7b2AA4130246',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
   },
   {
    pid: 259,
    lpSymbol: 'BANANA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF65C1C0478eFDe3c19b49EcBE7ACc57BB6B1D713',
    },
    token: tokens.banana,
    quoteToken: tokens.wbnb,
   },
   {
    pid: 260,
    lpSymbol: 'BANANA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914',
    },
    token: tokens.banana,
    quoteToken: tokens.busd,
  },
   {
    pid: 261,
    lpSymbol: 'WBNB-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x09CB618bf5eF305FadfD2C8fc0C26EeCf8c6D5fd',
    },
    token: tokens.wbnb,
    quoteToken: tokens.usdt,
	},
   {
    pid: 262,
    lpSymbol: 'BUSD-MDX LP',
    lpAddresses: {
      97: '',
      56: '0x223740a259E461aBeE12D84A9FFF5Da69Ff071dD',
    },
    token: tokens.mdx,
    quoteToken: tokens.busd,
  },
]

export default farms
