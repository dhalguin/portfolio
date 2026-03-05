'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLenguage } from '@/contexts/lenguageContext'
import { renderFlagIcon } from '@/helpers/renderIcon'
import { Lenguages } from '@/constants/translation'
import { CloseIcon, CodeIcon, MenuIcon } from '../../../../packages/icons'
import { LenguageOptions, topbarOptions } from './constants'

const Topbar: React.FC = () => {
  const [lenguagesDisplayed, setLenguagesDisplayed] = useState<boolean>(false)
  const [mobileMenuCollpased, setMobileMenuCollapsed] = useState<boolean>(false)

  const { lenguage, setLenguage, t } = useLenguage()

  const onDisplayLenguages = () => setLenguagesDisplayed(prevState => !prevState)

  const onMenuCollpased = () => setMobileMenuCollapsed(prevState => !prevState)

  const onChangeLenguage = (newLenguage: Lenguages) => {
    setLenguage(newLenguage)
    onDisplayLenguages()
  }

  return (
    <div className="flex justify-center items-center border-b border-primary-600 w-full h-16 sticky top-0 left-0 backdrop-blur-md z-50">
      <div className="hidden md:flex justify-center items-center w-full max-w-6xl">
        <nav className="flex-1 flex items-center w-full">
          <div className="flex items-center gap-3">
            <i>
              <CodeIcon width="32" height="32" fill="#4052b6" />
            </i>
            <Link href={'/#hero'}>
              <h3 className="text-2xl">DHZ</h3>
            </Link>
          </div>
          <div className="flex w-full justify-evenly">
            {topbarOptions(t).map((option, index) => (
              <div key={`topbar-option-${index}`}>
                <Link href={option.href}>
                  <span className="text-lg text-white/60">{option.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </nav>
        <div>
          <div className="relative">
            <div
              className="border border-primary-600 p-2 rounded-lg w-24 cursor-pointer"
              onClick={() => onDisplayLenguages()}
            >
              <div className="flex items-center gap-4">
                <i>{renderFlagIcon(Lenguages[lenguage === 'en' ? 'en' : 'es'])}</i>
                <span className="text-white">EN</span>
              </div>
            </div>
            <div
              className="absolute top-14 right-0 border border-primary-600 rounded-lg w-24"
              style={{
                visibility: lenguagesDisplayed ? 'visible' : 'hidden',
              }}
            >
              <div className="flex flex-col justify-between p-1">
                {LenguageOptions.map((option, index) => (
                  <div
                    key={`lenguage-option-${index}`}
                    className="flex items-center gap-4 cursor-pointer rounded-lg py-1 px-2 hover:bg-accent"
                    onClick={() => onChangeLenguage(option.type)}
                  >
                    <i>{renderFlagIcon(Lenguages[option.flag])}</i>
                    <span className="text-white">{option.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile topbar */}
      <div className="flex md:hidden justify-between items-center w-full px-4">
        <div className="flex items-center gap-3">
          <i>
            <CodeIcon width="32" height="32" fill="#4052b6" />
          </i>
          <Link href={'/#hero'}>
            <h3 className="text-2xl">DHZ</h3>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <div
              className="border border-primary-600 p-2 rounded-lg w-24 cursor-pointer"
              onClick={() => onDisplayLenguages()}
            >
              <div className="flex items-center gap-4">
                <i>{renderFlagIcon(Lenguages[lenguage === 'en' ? 'en' : 'es'])}</i>
                <span className="text-white">EN</span>
              </div>
            </div>
            <div
              className="absolute top-14 right-0 border border-primary-600 rounded-lg w-24"
              style={{
                visibility: lenguagesDisplayed ? 'visible' : 'hidden',
              }}
            >
              <div className="flex flex-col justify-between p-1">
                {LenguageOptions.map((option, index) => (
                  <div
                    key={`lenguage-option-${index}`}
                    className="flex items-center gap-4 cursor-pointer rounded-lg py-1 px-2 hover:bg-accent"
                    onClick={() => onChangeLenguage(option.type)}
                  >
                    <i>{renderFlagIcon(Lenguages[option.flag])}</i>
                    <span className="text-white">{option.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <i className="cursor-pointer" onClick={() => onMenuCollpased()}>
              <MenuIcon width="28" height="28" fill="white" />
            </i>
          </div>
        </div>
      </div>

      {/* mobile Menu */}
      <div
        className="absolute top-0 left-0 h-screen w-full bg-black/60"
        style={{
          visibility: mobileMenuCollpased ? 'visible' : 'hidden',
        }}
      >
        <div className="w-4/5 h-full bg-primary-700">
          <div className="py-2 px-4">
            <div className="h-16 border-b border-primary-600 mb-4">
              <div className="flex items-center justify-between h-full">
                <div className="flex items-center gap-3">
                  <i>
                    <CodeIcon width="24" height="24" fill="#4052b6" />
                  </i>
                  <h3 className="text-xl">DHFolio</h3>
                </div>
                <i
                  className="border border-white rounded-full p-2 cursor-pointer"
                  onClick={() => onMenuCollpased()}
                >
                  <CloseIcon width="18" height="18" fill="white" />
                </i>
              </div>
            </div>
            <nav className="flex flex-col">
              <div className="flex flex-col gap-y-4">
                {topbarOptions(t).map((option, index) => (
                  <div key={`topbar-option-${index}`} onClick={() => onMenuCollpased()}>
                    <Link href={option.href}>
                      <span className="text-lg text-white">{option.label}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
