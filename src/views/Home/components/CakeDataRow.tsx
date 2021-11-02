import React from 'react'
import styled from 'styled-components'
import { useAfitSupply, useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getAfitAddress, getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { usePriceCakeBusd, usePriceAFITBusd } from 'state/farms/hooks'
import { Flex, Text, Heading, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'

const StyledColumn = styled(Flex)<{ noMobileBorder?: boolean }>`
  flex-direction: column;
  ${({ noMobileBorder, theme }) =>
    noMobileBorder
      ? `${theme.mediaQueries.md} {
           padding: 0 16px;
           border-left: 1px ${theme.colors.inputSecondary} solid;
         }
       `
      : `border-left: 1px ${theme.colors.inputSecondary} solid;
         padding: 0 8px;
         ${theme.mediaQueries.sm} {
           padding: 0 16px;
         }
       `}
`

const Grid = styled.div`
  display: grid;
  grid-gap: 8px;
  margin-top: 24px;
  grid-template-columns: repeat(2, auto);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 32px;
    grid-template-columns: repeat(4, auto);
  }
`

const emissionsPerBlock = 19

const CakeDataRow = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const cakePriceBusd = usePriceCakeBusd()
  const mcap = cakePriceBusd.times(cakeSupply)
  const mcapString = formatLocalisedCompactNumber(mcap.toNumber())
  
  const afitTotalSupply = useAfitSupply()
  const afitPriceBusd = usePriceAFITBusd()
  const burnedAfit = getBalanceNumber(useBurnedBalance(getAfitAddress()))
  const afitSupply = afitTotalSupply ? getBalanceNumber(afitTotalSupply) - burnedAfit : 0
  const afitMcap = afitPriceBusd.times(afitSupply)
  const afitMcapString = formatLocalisedCompactNumber(afitMcap.toNumber())
  
  return (
    
	<div>
	
	<Grid>

	{/* <Flex flexDirection="column"> */}
	  <StyledColumn>
		<Text color="textSubtle"><a href="https://bscscan.com/token/0x246d22ff6e0b90f80f2278613e8db93ff7a09b95">{t('AFITX Data')}</a></Text>
	  </StyledColumn>
	  {/* </Flex> */}
	  <StyledColumn>
        <Text color="textSubtle">{t('Total supply')}</Text>
        {cakeSupply ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={cakeSupply} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </StyledColumn>
      <StyledColumn>
        { /* <Text color="textSubtle">{t('Burned to date')}</Text>
			{burnedBalance ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={burnedBalance} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
			)}
		*/ }	

		<Text color="textSubtle">{t('AFITX Price')}</Text>
		{cakePriceBusd ? (
		  /* <Balance decimals={2} lineHeight="1.1" fontSize="24px" bold value={`$`+parseFloat(cakePriceBusd.toFixed(2))} /> */
			  <Text lineHeight="1.1" fontSize="24px" bold>${t('%cakePriceBusdd%', { cakePriceBusdd: cakePriceBusd.toFixed(3) })}</Text>
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
		
      </StyledColumn>
      <StyledColumn noMobileBorder>
        <Text color="textSubtle">{t('Market cap')}</Text>
        {mcap?.gt(0) && mcapString ? (
          <Heading scale="lg">{t('$%marketCap%', { marketCap: mcapString })}</Heading>
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </StyledColumn>
      {/* <StyledColumn>
        <Text color="textSubtle">{t('Current emissions')}</Text>

        <Heading scale="lg">{t('%cakeEmissions%/block', { cakeEmissions: emissionsPerBlock })}</Heading>
      </StyledColumn> */}

    </Grid>
	
	<Grid>

	{/* <Flex flexDirection="column"> */}
	  <StyledColumn>
		<Text color="textSubtle"><a href="https://bscscan.com/token/0x4516bb582f59befcbc945d8c2dac63ef21fba9f6">{t('AFIT Data')}</a></Text>
	  </StyledColumn>
	  {/* </Flex> */}
	  <StyledColumn>
        <Text color="textSubtle">{t('Total supply')}</Text>
        {cakeSupply ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={afitSupply} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </StyledColumn>
      <StyledColumn>
        { /* <Text color="textSubtle">{t('Burned to date')}</Text>
			{burnedBalance ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={burnedBalance} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
			)}
		*/ }	

		<Text color="textSubtle">{t('AFIT Price')}</Text>
		{afitPriceBusd ? (
		  /* <Balance decimals={2} lineHeight="1.1" fontSize="24px" bold value={`$`+parseFloat(cakePriceBusd.toFixed(2))} /> */
			  <Text lineHeight="1.1" fontSize="24px" bold>${t('%afitPriceBusd%', { afitPriceBusd: afitPriceBusd.toFixed(3) })}</Text>
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
		
      </StyledColumn>
      <StyledColumn noMobileBorder>
        <Text color="textSubtle">{t('Market cap')}</Text>
        {afitMcap?.gt(0) && afitMcapString ? (
          <Heading scale="lg">{t('$%marketCap%', { marketCap: afitMcapString })}</Heading>
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </StyledColumn>
      {/* <StyledColumn>
        <Text color="textSubtle">{t('Current emissions')}</Text>

        <Heading scale="lg">{t('%cakeEmissions%/block', { cakeEmissions: emissionsPerBlock })}</Heading>
      </StyledColumn> */}

    </Grid>
	
	</div>
	
  )
}

export default CakeDataRow
