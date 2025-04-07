export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const milestones = [
  {
    id: 1,
    title: "Dean's Top 10% Students",
    description: "Recognized for good academic performance and extra-curricular activities at University. This recognition is awarded to students who consistently demonstrate excellence in their academic pursuits while actively participating in university activities."
  },
  {
    id: 2,
    title: "Top 10 in Cyber Security CTF",
    description: "Ranked in the Top 10 in the Cyber Security Event (CTF) organized by Technocean."
  },
  {
    id: 3,
    title: "Community Development Project",
    description: "Actively supported underprivileged children by assisting in education programs, managing resources, and driving awareness campaigns."
  },
  {
    id: 4,
    title: "Excellence in 10th Board Exams",
    description: "Award for Excellence in 10th Board Exams: Recognized by Hindustan Newspaper for outstanding academic performance in the 10th board exams"
  }
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Ayush Raj was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Ayush Raj\'s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He\'s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can\'t say enough good things about Ayush Raj. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Ayush Raj was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Med Connect – Online Doctor Consultation App',
    desc: 'Med Connect is a full-featured online doctor consultation platform designed to streamline healthcare access. It enables patients to manage records, schedule appointments, and connect with doctors, while providing admins and doctors with powerful tools for managing operations and medical histories.',
    subdesc: 'Built using React, Node.js, Express, and MongoDB, Med Connect integrates JWT authentication, Bcrypt password hashing, and Cloudinary for image storage to ensure a secure, role-based system for patients, doctors, and administrators.',
    href: 'https://github.com/ayushraj1223850/Med_Connect',
    texture: '/textures/project/medconnect.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'Express.js',
        path: '/assets/express.png',
      },
    ],
  },
  {
    title: 'Adaptive Traffic Management System – AI-Powered Traffic Optimization',
    desc: 'An intelligent traffic signal system that uses real-time vehicle detection and machine learning to optimize signal timings. By dynamically adjusting signals based on traffic density and flow, it aims to reduce congestion, improve travel time, and enhance intersection safety.',
    subdesc: 'Built with Python, YOLO, and OpenCV, the system leverages computer vision for vehicle detection and reinforcement learning for adaptive signal control—achieving over 10% average improvement in travel time, with potential gains of 50% in outdated systems.',
    href: 'https://github.com/ayushraj1223850',
    texture: '/textures/project/traffic.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'OpenCV',
        path: '/assets/opencv.png',
      },
      {
        id: 3,
        name: 'TensorFlow',
        path: '/assets/tensorflow.png',
      }
    ],
  },
  {
    title: 'CI/CD Pipeline – Todo App Deployment Automation',
    desc: 'Implemented a robust CI/CD pipeline for a Todo App using Jenkins, Docker, and AWS to automate the build, test, and deployment process. The pipeline streamlines development by ensuring rapid and reliable application delivery.',
    subdesc: 'Jenkins automates code integration and testing, Docker ensures consistent containerized environments, and AWS EC2 serves as the deployment platform for scalable hosting.',
    href: 'https://github.com/ayushraj1223850',
    texture: '/textures/project/cicd.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Jenkins',
        path: '/assets/jenkins.png',
      },
      {
        id: 2,
        name: 'Docker',
        path: '/assets/docker.png',
      },
      {
        id: 3,
        name: 'AWS',
        path: '/assets/aws.png',
      }
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const education = [
  {
    id: 1,
    name: 'Lovely Professional University',
    pos: 'Bachelor of Technology in Computer Science & Engineering',
    duration: 'November 2022 – July 2026',
    title: "CGPA – 7.94 | Phagwara, Punjab",
    icon: '/assets/lpu.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Bradford International School',
    pos: 'XII CBSE',
    duration: 'April 2020 – May 2021',
    title: "Percentage – 82.8% | Patna, Bihar",
    icon: '/assets/bradford.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Oasis Residential Public School',
    pos: 'X CBSE',
    duration: 'April 2018 – May 2019',
    title: "Percentage – 93.2% | Hajipur, Bihar",
    icon: '/assets/oasis.png',
    animation: 'salute',
  },
];
