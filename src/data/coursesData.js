/**
 * CLIC Campus — Official Academic Course Catalog & Combo Offers
 * Single Source of Truth for Courses, Departments, and Special Bundles
 */

export const departments = [
  'All',
  'English',
  'IT',
  'Graphic Designing',
  'Web Designing',
  'Sinhala',
  'Office Package'
];

export const qualificationLevels = [
  'All Levels',
  'Diploma',
  'Certificate',
  'Foundation'
];

export const deliveryModes = [
  'All Modes',
  'Full-time & Part-time',
  'Weekend & Evening'
];

export const schoolsData = [
  {
    id: 'school-it',
    name: 'School of Information Technology',
    dept: 'IT',
    code: 'SOIT',
    badge: 'Flagship Faculty',
    image: '/gallery/seminars/Students.webp',
    description: 'Empowering future IT specialists with hands-on computer systems, operating environments, digital literacy, and modern enterprise software.',
    courseCount: 3,
    careerOutlooks: ['IT Support Specialist', 'Systems Administrator', 'Database Coordinator', 'Digital Operations Officer'],
    headOfDept: 'S. Rohan Benjamin'
  },
  {
    id: 'school-languages',
    name: 'School of English & Languages',
    dept: 'English',
    code: 'SOEL',
    badge: 'High Employment Impact',
    image: '/gallery/seminars/Akka3.webp',
    description: 'Master spoken fluency, business correspondence, public speaking, and corporate communication for regional and international career success.',
    courseCount: 2,
    careerOutlooks: ['Corporate Communicator', 'Bilingual Executive', 'Customer Relations Specialist', 'Academic Tutor'],
    headOfDept: 'Kurunathapillai Mahathevan'
  },
  {
    id: 'school-creative',
    name: 'School of Creative & Graphic Design',
    dept: 'Graphic Designing',
    code: 'SOCD',
    badge: 'Industry Portfolio Driven',
    image: '/gallery/seminars/Seminar1.webp',
    description: 'Master industry-standard creative suites (Adobe Photoshop, Illustrator) to produce stunning visual branding, marketing collateral, and digital media.',
    courseCount: 1,
    careerOutlooks: ['Graphic Designer', 'Brand Visualizer', 'Digital Marketing Creative', 'Freelance Visual Artist'],
    headOfDept: 'CLIC Creative Faculty'
  },
  {
    id: 'school-web',
    name: 'School of Web & Digital Technologies',
    dept: 'Web Designing',
    code: 'SOWD',
    badge: 'Modern Tech Stack',
    image: '/gallery/seminars/seminar.webp',
    description: 'Build fast, interactive, and responsive websites from scratch using semantic HTML5, modern CSS3, JavaScript, and responsive design systems.',
    courseCount: 1,
    careerOutlooks: ['Frontend Web Developer', 'Web Designer', 'UI/UX Implementer', 'Digital Solutions Builder'],
    headOfDept: 'S. Rohan Benjamin'
  },
  {
    id: 'school-admin',
    name: 'School of Office Administration',
    dept: 'Office Package',
    code: 'SOAP',
    badge: 'Essential Corporate Skills',
    image: '/gallery/seminars/Seminar4.webp',
    description: 'Master the complete Microsoft Office productivity suite (Word, Excel, PowerPoint, Access) for automated administrative workflows and reporting.',
    courseCount: 1,
    careerOutlooks: ['Office Administrator', 'Data Analyst Assistant', 'Executive Secretary', 'Operations Assistant'],
    headOfDept: 'Dayani & Team'
  },
  {
    id: 'school-vernacular',
    name: 'Department of Vernacular Studies',
    dept: 'Sinhala',
    code: 'DOVS',
    badge: 'Public Sector Relevance',
    image: '/gallery/seminars/Seminar5.webp',
    description: 'Comprehensive reading, writing, and professional spoken Sinhala for government jobs, client interaction, and bilingual business operations.',
    courseCount: 1,
    careerOutlooks: ['Government Service Applicant', 'Bilingual Liaison', 'Public Service Clerk', 'Community Coordinator'],
    headOfDept: 'CLIC Language Faculty'
  }
];

