interface Experience {
  id: number;
  Company_name: string;
  Role: string;
  description: string[];
  date: string;
  skills: string[];
}

const ExperienceData: Experience[] = [
  {
    id: 1,
    Company_name: "Blackspektro",
    Role: "Software Engineer",
    description: [
      "At Blackspektro, I work on cutting-edge engineering projects that involve a mix of innovation and problem-solving. My day-to-day tasks include designing, coding, and testing software for solutions in fields like industrial IoT, AI applications, and smart product integration. ",
      "I collaborate closely with a team to brainstorm and implement efficient, tech-driven strategies. Additionally, I stay up-to-date with new technologies, continuously improving and optimizing systems to deliver high-quality results that align with our clients' needs in sectors like agritech, robotics, and beyond.",
    ],
    date: "07/2024 – present",
    skills: [
      "React",
      "NextJS",
      "Azure",
      "Router",
      "Axios",
      "API Integration",
      "Tailwind",
    ],
  },
  {
    id: 2,
    Company_name: "Digital Product School",
    Role: "Software Engineer Intern",
    description: [
      "Developing and maintaining the front end using ReactJS, creating a modern and user-friendly  interface that improved user engagement and accessibility.",
      "Collaborating with a cross-functional team to integrate the Django framework for the back-end, enabling seamless data management, user  authentication, and content management system (CMS) functionality.",
    ],
    date: "09/2023 – 12/2023",
    skills: ["React", "Bootstrap", "AWS", "Router", "Axios", "API Integration"],
  },
  {
    id: 2,
    Company_name: "Cloud Native Computing Foundation (CNCF)",
    Role: "cncf Zero-to-merge mentee - Apprenticeship",
    description: [
      "Trained and learned how to contribute in open-source projects under CNCF.",
      "Contributed in documentation of several oraganizations.",
      "Used Github as a medium to contribute.",
    ],
    date: "Aug 2023 - Sep 2023",
    skills: ["Documentation", "MarkDown", "Open-Source", "Git", "Command Line"],
  },
];

export default ExperienceData;
