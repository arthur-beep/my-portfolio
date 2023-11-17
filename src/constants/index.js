import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    shopify,
    jobit,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Graphics Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "IT technical support",
      company_name: "Jomo Kenyatta University of Agriculture and Technology",
      icon: redux,
      iconBg: "#383E56",
      date: "April 2020 - Sept 2021",
      points: [
        "Keep computer systems running smoothly and ensure users get the maximum benefit from them.",
        "Monitor and maintain computer systems and networks.",
        "Troubleshoot system and network problems, diagnosing and solving hardware or software faults.",
        "Set up new users' accounts and profiles and deal with password issues.",
        "Install and configure computer hardware operating systems and applications.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Power Learn Projects online Internship",
      icon: git,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - June 2022",
      points: [
        "Gain exposure to React (JavaScript Library), Next.js (React Framework) and Tailwind (CSS Utility Framework), .",
        "Learn how to triage and troubleshoot production support issues.",
        "Contributed to innovation problem-solving approaches for rapid experimentation and tight feedback loops.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
    {
      title: "ICT Trainer",
      company_name: "RIAS Technical College",
      icon: redux,
      iconBg: "#383E56",
      date: "Jan 2022 - Nov 2023",
      points: [
        "Teaching programing languages (C, C++,PHP,JavaScript, HTML/CSS)..",
        "Teaching Mobile Development (React Nativeand android).",
        "Teaching web development (React js, andWordPress).",
        "Training A+ (hardware and software), repairand maintenance..",
        "Users administration and support.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Ebrahim Muli",
      designation: "College Principal",
      company: "RIAS",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Patrick",
      designation: "COO",
      company: "DEF Corp",
      image: "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Vivian",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  
  const projects = [
    {
      name: "Job Search",
      description:
        "Paysit is a React Native   mobile application for  JOB search, compatible. In both IOS and Android. ",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://cdn.dribbble.com/users/1314493/screenshots/11914210/media/0dc157ea25078da5863281974d5d6768.jpg',
      source_code_link: "https://github.com/arthur-beep/REACT-NATIVE-jobApp",
    },
    {
      name: "Duka",
      description:
        "An ecommerce app with an intuitive and highly functional build can help online stores boost their sales.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Book store",
      description:
        "The Bookstore Management program is a user-friendly system designed to efficiently manage customer information.",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://www.freecodecamp.org/news/content/images/size/w2000/2023/08/merncrash.png',
      source_code_link: "https://github.com/arthur-beep/-MERN-Bookstore-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };