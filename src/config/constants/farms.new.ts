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
  }, */
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
    */
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
    quoteToken: tokens.bnb,
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
  {
    pid: 253,
    lpSymbol: 'AFITX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // TODO: Adjust
    },
	token: tokens.afitx,
    quoteToken: tokens.busd,
  },
  {
    pid: 254,
    lpSymbol: 'AFIT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // TODO: Adjust
    },
	token: tokens.afit,
    quoteToken: tokens.busd,
  },
  {
    pid: 255,
    lpSymbol: 'AFIT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xffff75bb7bf133a9e98bc62665f20a84e152b689',
    },
	token: tokens.afit,
    quoteToken: tokens.bnb,
  },
  {
    pid: 260,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
	token: tokens.bnb,
    quoteToken: tokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
	token: tokens.cake,
    quoteToken: tokens.bnb,
  },
  {
    pid: 3,
    lpSymbol: 'CAKE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xA39Af17CE4a8eb807E076805Da1e2B8EA7D0755b',
    },
	token: tokens.cake,
    quoteToken: tokens.usdt,
  },
  {
    pid: 4,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6',
    },
	token: tokens.cake,
    quoteToken: tokens.busd,
  },
  {
    pid: 5,
    lpSymbol: 'BANANA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF65C1C0478eFDe3c19b49EcBE7ACc57BB6B1D713',
    },
	token: tokens.banana,
    quoteToken: tokens.bnb,
  },
  {
    pid: 6,
    lpSymbol: 'BANANA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914',
    },
	token: tokens.banana,
    quoteToken: tokens.busd,
  },
  /* {
    pid: 6,
    // risk: 5,
    lpSymbol: 'EGG-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
    },
    // tokenSymbol: 'EGG',
    
	token: tokens.egg,
    quoteToken: tokens.busd,
    // // quoteTokenAdresses: contracts.busd,
  }, */
  {
    pid: 7,
    lpSymbol: 'WBNB-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae',
    },
	token: tokens.bnb,
    quoteToken: tokens.usdt,
    // // quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    lpSymbol: 'BUSD-MDX LP',
    lpAddresses: {
      97: '',
      56: '0x223740a259E461aBeE12D84A9FFF5Da69Ff071dD',
    },
	token: tokens.busd,
    quoteToken: tokens.mdx,
    // // quoteTokenAdresses: contracts.busd,
  },
  /* {
    pid: 10,
    // risk: 1,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
    },
    // tokenSymbol: 'USDC',
    
	token: tokens.usdc,
    quoteToken: tokens.busd,
    // // quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    lpSymbol: 'CUB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc08c74dc9ef46c6db122b30c48a659831017dd2e',
    },
    // tokenSymbol: 'CUB',
    
	token: tokens.cub,
    quoteToken: tokens.bnb,
    // // quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    lpSymbol: 'CUB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0ef564d4f8d6c0ffe13348a32e21efd55e508e84',
    },
    // tokenSymbol: 'CUB',
    
	token: tokens.cub,
    quoteToken: tokens.busd,
    // // quoteTokenAdresses: contracts.busd,
  }, */
  {
    pid: 13,
    // risk: 3,
    lpSymbol: 'UNI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x014608E87AF97a054C9a49f81E1473076D51d9a3',
    },
    // tokenSymbol: 'UNI',
    /* tokenAddresses: {
      97: '',
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    }, */
	token: tokens.uni,
    quoteToken: tokens.bnb,
    // // quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 14,
    // risk: 3,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
    },
    // tokenSymbol: 'DOT',
    /* tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    }, */
	token: tokens.dot,
    quoteToken: tokens.bnb,
    // // quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   pid: 5,
  //   // risk: 2,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteToken: QuoteToken.BNB,
  //   // quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 6,
  //   // risk: 1,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteToken: QuoteToken.BUSD,
  //   // quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 10,
  //   // risk: 4,
  //   lpSymbol: 'CAKE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteToken: QuoteToken.BUSD,
  //   // quoteTokenAdresses: contracts.busd,
  // },
  
  
  // Shakes
  /*
  {
    pid: 21,
    // risk: 5,
    isTokenOnly: true,
    lpSymbol: 'AFIT',
    lpAddresses: {
      97: '',
      56: '0x4516bb582f59befcbc945d8c2dac63ef21fba9f6', // AFIT-BUSD LP
    },
    // tokenSymbol: 'AFIT',
    tokenAddresses: {
      97: '',
      56: '0x4516bb582f59befcbc945d8c2dac63ef21fba9f6',
    },
    quoteToken: tokens.busd,
    // quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 22,
    // risk: 5,
    isTokenOnly: true,
    lpSymbol: 'AFITX',
    lpAddresses: {
      97: '',
      56: '0x246d22ff6e0b90f80f2278613e8db93ff7a09b95', // AFITX-BUSD LP
    },
    // tokenSymbol: 'AFITX',
    tokenAddresses: {
      97: '',
      56: '0x246d22ff6e0b90f80f2278613e8db93ff7a09b95',
    },
    quoteToken: tokens.busd,
    // quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 3,
  //   // risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'AFITX',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
  //   },
  //   tokenSymbol: 'AFITX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteToken: QuoteToken.BUSD,
  //   // quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 5,
    // risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    // tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteToken: tokens.busd,
    // quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 15,
    // risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    // tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteToken: tokens.busd,
    // quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 16,
    // risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUNNY',
    lpAddresses: {
      97: '',
      56: '0xEC7A69A3A5ee177C84855C86cc926cA0BA6275cc', // BUNNY-BUSD LP
    },
    // tokenSymbol: 'BUNNY',
    tokenAddresses: {
      97: '',
      56: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
    },
    quoteToken: tokens.busd,
    // quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 17,
    // risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    // tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteToken: tokens.busd,
    // quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    // risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    // tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteToken: tokens.btcb,
    // quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 19,
    // risk: 2,
    isTokenOnly: true,
    lpSymbol: 'CUB',
    lpAddresses: {
      97: '',
      56: '0x0ef564d4f8d6c0ffe13348a32e21efd55e508e84', // CUB-BUSD LP
    },
    // tokenSymbol: 'CUB',
    tokenAddresses: {
      97: '',
      56: '0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1',
    },
    quoteToken: tokens.busd,
    // quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 20,
    // risk: 2,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    // tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteToken: tokens.busd,
    // quoteTokenAdresses: contracts.busd,
  },
  */
  // {
  //   pid: 18,
  //   // risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'DAI',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteToken: QuoteToken.BUSD,
  //   // quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 19,
  //   // risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteToken: QuoteToken.BUSD,
  //   // quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 20,
  //   // risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'DOT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteToken: QuoteToken.BUSD,
  //   // quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 22,
  //   // risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'BSCX',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa32a983a64ce21834221aa0ad1f1533907553136', // BSCX-BUSD LP
  //   },
  //   tokenSymbol: 'BSCX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  //   },
  //   quoteToken: QuoteToken.BUSD,
  //   // quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 23,
  //   // risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'AUTO',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56', // AUTO-BNB LP
  //   },
  //   tokenSymbol: 'AUTO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
  //   },
  //   quoteToken: QuoteToken.BNB,
  //   // quoteTokenAdresses: contracts.wbnb,
  // },
  
]

export default farms
