interface BlogType {
  id: number;
  name: string;
  description: string;
  tags: string[];
  sourceLink: string;
}

const BlogsList: BlogType[] = [
  {
    id: 1,
    name: "All about useReducer() in TypesScript",
    description:
      "Hey 👋 if you are a Frontend Developer or using React for your project and are confused because you cannot manage complex states then this blog is just for you.",
    tags: ["React", "React Hooks", "Calculator", "UseReducer"],
    sourceLink:
      "https://medium.com/@srishtimajumder2002/all-about-usereducer-in-typesscript-e1851d98c93d",
  },
  {
    id: 2,
    name: "Web Hosting Solutions on Google Cloud",
    description:
      "Web hosting can be a very confusing and hectic experience for many developers, while deploying a web app we often come across several challenges then this blog is just for you.",
    tags: ["GCP", "Firebase", "Google", "CloudRun", "LAMP"],
    sourceLink:
      "https://medium.com/@srishtimajumder2002/web-hosting-solutions-on-google-cloud-8f95e1ce0040",
  },
  {
    id: 3,
    name: "Everything you need to know about HTML",
    description:
      "If you starting off with your Web Developement. Then while surfing the internet you must have come across HTML. Do you know why HTML should be learned at the beginning of this journey? The answer to this question is here",
    tags: [
      "Coding",
      "Web Development",
      "HTML",
      "Html5 Development",
      "Programming",
    ],
    sourceLink:
      "https://medium.com/@srishtimajumder2002/everything-you-need-to-know-about-html-442539dd9f0",
  },
];

export default BlogsList;
