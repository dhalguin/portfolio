'use client'

import { TranslationKey, TranslationSection } from '@/contexts/lenguageContext/type'

export type WorkExperienceType = {
  id: number
  role: string
  company: string
  startDate: string
  endDate: string
  keyPoints: string[]
  imageUrl: string
}

export const workExperience = (
  t: <S extends TranslationSection>(section: S, key: TranslationKey<S>) => string
) => {
  const data: WorkExperienceType[] = [
    {
      id: 0,
      role: t('VeroExperience', 'title') as string,
      company: 'Vero',
      startDate: t('VeroExperience', 'start_date'),
      endDate: t('VeroExperience', 'end_date'),
      keyPoints: [
        t('VeroExperience', 'key_point_1'),
        t('VeroExperience', 'key_point_2'),
        t('VeroExperience', 'key_point_3'),
        t('VeroExperience', 'key_point_4'),
      ],
      imageUrl: '',
    },
    {
      id: 1,
      role: t('BooknowExperience', 'title') as string,
      company: 'Booknow',
      startDate: t('BooknowExperience', 'start_date'),
      endDate: t('BooknowExperience', 'end_date'),
      keyPoints: [
        t('BooknowExperience', 'key_point_1'),
        t('BooknowExperience', 'key_point_2'),
        t('BooknowExperience', 'key_point_3'),
        t('BooknowExperience', 'key_point_4'),
      ],
      imageUrl: '',
    },
    {
      id: 2,
      role: t('RentawebExperience', 'title') as string,
      company: 'Rentaweb',
      startDate: t('RentawebExperience', 'start_date'),
      endDate: t('RentawebExperience', 'end_date'),
      keyPoints: [
        t('RentawebExperience', 'key_point_1'),
        t('RentawebExperience', 'key_point_2'),
        t('RentawebExperience', 'key_point_3'),
        t('RentawebExperience', 'key_point_4'),
        t('RentawebExperience', 'key_point_5'),
      ],
      imageUrl: '',
    },
    {
      id: 3,
      role: t('DrimoExperience', 'title') as string,
      company: 'Drimo',
      startDate: t('DrimoExperience', 'start_date'),
      endDate: t('DrimoExperience', 'end_date'),
      keyPoints: [
        t('DrimoExperience', 'key_point_1'),
        t('DrimoExperience', 'key_point_2'),
        t('DrimoExperience', 'key_point_3'),
      ],
      imageUrl: '',
    },
    {
      id: 4,
      role: t('FreelanceExperience', 'title') as string,
      company: 'Freelance',
      startDate: t('FreelanceExperience', 'start_date'),
      endDate: t('FreelanceExperience', 'end_date'),
      keyPoints: [t('FreelanceExperience', 'key_point_1'), t('FreelanceExperience', 'key_point_2')],
      imageUrl: '',
    },
  ]

  return data
}
