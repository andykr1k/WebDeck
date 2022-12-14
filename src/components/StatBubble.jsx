import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText
  } from '@chakra-ui/react'

export default function StatBubble() {
    return (
        <Stat>
            <StatLabel>Sites Generated</StatLabel>
            <StatNumber>12</StatNumber>
        </Stat>
    )
}