export const courses = [
  {
    id: 'diploma-english',
    title: 'Diploma in English',
    dept: 'English',
    level: 'Diploma',
    code: 'ENG-DIP-01',
    deliveryMode: 'Full-time & Part-time',
    duration: '3 Months (Full-time & Part-time)',
    fees: 'Rs. 25,000/=',
    numericFee: 25000,
    rating: 4.9,
    reviewsCount: 184,
    intake: 'Open for 2026 Batch',
    featured: true,
    thumbnail: '/gallery/seminars/Akka3.webp',
    lecturers: [
      {
        name: 'Kurunathapillai Mahathevan',
        role: 'Director & English Lecturer',
        image: '/images/staff/Sir.webp',
        bio: 'Leading CLIC Campus with strategic vision and guiding the English program with a focus on practical communication, grammar mastery, and professional language skills.'
      },
      {
        name: 'Mrs. Saruja Kishanth',
        role: 'Manager & English Lecturer',
        image: '/images/staff/Manager1.webp',
        bio: 'Mrs. Saruja Kishanth plays a key role in coordinating the English program, supporting students with spoken fluency, writing skills, and business communication.'
      }
    ],
    desc: 'Enhance your English communication skills for corporate and academic excellence. Covers grammar, writing, professional speaking, and business communication.',
    fullOverview: 'The Diploma in English at CLIC Campus provides an intensive, interactive environment to build real-world spoken fluency, corporate correspondence proficiency, and speech clarity. Designed for school leavers, corporate professionals, and university applicants who want to communicate with authority and poise.',
    syllabus: [
      'Spoken English & Pronunciation Mastery',
      'Business Communication & Email Etiquette',
      'Advanced Grammar & Sentence Structuring',
      'Presentation & Public Speaking Confidence',
      'Report Writing & Formal Correspondence',
      'Listening Comprehension & Conversational Drills'
    ],
    entryRequirements: 'G.C.E. O/L or equivalent, or mature students with interview assessment.',
    awardingBody: 'CLIC Campus Academic Directorate',
    branch: 'Akkaripattu Main Campus'
  },
  {
    id: 'diploma-it',
    title: 'Diploma in IT',
    dept: 'IT',
    level: 'Diploma',
    code: 'IT-DIP-02',
    deliveryMode: 'Full-time & Part-time',
    duration: '3 Months (Full-time & Part-time)',
    fees: 'Rs. 25,000/=',
    numericFee: 25000,
    rating: 4.9,
    reviewsCount: 220,
    intake: 'Open for 2026 Batch',
    featured: true,
    thumbnail: '/gallery/seminars/Students.webp',
    lecturers: [
      {
        name: 'S. Rohan Benjamin',
        role: 'IT Lecturer & Software Developer',
        image: '/rohan.webp',
        bio: 'S. Rohan Benjamin has over 2 years of experience in Web Development and MS Office, specializing in modern web technologies, software solutions, and professional document management.'
      },
      {
        name: 'Dayani',
        role: 'IT Lecturer',
        image: '/Diyaniakka.jpeg',
        bio: 'Dayani has over 3 years of experience in MS Office, with strong expertise across the complete Microsoft Office suite, including Word, Excel, PowerPoint, and Access, along with modern web technologies and software solutions.'
      },
      {
        name: 'Kanagarethnam Mathumitha',
        role: 'IT Lecturer',
        image: '/Mathumitha.png',
        bio: 'Mathumitha has over 1 years of experience in MS Office, with strong expertise across the complete Microsoft Office suite, including Word, Excel, PowerPoint, and Access, along with modern web technologies and software solutions.'
      }
    ],
    desc: "A comprehensive foundation in Information Technology covering hardware, software, MS Office, and digital tools essential for today's workplace.",
    fullOverview: 'The Diploma in Information Technology provides a rigorous, hands-on bridge into modern computing. Students develop comprehensive practical competency in computer architectures, operating systems, productivity suites, basic networking, and foundational web concepts in our dedicated campus computer lab.',
    syllabus: [
      'Computer Hardware & System Architectures',
      'Operating Systems Configuration & Management',
      'MS Office Suite for Business Administration',
      'Internet, Cloud Services & Cyber Safety',
      'Introduction to Programming Concepts & Logic',
      'Database Fundamentals & Data Management'
    ],
    entryRequirements: 'Basic computer literacy or G.C.E. O/L.',
    awardingBody: 'CLIC Campus Academic Directorate',
    branch: 'Akkaripattu Main Campus'
  },
  {
    id: 'diploma-graphic-designing',
    title: 'Diploma in Graphic Designing',
    dept: 'Graphic Designing',
    level: 'Diploma',
    code: 'GD-DIP-03',
    deliveryMode: 'Full-time & Part-time',
    duration: '3 Months (Full-time & Part-time)',
    fees: 'Rs. 25,000/=',
    numericFee: 25000,
    rating: 4.8,
    reviewsCount: 165,
    intake: 'Open for 2026 Batch',
    featured: true,
    thumbnail: '/gallery/seminars/Seminar1.webp',
    lecturers: [
      {
        name: 'CLIC Campus Faculty',
        role: 'Graphic Design Instructor',
        image: '',
        bio: 'Our Graphic Designing course is delivered by experienced design professionals who guide students through industry-standard tools and real-world creative projects, building a portfolio-ready skill set.'
      }
    ],
    desc: 'Master industry-standard tools like Adobe Photoshop and Illustrator to create stunning visual content for digital marketing, social media, and print media.',
    fullOverview: 'The Diploma in Graphic Designing equips creative minds with professional vector illustration, photo manipulation, typography theory, and branding aesthetics. Students complete the course with an authentic design portfolio ready for freelance or agency employment.',
    syllabus: [
      'Adobe Photoshop Fundamentals & Photo Retouching',
      'Vector Graphics & Logo Creation with Illustrator',
      'Colour Psychology & Modern Typography',
      'Social Media Ads, Banners & Flyer Creation',
      'Print Production Standards & Pre-press Guidelines',
      'Capstone Creative Portfolio Development'
    ],
    entryRequirements: 'Passion for design and basic computer knowledge.',
    awardingBody: 'CLIC Campus Academic Directorate',
    branch: 'Akkaripattu Main Campus'
  },
  {
    id: 'diploma-web-designing',
    title: 'Diploma in Web Designing',
    dept: 'Web Designing',
    level: 'Diploma',
    code: 'WD-DIP-04',
    deliveryMode: 'Full-time & Part-time',
    duration: '3 Months (Full-time & Part-time)',
    fees: 'Rs. 25,000/=',
    numericFee: 25000,
    rating: 4.9,
    reviewsCount: 198,
    intake: 'Open for 2026 Batch',
    featured: true,
    thumbnail: '/gallery/seminars/seminar.webp',
    lecturers: [
      {
        name: 'S. Rohan Benjamin',
        role: 'IT Lecturer & Software Developer',
        image: '/rohan.webp',
        bio: 'S. Rohan Benjamin brings hands-on expertise in modern web technologies, guiding students through the fundamentals of building attractive and responsive websites from concept to deployment.'
      }
    ],
    desc: 'Build beautiful, responsive, and dynamic websites from scratch using HTML5, CSS3, JavaScript, and modern frontend design principles.',
    fullOverview: 'Transform into a capable web designer with practical frontend skills. Understand how modern websites are planned, architected, styled, and published to the internet with clean code, mobile responsiveness, and interactive user experiences.',
    syllabus: [
      'HTML5 Semantic Structure & Modern Standards',
      'CSS3 Styling, Flexbox & Responsive Grid Layouts',
      'JavaScript Fundamentals & Interactive DOM Scripting',
      'UI/UX Prototyping & User-Centric Design Principles',
      'Mobile-First Design & Cross-Device Compatibility',
      'Website Deployment & Domain Hosting Basics'
    ],
    entryRequirements: 'G.C.E. O/L or basic computer literacy.',
    awardingBody: 'CLIC Campus Academic Directorate',
    branch: 'Akkaripattu Main Campus'
  },
  {
    id: 'diploma-sinhala',
    title: 'Diploma in Sinhala',
    dept: 'Sinhala',
    level: 'Diploma',
    code: 'SIN-DIP-05',
    deliveryMode: 'Full-time & Part-time',
    duration: '3 Months (Full-time & Part-time)',
    fees: 'Rs. 20,000/=',
    numericFee: 20000,
    rating: 4.7,
    reviewsCount: 142,
    intake: 'Open for 2026 Batch',
    featured: false,
    thumbnail: '/gallery/seminars/Seminar5.webp',
    lecturers: [
      {
        name: 'CLIC Campus Faculty',
        role: 'Sinhala Language Instructor',
        image: '',
        bio: 'Our Sinhala language program is delivered by qualified instructors with a strong focus on reading, writing, and spoken Sinhala to help students communicate confidently in professional and everyday settings.'
      }
    ],
    desc: 'Develop strong Sinhala language skills covering reading, writing, grammar, and spoken communication for professional and everyday use.',
    fullOverview: 'A specialized language diploma tailored to students and working professionals seeking to achieve practical fluency in Sinhala. Ideal for candidates aiming for government jobs, national NGO positions, or corporate roles requiring bilingual communication.',
    syllabus: [
      'Sinhala Alphabet, Script & Pronunciation Guide',
      'Grammar Fundamentals & Sentence Construction',
      'Everyday Spoken Dialogues & Conversational Practice',
      'Professional Workplace Sinhala Terminology',
      'Reading Official Forms, Notices & News Articles',
      'Writing Clear Official Letters & Notes'
    ],
    entryRequirements: 'Open to all interested candidates.',
    awardingBody: 'CLIC Campus Academic Directorate',
    branch: 'Akkaripattu Main Campus'
  },
  {
    id: 'diploma-office-package',
    title: 'Diploma in Office Package',
    dept: 'Office Package',
    level: 'Diploma',
    code: 'OP-DIP-06',
    deliveryMode: 'Full-time & Part-time',
    duration: '3 Months (Full-time & Part-time)',
    fees: 'Rs. 25,000/=',
    numericFee: 25000,
    rating: 4.8,
    reviewsCount: 180,
    intake: 'Open for 2026 Batch',
    featured: false,
    thumbnail: '/gallery/seminars/Seminar4.webp',
    lecturers: [
      {
        name: 'S. Rohan Benjamin',
        role: 'IT Lecturer & Software Developer',
        image: '/rohan.webp',
        bio: 'S. Rohan Benjamin has over 2 years of experience in Web Development and MS Office, specializing in modern web technologies, software solutions, and professional document management.'
      }
    ],
    desc: 'Become highly proficient in Microsoft Office tools (Word, Excel, PowerPoint, Access) to streamline corporate administration and reporting.',
    fullOverview: 'The Diploma in Office Package is the ultimate corporate administrative credential. Students master advanced document design, spreadsheets with complex formulas and pivot tables, high-impact slide presentations, and relational databases.',
    syllabus: [
      'Advanced MS Word Formatting, Templates & Mail Merge',
      'MS Excel Data Analysis, Formulas & Pivot Tables',
      'High-Impact MS PowerPoint Slide Decks & Animations',
      'MS Access Relational Database Design & Queries',
      'Cloud Document Collaboration & Drive Management',
      'Corporate Office Administration Best Practices'
    ],
    entryRequirements: 'Basic computer familiarity.',
    awardingBody: 'CLIC Campus Academic Directorate',
    branch: 'Akkaripattu Main Campus'
  }
];

