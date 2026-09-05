export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  details?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  duration: string;
  type: 'Work Experience' | 'Internship';
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  badge?: string;
  category: 'AI & ML' | 'Cloud & IoT' | 'Mobile' | 'Full-Stack Web';
  shortDescription: string;
  objective: string;
  implementation: string;
  technologies: string[];
  keyFeatures: string[];
  challenges?: string;
  results?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  type: 'Certification' | 'Achievement' | 'Activity';
  date?: string;
  description?: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: 'MANISH PATIL',
    title: 'Full-Stack Developer & AI/ML Specialist',
    tagline: 'Building intelligent digital experiences with code, creativity & technology.',
    summary:
      'Artificial Intelligence & Machine Learning student at Sanjivani University with hands-on expertise in Cloud Computing (AWS, Linux), Machine Learning models, and Full-Stack Web Development. Regional Hackathon Winner for architecting AdaptAI, an adaptive AI system.',
    email: 'mp8449729@gmail.com',
    gmailComposeUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=mp8449729@gmail.com',
    phone: '8329790084',
    location: 'Chalisgaon, Maharashtra, India',
    dateOfBirth: 'August 23, 2006',
    profileImage: '/manish-patil.jpg',
    languages: ['English', 'Hindi', 'Marathi'],
    strengths: ['Problem-Solving', 'Team Collaboration', 'Adaptability'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/manish-patil-4a440029a/',
      github: 'https://github.com/Manish-Patil33',
      hackerrank: 'https://www.hackerrank.com/profile/mp8449729',
    },
  },

  skills: [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java' },
        { name: 'Python' },
        { name: 'C' },
        { name: 'C++' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'JavaScript' },
        { name: 'HTML5' },
        { name: 'CSS3 / Tailwind CSS' },
        { name: 'REST APIs' },
      ],
    },
    {
      title: 'Tools & Cloud Platforms',
      skills: [
        { name: 'AWS (Amazon Web Services)' },
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Linux OS' },
        { name: 'PowerBI' },
        { name: 'IBM SPSS' },
        { name: 'Jenkins' },
        { name: 'VS Code' },
      ],
    },
    {
      title: 'Databases & DBMS',
      skills: [
        { name: 'SQL' },
        { name: 'DBMS Principles' },
        { name: 'MongoDB' },
      ],
    },
    {
      title: 'AI, ML & Domain Expertise',
      skills: [
        { name: 'Machine Learning' },
        { name: 'Computer Vision' },
        { name: 'Facial Recognition' },
        { name: 'IoT Systems' },
        { name: 'Android SDK (MAD)' },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: 'adaptai',
      title: 'AdaptAI',
      badge: 'Hackathon Winning Project',
      category: 'AI & ML',
      shortDescription:
        'An intelligent, adaptive AI application that dynamically processes data and provides context-aware solutions.',
      objective:
        'To develop an intelligent, adaptive AI application that dynamically processes data and provides context-aware solutions.',
      implementation:
        'Architected the backend infrastructure and seamlessly integrated artificial intelligence algorithms to deliver dynamic, high-performance capabilities during a fast-paced competitive hackathon.',
      technologies: ['Python', 'Machine Learning', 'Web Technologies', 'Backend Infrastructure'],
      keyFeatures: [
        'Context-aware dynamic data processing engine',
        'High-performance backend API integration',
        'Adaptive machine learning pipeline',
        'Award-winning architecture built in competitive hackathon environment',
      ],
      challenges:
        'Integrating AI algorithms into a real-time responsive backend within tight hackathon time constraints.',
      results:
        'Secured 1st Place / Winner in regional hackathon competition.',
      githubUrl: 'https://github.com/Manish-Patil33/-AdaptAI--AI-for-Detecting-Student-Learning',
      liveUrl: 'https://aadapt-ai.streamlit.app/',
    },
    {
      id: 'smart-door-lock',
      title: 'Smart Door Lock System Using IoT',
      category: 'Cloud & IoT',
      shortDescription:
        'AI-driven smart door lock system leveraging computer vision and IoT technologies for automated home security.',
      objective:
        'To design and deploy an AI-driven smart door lock system leveraging computer vision and IoT technologies to enhance home security.',
      implementation:
        'Built a facial recognition pipeline to authenticate authorized users, instantly detect intruders, and trigger real-time automated IoT alerts to prevent unauthorized access.',
      technologies: ['IoT', 'Computer Vision', 'Facial Recognition', 'Artificial Intelligence (AI)', 'Python'],
      keyFeatures: [
        'Real-time facial recognition authentication pipeline',
        'Instant intruder detection mechanism',
        'Automated IoT security alert triggers',
        'Encrypted access control protocol',
      ],
      challenges:
        'Achieving high accuracy in facial authentication under varying lighting conditions.',
      results:
        'Successfully prevented unauthorized access with minimal latency detection.',
      githubUrl: 'https://github.com/Manish-Patil33',
    },
    {
      id: 'qr-code-generator',
      title: 'QR Code Generator Android App',
      category: 'Mobile',
      shortDescription:
        'Native, memory-efficient Android application for dynamic, on-demand QR code generation with state stability.',
      objective:
        'To build a native, memory-efficient Android application for dynamic, on-demand QR code generation.',
      implementation:
        'Implemented complete Android app lifecycle management for optimal device stability across state changes, and integrated a responsive user interface to capture inputs and render accurate QR codes.',
      technologies: ['Java', 'Android SDK (MAD)', 'Mobile App Development', 'XML UI'],
      keyFeatures: [
        'Instant dynamic QR code generation engine',
        'Robust Android lifecycle state handling',
        'Memory-efficient rendering architecture',
        'Responsive user input handling',
      ],
      challenges:
        'Optimizing canvas rendering speed and preventing memory leaks during rapid QR code generations.',
      results:
        'Smooth 60fps rendering with zero memory leaks during lifecycle orientation shifts.',
      githubUrl: 'https://github.com/Manish-Patil33',
    },
    {
      id: 'blogging-website',
      title: 'Full-Stack Blogging Website',
      category: 'Full-Stack Web',
      shortDescription:
        'Dynamic web-based blogging platform supporting end-to-end CRUD operations for seamless content management.',
      objective:
        'To engineer a dynamic, web-based blogging platform supporting end-to-end CRUD operations for seamless user content management.',
      implementation:
        'Developed robust backend logic with secure database connectivity for fast data retrieval, applying core DBMS principles to structure data and optimize platform architecture.',
      technologies: ['Java', 'Python', 'SQL', 'DBMS', 'Full-Stack Web Development', 'HTML/CSS/JS'],
      keyFeatures: [
        'Complete CRUD article management system',
        'Optimized DBMS schema for rapid query retrieval',
        'Secure user data handling and session logic',
        'Clean responsive user interface',
      ],
      challenges:
        'Structuring relational database tables to prevent redundant data and maximize query speeds.',
      results:
        'Achieved sub-50ms query response time across structured content routes.',
      githubUrl: 'https://github.com/Manish-Patil33',
    },
  ] as ProjectItem[],

  experiences: [
    {
      id: 'techgnowroth-cloud',
      role: 'Cloud Computing Trainee',
      organization: 'Techgnowroth Software Solution',
      location: 'Pune, India',
      duration: 'July 2024 - August 2024',
      type: 'Work Experience',
      responsibilities: [
        'Worked on AWS cloud services and Linux operating system fundamentals, including Linux commands, server configuration, and system monitoring tasks.',
        'Assisted in application deployment and maintenance on cloud platforms while performing basic server-side management and troubleshooting activities.',
      ],
      technologies: ['AWS', 'Linux OS', 'Server Configuration', 'System Monitoring', 'Cloud Deployment'],
    },
    {
      id: 'syntexhub-ml',
      role: 'Machine Learning Intern',
      organization: 'Syntexhub (Remote)',
      location: 'Remote',
      duration: 'Duration: 4 Weeks',
      type: 'Internship',
      responsibilities: [
        'Executed weekly structured machine learning tasks, focusing on model development and data processing.',
        'Successfully delivered assigned technical modules and consistently met project milestones within a remote, fast-paced environment.',
      ],
      technologies: ['Python', 'Machine Learning', 'Data Processing', 'Model Development'],
    },
  ] as ExperienceItem[],

  education: [
    {
      id: 'btech-ai-ml',
      degree: 'B. Tech in Artificial Intelligence & Machine Learning',
      field: 'Artificial Intelligence & Machine Learning',
      institution: 'Sanjivani University',
      location: 'Kopargaon, India',
      duration: '2025 - 2028',
      details: 'Focusing on advanced machine learning algorithms, deep learning, AI architecture, and full-stack integration.',
    },
    {
      id: 'polytechnic-it',
      degree: 'Polytechnic Diploma in Information Technology',
      field: 'Information Technology',
      institution: 'Amrutvahini Polytechnic',
      location: 'Sangamner, India',
      duration: '2023 - 2025',
      details: 'Comprehensive study of computer networks, DBMS, software engineering, Java, and Linux administration.',
    },
    {
      id: 'ssc',
      degree: 'Secondary School Certificate (10th Grade)',
      field: 'Secondary Education',
      institution: 'Dr. Ram Manohar Lohiya M. V. Bambrud',
      location: 'Pachora, India',
      duration: '2022',
      details: 'Graduated with strong foundations in mathematics and science.',
    },
  ] as EducationItem[],

  certifications: [
    {
      id: 'nptel-ebusiness',
      title: 'E-Business Certification',
      issuer: 'NPTEL',
      type: 'Certification',
      description: 'Covered online business infrastructure, digital transformation, e-commerce architectures, and security.',
      link: 'https://drive.google.com/file/d/13-w1KXGoYA4Og8bGiRVTxAKuqV9CnOKr/view?usp=sharing',
    },
    {
      id: 'ibm-devops',
      title: 'DevOps Agile & Design Thinking',
      issuer: 'IBM',
      type: 'Certification',
      description: 'Mastered Agile development sprints, CI/CD methodology, design thinking principles, and team workflows.',
      link: 'https://drive.google.com/file/d/1c5Ke0HIzfxnIDqeeCic7MgKTc0LiNEmM/view?usp=drive_link',
    },
    {
      id: 'ibm-spss',
      title: 'IBM SPSS Modeling',
      issuer: 'IBM',
      type: 'Certification',
      description: 'Specialized in predictive analytics, statistical data modeling, and data visualization using SPSS.',
      link: 'https://drive.google.com/file/d/1ypHJKsAgkKs5r5kqLPqBb0u9IsZGu7sw/view?usp=drive_link',
    },
    {
      id: 'swayam-python',
      title: 'Python Certification',
      issuer: 'Swayam Plus',
      type: 'Certification',
      description: 'Advanced Python programming, data structures, object-oriented concepts, and algorithmic solutions.',
      link: 'https://drive.google.com/file/d/1SA0JOOWSF4Rz_cWB3tmpzXqLstH5MSsr/view?usp=drive_link',
    },
    {
      id: 'techgnowroth-cloud-cert',
      title: 'Cloud Computing Certification',
      issuer: 'Techgnowroth Software Solution, Pune',
      type: 'Certification',
      description: 'Hands-on practical training in AWS cloud services, Linux administration, and cloud deployment.',
      link: 'https://drive.google.com/file/d/14i6_2PBb8-HrqUA-aGOJmhuBa_gOTDBF/view?usp=drivesdk',
    },
  ] as CertificationItem[],

  achievements: [
    {
      id: 'hackathon-winner',
      title: 'Winner - Regional Hackathon',
      issuer: 'Regional Hackathon Organizing Committee',
      type: 'Achievement',
      description: 'Winner of regional Hackathon for successfully building and deploying the "AdaptAI" adaptive AI application.',
    },
    {
      id: 'dipex-volunteer',
      title: 'Dipex Volunteer 2025-26',
      issuer: 'Dipex State Level Exhibition',
      type: 'Activity',
      description: 'Active technical volunteer assisting state-level engineering project exhibition and competition.',
    },
  ] as CertificationItem[],
};
