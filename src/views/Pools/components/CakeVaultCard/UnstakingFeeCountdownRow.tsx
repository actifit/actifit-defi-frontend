import React from 'react'
import { Flex, Text } from '@pancakeswap-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import useWithdrawalFeeTimer from 'hooks/cakeVault/useWithdrawalFeeTimer'
import WithdrawalFeeTimer from './WithdrawalFeeTimer'

interface UnstakingFeeCountdownRowProps {
  account?: string
  withdrawalFee: string
  lastDepositedTime: string
  withdrawalFeePeriod?: string
}

const UnstakingFeeCountdownRow: React.FC<UnstakingFeeCountdownRowProps> = ({
  account = true,
  withdrawalFee,
  lastDepositedTime,
  withdrawalFeePeriod = '259200',
}) => {
  const { t } = useTranslation()
  const { secondsRemaining, hasPerformanceFee } = useWithdrawalFeeTimer(
    parseInt(lastDepositedTime, 10),
    parseInt(withdrawalFeePeriod, 10),
  )

  const shouldShowTimer = account && lastDepositedTime && hasPerformanceFee

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">
        {parseInt(withdrawalFee) / 100 || '-'}%{' '}
        {shouldShowTimer ? t('unstaking fee until') : t('unstaking fee if withdrawn within 72h')}
      </Text>
      {shouldShowTimer && <WithdrawalFeeTimer secondsRemaining={secondsRemaining} />}
    </Flex>
  )
}

export default UnstakingFeeCountdownRow
