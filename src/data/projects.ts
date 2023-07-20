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
  | "SCSS"
  | "PostgreSQL"
  | "Loader.io"
  | "NGINX"
  | "AWS"
  | "Express";

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
  favorite recipes, and create lists to keep track of them.`,
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
  description: `The Mode Collection is a single page web application demonstrating a user
  interface for an e-commerce website.`,
};

const SDC: TProject = {
  title: "Project Atelier",
  links: {
    code: "https://github.com/labrador-retriever-SDC/atelier-reviews-backend",
  },
  techStack: ["Node", "PostgreSQL", "Loader.io", "NGINX", "AWS"],
  screenshots: [
    {
      url: "/images/reviews-schema.png",
      alt: "Product Reviews Schema",
    },
  ],
  description: `A backend system that can support the full data set for the project
  and can scale to meet the demands of production traffic.`,
};

const BO: TProject = {
  title: "Spy Another Day",
  links: {
    live: "",
    code: "https://github.com/Spy-Another-Day/Elder-Wand",
  },
  techStack: ["TypeScript", "React", "Express", "MongoDB", "Redis", "Socket.io"],
  screenshots: [
    {
      url: "/images/spy-another-day.png",
      alt: "Apy Another Day",
    },
  ],
  description: `Spy Another Day is an interactive online multiplayer game where players
   work together in teams to uncover hidden cards based on clues provided by their
   designated Spy Master. `,
};

const projects: TProject[] = [AllstarsRecipes, FEC, SDC, BO];

export default projects;
