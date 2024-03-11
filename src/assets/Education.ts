interface eduType {
  courseName: string;
  school: string;
  specialization: string;
  year: string;
  active: boolean;
}

const EducationList: eduType[] = [
  {
    courseName: "Bachelor of Technology",
    school: "Siliguri Institute of Technology",
    specialization: "CSE",
    active: true,
    year: "2020-active",
  },
  {
    courseName: "Higher Secondary (12th)",
    school: "B. D. Memorial. International. School",
    specialization: "CS",
    active: false,
    year: "2020",
  },
  {
    courseName: "Secondary (10th)",
    school: "B. D. Memorial. International. School",
    specialization: "",
    active: false,
    year: "2018",
  },
];

export default EducationList;
