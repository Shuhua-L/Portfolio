export type Tech =
  | "JavaScript"
  | "TypeScript"
  | "Python"
  | "React"
  | "Django"
  | "Node"
  | "Jest"
  | "Socket.io"
  | "TailwindCSS"
  | "Postgres"
  | "MongoDB"
  | "Redis"
  | "Bootstrap"
  | "SCSS";

export type TProject = {
  title: string;
  links: {
    live?: string;
    code: string;
  };
  techStack: Tech[];
  screenshots: [
    {
      url: string;
      alt: string;
    }
  ];
  description: string;
};

const newProject: TProject = {
  title: "",
  links: {
    live: "",
    code: "",
  },
  techStack: ["React"],
  screenshots: [
    {
      url: "/images/fileName.png",
      alt: "",
    },
  ],
  description: `description`,
};

const AllstarsRecipes: TProject = {
  title: "Allstars Recipes",
  links: {
    live: "https://allstarsrecipes.up.railway.app/",
    code: "https://github.com/Shuhua-L/AllstarsRecipes-with-Django-React",
  },
  techStack: ["JavaScript", "React", "Python", "Django", "Bootstrap"],
  screenshots: [
    {
      url: "/images/HomePage1.png",
      alt: "Home page of the Allstars Recipe App",
    },
  ],
  description: `AllstarsRecipes is a recipe web app where users can browse and search for their
  favorite recipes, and create lists to keep track of them. This full-stack application is built using Django for the back-end and React for the front-end.`,
};

const FEC: TProject = {
  title: "The Mode Collection",
  links: {
    live: "https://the-mode-collection.up.railway.app/",
    code: "https://github.com/Shuhua-L/The-Mode-Collection-Client",
  },
  techStack: ["React", "JavaScript", "SCSS", "Node", "Jest"],
  screenshots: [
    {
      url: "/images/TheModeCollection.png",
      alt: "Ratings & Review section of The Mode Collection",
    },
  ],
  description: `The Mode Collection is a collaborative project focused on revamping
  an e-commerce product details website. With each team member taking ownership of
  their own component, this project provided valuable opportunities to expand our
  ∂expertise in building, maintaining, and optimizing a full React application.`,
};

const projects: TProject[] = [AllstarsRecipes, FEC];

export default projects;
