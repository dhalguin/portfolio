import { TechnologiesEnum } from '@/constants/skills'
import { FlagIcon, TechnologyIcon } from '../../packages/icons'
import { Lenguages } from '@/constants/translation'

export const renderIcon = (value: TechnologiesEnum) => {
  switch (value) {
    case 'nextjs':
      return <TechnologyIcon.NextjsIcon width="24" height="24" fill="white" />

    case 'typescript':
      return <TechnologyIcon.TypescriptIcon width="24" height="24" fill="white" />

    case 'nodejs':
      return <TechnologyIcon.NodejsIcon width="24" height="24" fill="white" />

    case 'expressjs':
      return <TechnologyIcon.ExpressjsIcon width="24" height="24" fill="white" />

    case 'nestjs':
      return <TechnologyIcon.NestjsIcon width="24" height="24" fill="white" />

    case 'mongodb':
      return <TechnologyIcon.MongoDbIcon width="24" height="24" fill="white" />

    case 'mysql':
      return <TechnologyIcon.MySqlIconIcon width="24" height="24" fill="white" />

    case 'postgresql':
      return <TechnologyIcon.PostgreSqlIcon width="24" height="24" fill="white" />

    case 'aws':
      return <TechnologyIcon.AwsIcon width="24" height="24" fill="white" />

    default:
      return <TechnologyIcon.ReactjsIcon width="24" height="24" fill="white" />
  }
}

export const renderFlagIcon = (value: Lenguages) => {
  switch (value) {
    case 'es':
      return <FlagIcon.SpainFlagIcon width="32" height="32" />

    default:
      return <FlagIcon.USAFlagIcon width="32" height="32" />
  }
}
