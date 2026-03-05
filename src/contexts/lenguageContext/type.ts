import { translations } from '@/lib/translations'
import { JSX } from 'react'

export type Lenguage = 'en' | 'es'

export type TranslationSection = keyof typeof translations.es

export type TranslationKey<S extends TranslationSection> = keyof (typeof translations.es)[S]

export type LenguageContextType = {
  lenguage: Lenguage
  setLenguage: (lenguage: Lenguage) => void
  t: <S extends TranslationSection>(section: S, key: TranslationKey<S>) => string
}

export type LenguageProviderType = {
  children: JSX.Element
}
