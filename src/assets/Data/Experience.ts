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
