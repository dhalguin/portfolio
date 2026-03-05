'use client'

import Link from 'next/link'
import { CodeIcon, GithubIcon, InstagramIcon, LinkedinIcon } from '../../../../packages/icons'
import { useLenguage } from '@/contexts/lenguageContext'

const HeroSection: React.FC = () => {
  const { t } = useLenguage()

  return (
    <section id="hero" className="flex bg-background w-full">
      <div className="flex w-full items-center justify-between gap-5 lg:gap-0 flex-col md:flex-row-reverse">
        <div>
          <div className="w-60 h-60 flex items-center justify-center border-4 bg-primary-500/20 border-secondary rounded-full">
            <CodeIcon width="120" height="120" fill="#3d39c2" />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-5">
          <h1 className="text-white font-bold text-5xl lg:text-7xl">Dhalgüin Hernández</h1>
          <h3 className="text-secondary text-2xl md:text-4xl">{t('HeroSection', 'title')}</h3>
          <p className="text-lg max-w-xl text-center md:text-start">
            {t('HeroSection', 'description')}
          </p>
          <div className="flex justify-center md:justify-start gap-10 md:gap-5 mt-5 w-full">
            <Link
              href={'https://github.com/dhalguin'}
              target="_blank"
              className="border border-primary-400 rounded-lg p-3 hover:bg-accent"
            >
              <i>
                <GithubIcon width="24" height="24" fill="white" />
              </i>
            </Link>
            <Link
              href={'https://www.linkedin.com/in/dhalguin-hdz/'}
              target="_blank"
              className="border border-primary-400 rounded-lg p-3 hover:bg-accent"
            >
              <i>
                <LinkedinIcon width="24" height="24" fill="white" />
              </i>
            </Link>
            <Link
              href={'https://www.instagram.com/dhalguin_hdz/'}
              target="_blank"
              className="border border-primary-400 rounded-lg p-3 hover:bg-accent"
            >
              <i>
                <InstagramIcon width="24" height="24" fill="white" />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
