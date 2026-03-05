'use client'

import ExperienceCard from '@/components/experienceCard'
import { workExperience } from '@/constants/experience'
import { useLenguage } from '@/contexts/lenguageContext'

const ExperienceSection: React.FC = () => {
  const { t } = useLenguage()

  return (
    <section id="experience" className="flex bg-background w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center gap-5 w-full">
          <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl">
            {t('ExperienceSection', 'title')}
          </h2>
          <p className="text-lg text-center md:text-start">
            {t('ExperienceSection', 'description')}
          </p>
        </div>
        <div className="mt-10 relative">
          <div className="absolute left-1/2 top-0 h-full w-px bg-primary-600 hidden lg:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-4 lg:gap-x-0 gap-y-12">
            {workExperience(t).map(exp => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
