import { TranslationKeys } from '@/constants/translation'

export const translations: Record<'es' | 'en', TranslationKeys> = {
  en: {
    // Header
    Nav: {
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
    },
    // Hero section
    HeroSection: {
      title: 'Full Stack Developer',
      description:
        'Specializing in creating robust and scalable web applications, from the backend to the user interface. I combine efficient technical solutions with intuitive designs, ensuring a perfect balance between functionality, performance, and user experience. Passionate about modern technologies and clean software architecture, I aim to build digital products that are as effective as they are attractive.',
    },
    // Skills section
    SkillsSection: {
      title: 'Skills & Technologies',
      description: 'Collection of tools and technologies I use to bring ideas to life.',
    },
    // Experience section
    ExperienceSection: {
      title: 'Work Experience',
      description: 'My professional journey and key contributions.',
    },
    // Experience cards
    VeroExperience: {
      title: 'Full Stack Developer',
      start_date: 'Nov 2025',
      end_date: 'Present',
      key_point_1:
        'Design and development of a SaaS for the control of Standard Operating Procedures (SOPs) for registration, scheduling, appointment planning, and calendar visualization by company and branch.',
      key_point_2:
        'Centralized management of documents and multimedia resources enabling real-time audits.',
      key_point_3:
        'I serve as the designated technician for the long-term maintenance, support, and evolution of the system.',
      key_point_4:
        'Technologies: TypeScript, Next.js, Node.js, MongoDB, Google Drive API, Google Maps API, Cloudinary, ...',
    },
    BooknowExperience: {
      title: 'Full Stack Developer',
      start_date: 'Sep 2025',
      end_date: 'Jan 2026',
      key_point_1:
        'Implementation of a form for automatic account creation within the Arrivia ecosystem.',
      key_point_2:
        'Post-checkout integration with Stripe for account creation and user redirection via the Arrivia API.',
      key_point_3:
        'Development of a sales management dashboard with contract generation via SignNow and data export to PDF.',
      key_point_4: 'Technologies: Next.js, Node.js, Express.js, MongoDB, Stripe, ...',
    },
    RentawebExperience: {
      title: 'Full Stack Developer',
      start_date: 'May 2023',
      end_date: 'Jul 2025',
      key_point_1: 'Development of 3 SaaS platforms from scratch',
      key_point_2:
        'Pest control management system with dynamic PDF exports and real-time GPS tracking.',
      key_point_3:
        'Refrigeration maintenance platform with adaptable checklists and role-based access.',
      key_point_4:
        'E-commerce tool for the construction industry with automated invoicing and financial reporting.',
      key_point_5:
        'Technologies: Next.js, Node.js, MongoDB, Google Maps API, Google Sheets API, ...',
    },
    DrimoExperience: {
      title: 'Full Stack & Mobile Developer',
      start_date: 'Apr 2022',
      end_date: 'Mar 2023',
      key_point_1:
        'The vehicle service application was redesigned with an improved user experience and payment integration.',
      key_point_2:
        'An application was created for the construction industry with real-time KPI analytics and AWS infrastructure.',
      key_point_3:
        'Technologies: Next.js, React Native, Node.js, .NET, GraphQL, MongoDB, Serverless architecture, ...',
    },
    FreelanceExperience: {
      title: 'Full Stack Developer',
      start_date: 'Sep 2021',
      end_date: 'Dic 2021',
      key_point_1:
        'Collaboration in the creation of a telemedicine platform developed to generate medical appointments, create digital prescriptions, offer real-time consultations via video call, process online payments, and other functionalities.',
      key_point_2: 'Technologies: React.js, Node.js, PostgreSQL, PayPal API, ...',
    },
    // Contact section
    ContactSectionForm: {
      title: 'Get In Touch',
      description: 'Have a project in mind and need a developer? Feel free to reach out.',
      form_name: 'Name',
      form_name_placeholder: 'Your Name',
      form_email: 'Email',
      form_email_placeholder: 'your.email@example.com',
      form_message: 'Message',
      form_message_placeholder: 'Tell me about your project...',
      form_button_send: 'Send Message',
      form_button_loading: 'sending...',
      toast_success: 'Message Sent!',
      toast_error: 'Uh oh! Something went wrong.',
    },
    // Footer
    Footer: {
      legend: '© 2025 Dhalgüin Hernández Folio. All Rights Reserved.',
    },
  },
  es: {
    // Header
    Nav: {
      skills: 'Habilidades',
      experience: 'Experiencia',
      contact: 'Contacto',
    },
    // Hero section
    HeroSection: {
      title: 'Desarrollador Full Stack',
      description:
        'Especializado en crear aplicaciones web robustas y escalables, desde el backend hasta la interfaz de usuario. Combino soluciones técnicas eficientes con diseños intuitivos, asegurando un equilibrio perfecto entre funcionalidad, rendimiento y experiencia de usuario. Apasionado por las tecnologías modernas y la arquitectura de software limpia, con el objetivo de construir productos digitales que sean tan eficaces como atractivos.',
    },
    // Skills section
    SkillsSection: {
      title: 'Habilidades y Tecnologías',
      description: 'Colección de herramientas y tecnologías que uso para dar vida a las ideas.',
    },
    // Experience section
    ExperienceSection: {
      title: 'Experiencia Laboral',
      description: 'Mi trayectoria profesional y contribuciones clave.',
    },
    // Experience cards
    VeroExperience: {
      title: 'Desarrollador Full Stack',
      start_date: 'Nov 2025',
      end_date: 'Presente',
      key_point_1:
        'Diseño y construcción un SaaS para el control de Procedimientos Operativos Estandarizados (POEs) para el registro, programación, agendamiento y visualización en calendario por empresa y sucursal.',
      key_point_2:
        'Gestión centralizada de documentos y recursos multimedia permitiendo auditorias en tiempo real.',
      key_point_3:
        'Me desempeño como técnico designado para el mantenimiento, soporte y evolución a largo plazo del sistema.',
      key_point_4:
        'Tecnologías: TypeScript, Next.js, Node.j, MongoDB, Google Drive API, Google Maps API, Cloudinary, ...',
    },
    BooknowExperience: {
      title: 'Desarrollador Full Stack',
      start_date: 'Sep 2025',
      end_date: 'Ene 2026',
      key_point_1:
        'Implementación de un formulario para la creación automática de cuentas en el ecosistema de Arrivia.',
      key_point_2:
        'Integración luego del check-out de Stripe para creación de cuentas y redirección de usuarios a través de la API de Arrivia.',
      key_point_3:
        'Desarrollo un dashboard para la gestión de ventas con generación de contratos vía SignNow y exportación de datos a PDF.',
      key_point_4: 'Tecnologías: Next.js, Node.js, Express.js, MongoDB, Stripe, ...',
    },
    RentawebExperience: {
      title: 'Desarrollador Full Stack',
      start_date: 'May 2023',
      end_date: 'Jul 2025',
      key_point_1: 'Desarrollo de 3 plataformas SaaS desde cero.',
      key_point_2:
        'Sistema de gestión de control de plagas con exportaciones dinámicas de PDF y seguimiento GPS en tiempo real.',
      key_point_3:
        'Plataforma de mantenimiento de refrigeración con listas de verificación adaptables y acceso basado en roles.',
      key_point_4:
        'Herramienta de comercio electrónico para la construcción con facturación automatizada e informes financieros.',
      key_point_5:
        'Tecnologías: Next.js, Node.js, MongoDB, Google Maps API, Google Sheets API, ...',
    },
    DrimoExperience: {
      title: 'Desarrollador Full Stack & Mobile',
      start_date: 'Abr 2022',
      end_date: 'Mar 2023',
      key_point_1:
        'Se rediseñó la aplicación de servicio de vehículos con una experiencia de usuario mejorada e integración de pagos.',
      key_point_2:
        'Se creó una aplicación para la industria de la construcción con análisis de KPI en tiempo real e infraestructura de AWS.',
      key_point_3:
        'Tecnologías: Next.js, React Native, Node.js, .NET, GraphQL, MongoDB, Serverless architecture, ...',
    },
    FreelanceExperience: {
      title: 'Desarrollador Full Stack',
      start_date: 'Sep 2021',
      end_date: 'Dic 2021',
      key_point_1:
        'Colaboración en la creación de una plataforma de telemedicina desarrollada con el objetivo de generar citas médicas, creación de recetas digitales, Consulta en tiempo real por videollamada, pagos en línea, entre otras funcionalidades.',
      key_point_2: 'Tecnologías: React.js, Node.js, PostgreSQL, PayPal API, ...',
    },
    // Contact section
    ContactSectionForm: {
      title: 'Contáctame',
      description:
        '¿Tienes un proyecto en mente y necesitas un desarrollador? No dudes en contactarme.',
      form_name: 'Nombre',
      form_name_placeholder: 'Tu Nombre',
      form_email: 'Correo Electrónico',
      form_email_placeholder: 'tu.email@ejemplo.com',
      form_message: 'Mensaje',
      form_message_placeholder: 'Cuéntame sobre tu proyecto...',
      form_button_send: 'Enviar Mensaje',
      form_button_loading: 'Enviando...',
      toast_success: '¡Mensaje Enviado!',
      toast_error: '¡Oh no! Algo salió mal.',
    },
    // Footer
    Footer: {
      legend: '© 2025 Dhalgüin Hernández Folio. Todos los derechos reservados.',
    },
  },
}
