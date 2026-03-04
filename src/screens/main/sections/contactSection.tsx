'use client'

import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { ControlledInputUI, ControlledTextareaUI } from '../../../../packages/ui'
import { ContactForm, ContactFormResolverSchema } from '@/constants/resolvers/ContactFormResolver'
import { yupResolver } from '@hookform/resolvers/yup'
import { sendEmail } from '@/lib/nodemailer'
import { useLenguage } from '@/contexts/lenguageContext'

const ContactSection: React.FC = () => {
  const { t } = useLenguage()

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: yupResolver(ContactFormResolverSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactForm) => {
    const response = await sendEmail(data.name, data.email, data.message)
    if (typeof response !== 'string') {
      toast.success('Su correo me ha llegado correctamente! Pronto me pondré en contacto.')
      reset()
    } else {
      toast.error(response)
    }
  }

  return (
    <section id="contact" className="flex justify-center bg-primary-700 w-full">
      <div className="flex flex-col items-center gap-5 w-fit">
        <h2 className="text-white font-bold text-4xl md:text-5xl">{t('contact_title')}</h2>
        <p className="text-lg text-center md:text-start">{t('contact_description')}</p>
        <div className="mt-10 w-full">
          <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit(onSubmit)}>
            <ControlledInputUI
              control={control}
              name="name"
              label={t('contact_form_name') as string}
              placeholder={t('contact_form_name_placeholder') as string}
              error={errors?.name}
            />
            <ControlledInputUI
              control={control}
              name="email"
              label={t('contact_form_email') as string}
              placeholder={t('contact_form_email_placeholder') as string}
              error={errors?.email}
            />
            <ControlledTextareaUI
              control={control}
              name="message"
              label={t('contact_form_message') as string}
              placeholder={t('contact_form_message_placeholder') as string}
              error={errors?.message}
            />
            <button className="bg-secondary text-white py-2 rounded-lg cursor-pointer">
              {t('contact_form_button_send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