export const courseOffers = [
  {
    id: 'offer-01',
    courses: 'English + IT',
    offerTitle: 'Smart Combo — Best Saving',
    actualFee: 50000,
    discount: 22000,
    finalFee: 28000,
    validity: '2026 Intake — Limited Seats',
    isActive: true,
    highlightBadge: 'Most Popular',
    desc: 'Our biggest combo saving! Enroll in both the Diploma in English and Diploma in IT together and save Rs. 22,000 compared to enrolling individually. Perfect for students seeking both language and technology skills.'
  },
  {
    id: 'offer-02',
    courses: 'English + Graphic Designing',
    offerTitle: 'Creative Language Combo',
    actualFee: 50000,
    discount: 10000,
    finalFee: 40000,
    validity: '2026 Intake — Available Now',
    isActive: true,
    highlightBadge: 'Career Booster',
    desc: 'Combine professional English communication with creative design skills. Ideal for students entering the marketing, advertising, or media industries.'
  },
  {
    id: 'offer-03',
    courses: 'IT + Graphic Designing',
    offerTitle: 'Tech & Design Combo',
    actualFee: 50000,
    discount: 10000,
    finalFee: 40000,
    validity: '2026 Intake — Available Now',
    isActive: true,
    highlightBadge: 'In Demand',
    desc: 'Pair your IT knowledge with visual design expertise. A powerful combination for future UI/UX designers, digital artists, and multimedia professionals.'
  },
  {
    id: 'offer-04',
    courses: 'English + Web Designing',
    offerTitle: 'Digital Professional Combo',
    actualFee: 50000,
    discount: 10000,
    finalFee: 40000,
    validity: '2026 Intake — Available Now',
    isActive: true,
    highlightBadge: 'High Value',
    desc: 'Master professional English alongside modern web design techniques. Ideal for aspiring digital marketers, freelancers, and content creators.'
  },
  {
    id: 'offer-05',
    courses: 'IT + Web Designing',
    offerTitle: 'Full-Stack Tech Combo',
    actualFee: 50000,
    discount: 10000,
    finalFee: 40000,
    validity: '2026 Intake — Available Now',
    isActive: true,
    highlightBadge: 'Tech Essential',
    desc: 'Build a solid foundation in IT fundamentals and web design. This combo prepares students for careers in web development, IT support, and software administration.'
  },
  {
    id: 'offer-06',
    courses: 'Web Designing + Graphic Designing',
    offerTitle: 'Visual & Web Design Combo',
    actualFee: 50000,
    discount: 10000,
    finalFee: 40000,
    validity: '2026 Intake — Available Now',
    isActive: true,
    highlightBadge: 'Creative Pro',
    desc: 'The ultimate creative combo. Master both visual graphic design and website design to build a complete creative portfolio for the digital industry.'
  },
  {
    id: 'offer-07',
    courses: 'English + Sinhala',
    offerTitle: 'Bilingual Language Combo',
    actualFee: 45000,
    discount: 10000,
    finalFee: 35000,
    validity: '2026 Intake — Available Now',
    isActive: true,
    highlightBadge: 'Bilingual Pro',
    desc: 'Develop strong bilingual communication skills in both English and Sinhala. Perfect for government job applicants, teachers, and public-facing professionals.'
  },
  {
    id: 'offer-08',
    courses: 'IT + Sinhala',
    offerTitle: 'Tech & Language Combo',
    actualFee: 45000,
    discount: 10000,
    finalFee: 35000,
    validity: '2026 Intake — Available Now',
    isActive: true,
    highlightBadge: 'Public Sector',
    desc: 'Combine IT skills with Sinhala language proficiency — a highly relevant combo for students seeking government IT roles or local tech positions.'
  },
  {
    id: 'offer-09',
    courses: 'English + IT + Sinhala',
    offerTitle: 'Triple Combo — All-Rounder',
    actualFee: 70000,
    discount: 25000,
    finalFee: 45000,
    validity: '2026 Intake — Limited Seats',
    isActive: true,
    highlightBadge: 'Maximum Savings (Rs. 25,000 OFF)',
    desc: 'The all-rounder triple combo — English, IT, and Sinhala together at a massive discount. Save Rs. 25,000 and build a comprehensive skill set that opens doors across multiple career paths.'
  },
  {
    id: 'offer-10',
    courses: 'English + IT + Graphic Designing',
    offerTitle: 'Triple Power Combo',
    actualFee: 70000,
    discount: 20000,
    finalFee: 50000,
    validity: '2026 Intake — Available Now',
    isActive: true,
    highlightBadge: 'Triple Special',
    desc: 'English communication, IT foundations, and creative graphic design — three of the most in-demand skills bundled together at Rs. 20,000 savings.'
  },
  {
    id: 'offer-11',
    courses: 'English + IT + Web Designing',
    offerTitle: 'Digital Career Triple Combo',
    actualFee: 70000,
    discount: 20000,
    finalFee: 50000,
    validity: '2026 Intake — Available Now',
    isActive: true,
    highlightBadge: 'Digital Future',
    desc: 'Prepare for a complete digital career with English, IT, and Web Designing. This triple combo is ideal for aspiring web professionals and digital entrepreneurs.'
  },
  {
    id: 'offer-12',
    courses: 'Web Designing + Sinhala',
    offerTitle: 'Web & Language Combo',
    actualFee: 45000,
    discount: 5000,
    finalFee: 40000,
    validity: '2026 Intake — Available Now',
    isActive: true,
    highlightBadge: 'Specialized',
    desc: 'Pair web design skills with Sinhala language competency. Useful for students building local websites, community platforms, or seeking bilingual tech roles.'
  },
  {
    id: 'offer-13',
    courses: 'Graphic Designing + Sinhala',
    offerTitle: 'Creative & Language Combo',
    actualFee: 45000,
    discount: 5000,
    finalFee: 40000,
    validity: '2026 Intake — Available Now',
    isActive: true,
    highlightBadge: 'Regional Design',
    desc: 'Combine visual design creativity with Sinhala language skills. Ideal for students interested in creating Sinhala-language digital content, posters, and media.'
  }
];
