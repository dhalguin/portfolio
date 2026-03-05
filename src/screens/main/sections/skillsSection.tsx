'use client'

import { SkillsandTechnologies } from '@/constants/skills'
import { useLenguage } from '@/contexts/lenguageContext'
import { renderIcon } from '@/helpers/renderIcon'
import Slider from 'react-infinite-logo-slider'

const SkillSection: React.FC = () => {
  const { t } = useLenguage()

  return (
    <section id="skills" className="flex bg-primary-700 w-full">
      <div className="flex w-full">
        <div className="flex flex-col items-center gap-5 w-full">
          <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl">
            {t('SkillsSection', 'title')}
          </h2>
          <p className="text-lg text-center md:text-start">{t('SkillsSection', 'description')}</p>
          <div className="mt-10 w-full">
            <Slider duration={20}>
              {SkillsandTechnologies.map(skill => (
                <Slider.Slide key={skill.id}>
                  <div className="min-w-48 h-16 bg-primary-600 rounded-4xl flex gap-4 items-center justify-center px-4">
                    <i>{renderIcon(skill.icon)}</i>
                    <span className="text-white">{skill.label}</span>
                  </div>
                </Slider.Slide>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection
