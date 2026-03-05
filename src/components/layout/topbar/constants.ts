import { Lenguages } from '@/constants/translation'
import { TranslationKey, TranslationSection } from '@/contexts/lenguageContext/type'

type TopbarOption = {
  label: string
  href: string
}

export const topbarOptions = (
  t: <S extends TranslationSection>(section: S, key: TranslationKey<S>) => string
) => {
  const data: TopbarOption[] = [
    {
      label: t('Nav', 'skills') as string,
      href: '/#skills',
    },
    {
      label: t('Nav', 'experience') as string,
      href: '/#experience',
    },
    {
      label: t('Nav', 'contact') as string,
      href: '/#contact',
    },
  ]

  return data
}

type LenguageOption = {
  flag: Lenguages
  type: Lenguages
  label: string
}

export const LenguageOptions: LenguageOption[] = [
  {
    flag: Lenguages['en'],
    type: Lenguages['en'],
    label: 'EN',
  },
  {
    flag: Lenguages['es'],
    type: Lenguages['es'],
    label: 'ES',
  },
]
