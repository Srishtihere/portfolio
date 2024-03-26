interface comType {
  id: number;
  position: string;
  duties: string[];
  logo: string;
  Duration: string;
  communityName: string;
  communityRegion: string;
}

const CommunityList: comType[] = [
  {
    id: 1,
    position: "GDG Organizer",
    duties: [
      "Event Planning & Execution",
      "Community Building",
      "Community outreach",
      "Following Google Developer Groups program guideline",
    ],
    logo: "https://pbs.twimg.com/profile_images/1683834367968432128/xE3ReLB2_400x400.jpg",
    communityName: "Google Developer Groups",
    communityRegion: "Siliguri",
    Duration: "Nov 2022 - present",
  },
  {
    id: 2,
    position: "GDSC Lead",
    duties: [
      "Club Growth and Management",
      "Event Organization and Knowledge Sharing",
      "Community Building and Engagement",
      "Connecting with the GDSC Network",
      "empower student developers on campus, equip them with valuable skills, and build a strong network for future opportunities.",
    ],
    logo: "https://pbs.twimg.com/profile_images/1426182313981841409/_0qs8kCT_400x400.jpg",
    communityName: "Google Developer student Clubs",
    communityRegion: "Siliguri Institue of Technology",
    Duration: "Jul 2021 - Jul 2022",
  },
  {
    id: 3,
    position: "MLSA",
    duties: [
      "Promoting Microsoft Learn",
      "Building a Tech Community",
      "Representing Microsoft Technologies",
      "Participating in the Program",
      "Sharing Knowledge",
      "Mentorship",
      "Organizing Events",
    ],
    logo: "https://pbs.twimg.com/profile_images/1378221311076409346/2evbtaoV_400x400.png",
    communityName: "Microsoft Learn Student Ambassador",
    communityRegion: "Global",
    Duration: "Sept 2023 - Active",
  },
  {
    id: 4,
    position: "Marketing Team Lead",
    duties: [
      "Crafting a Compelling Brand Story",
      "Building Awareness,Content Creation,Building Hype",
      "Developing Target Audience Profiles",
      "Partnering with Universities and Developer Groups",
      "Managing Social Media Presence",
      "Building Online Buzz,Community Building",
      "Creating a Communication Strategy",
    ],
    logo: "https://pbs.twimg.com/profile_images/1718503937249087488/CuCerldf_400x400.jpg",
    communityName: "Hack4Bengal",
    communityRegion: "West Bengal",
    Duration: "Nov 2022 - Aug 2023",
  },
  {
    id: 5,
    position: "Content Writer",
    duties: [
      "Blog Posts and Articles",
      "Social Media Content",
      "Website Content",
    ],
    logo: "https://pbs.twimg.com/profile_images/1257552200684969989/kga6KHRz_400x400.jpg",
    communityName: "GIRLSCRIPT.TECH",
    communityRegion: "Siliguri",
    Duration: "Jul 2021 - Nov 2022",
  },
  {
    id: 6,
    position: "Community Development Volunteer",
    duties: [
      "Social Media Follow-up",
      "On-groud management",
      "Website Content",
    ],
    logo: "https://pbs.twimg.com/profile_images/1769094462226239488/lAqfhb-__400x400.jpg",
    communityName: "Google Developer Groups",
    communityRegion: "Cloud . Kolkata",
    Duration: "GCCD'21",
  },
  {
    id: 7,
    position: "Community Development Volunteer",
    duties: [
      "Social Media Follow-up",
      "On-groud management",
      "Website Content",
    ],
    logo: "https://pbs.twimg.com/profile_images/1581297896590540805/luwHNEji_400x400.jpg",
    communityName: "Google Developer Groups",
    communityRegion: "Kolkata",
    Duration: "Devfest'21",
  },
];

export default CommunityList;
