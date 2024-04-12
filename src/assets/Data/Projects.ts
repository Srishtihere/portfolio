interface ProjectType {
  id: number;
  name: string;
  description: string;
  imageURL: string;
  github: string;
  Website: string;
}

const ProjectData: ProjectType[] = [
  {
    id: 1,
    name: "JustJoking",
    description: "JustJoking: Your Daily Dose of Digital Chuckles 🤣",
    imageURL:
      "https://just-joking.netlify.app/static/media/logo.3b0d60e81701d62c90a0.png",
    github: "https://github.com/Srishtihere/JustJoking",
    Website: "https://just-joking.netlify.app/",
  },
  {
    id: 2,
    name: "AeroInsightHub",
    description:
      "An aviation information application with user-friendly input fields, providing detailed data on aircraft, airlines, and airports.",
    imageURL:
      "https://github.com/Srishtihere/AeroInsightHub/raw/Main/src/Assets/logo.png",
    github: "https://github.com/Srishtihere/AeroInsightHub",
    Website: "https://aero-insight-hub.netlify.app/",
  },
  {
    id: 9,
    name: "Gita for Life",
    description:
      "Welcome to Gita-for-Life, your ultimate online resource for exploring the profound teachings of the Bhagavad Gita, along with captivating narratives from the Mahabharata and Ramayana epics. Immerse yourself in the timeless wisdom of ancient scriptures, as we delve into the essence of life, morality, and spirituality.",
    imageURL:
      "https://github.com/Srishtihere/Gita-for-Life/raw/main/src/assets/gfl-logo.png",
    github: "https://github.com/Srishtihere/Gita-for-Life",
    Website: "https://gita-for-life.netlify.app/",
  },
  {
    id: 3,
    name: "E-Support",
    description:
      "E-Support, powered by the callChimp Typescript SDK, is a customer care application tailored for small-scale industries. It streamlines interactions, providing efficient query handling, real-time monitoring, and personalized support for enhanced customer satisfaction.",
    imageURL:
      "https://github.com/Srishtihere/EcomSupport/raw/master/src/assets/logo.png",
    github: "https://github.com/Srishtihere/EcomSupport",
    Website: "https://ecomsupport.netlify.app/",
  },
  {
    id: 4,
    name: "PayloadV2",
    description: "This is a dummy dashboard UI for a store named Nishyan.",
    imageURL:
      "https://github.com/Srishtihere/PayloadV2/raw/master/src/assets/Navlogo.jpg",
    github: "https://github.com/Srishtihere/PayloadV2/tree/master",
    Website: "https://master--nishyan-dashboard-dummy.netlify.app/",
  },
  {
    id: 5,
    name: "Appointment Management",
    description:
      "AppointmentsApp: Your Appointment Management Dashboard. Data is directly fetched from Firebase. All CRUD(Create, Read, Update and Delete) can be performed. Data can be sorted in ascending order for viewing. It is a mobile first view (the dashboard is horizontally scrollable ",
    imageURL:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a3ec529632909.55fc107b84b8c.png",
    github:
      "https://github.com/Srishtihere/screening-frontend/tree/srishti-assignment/appointments-app",
    Website: "https://appointment-management-site.netlify.app/",
  },
  {
    id: 6,
    name: "SIT Hotel Management Application",
    description:
      "Designed and Developed the check-in page,resulting in smoother guest registration and  reduced wait times. Designed and Developed the F&B page,facilitating seamless online ordering and enhancing guest satisfaction using React.js.Improved the homepage experience by incorporating intuitive navigation and visually appealing elements to improve user engagement.",
    imageURL:
      "https://sithm.netlify.app/static/media/homeimg.97172cfba5638d31c588.png",
    github: "https://github.com/SIT-HOTEL-MANAGEMENT-PROJECT/Frontend",
    Website: "https://sithm.netlify.app/Home",
  },
  {
    id: 7,
    name: "To-do App",
    description:
      "This is a To do application where you can add your day to day updates. This application can perform all CRUD operations",
    imageURL:
      "https://www.sketchappsources.com/resources/source-image/sketch-3-todo-list-app-icon-template.png",
    Website: "https://main--todo-sample-application.netlify.app/",
    github: "https://github.com/Srishtihere/To-do-app/tree/main/to-do",
  },
  {
    id: 8,
    name: "Github Repo Display",
    description: "This is a Repository List Display Application",
    imageURL:
      "https://i.pinimg.com/564x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg",
    Website: "https://main--repo-display.netlify.app/",
    github:
      "https://github.com/Srishtihere/Githubh_repo_display/tree/main/github-display-repo",
  },
];

export default ProjectData;
