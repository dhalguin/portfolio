'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  Lenguage,
  LenguageContextType,
  LenguageProviderType,
  TranslationKey,
  TranslationSection,
} from './type'
import { translations } from '@/lib/translations'

const initialLenguage: LenguageContextType = {
  lenguage: 'es',
  setLenguage: ({}) => {},
  t: () => '',
}

const LenguageContext = createContext<LenguageContextType>(initialLenguage)

export const LenguageProvider: React.FC<LenguageProviderType> = ({ children }) => {
  const [lenguage, setLenguage] = useState<Lenguage>(initialLenguage.lenguage)

  const t = useMemo(
    () =>
      <S extends TranslationSection>(section: S, key: TranslationKey<S>): string => {
        const sectionTranslations = translations[lenguage][section]
        const fallbackSection = translations['es'][section]
        const text = sectionTranslations?.[key] || fallbackSection?.[key] || String(key)

        return String(text)
      },
    [lenguage]
  )

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lenguage
    }
  }, [lenguage])

  return (
    <LenguageContext.Provider value={{ lenguage, setLenguage, t }}>
      {children}
    </LenguageContext.Provider>
  )
}

export const useLenguage = () => {
  const context = useContext(LenguageContext)
  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider')

  return context
}
