export type TExperience = {
  title: string;
  subtitle: string;
  time: string;
  description: string;
};

const hackReactor: TExperience = {
  title: "Hack Reactor",
  subtitle: "",
  time: "2023",
  description: `
  The intense 12-week program provided a comprehensive curriculum, offering hands-on
  experience working solo, in pairs, and as part of a team. The 11-hour daily
  schedule and 8-hour Saturday classes were challenging but well worth it.
  I gained invaluable expertise in various technologies such as TypeScript,
  React, TailwindCSS, Express, PostgreSQL, MongoDB, Jest, and AWS.`,
};

const CS50Web: TExperience = {
  title: "CS50's Web Programming with Python and JavaScript",
  subtitle: "",
  time: "2022 - 2023",
  description: `
    This online course is an empowering journey
    into the world of web app development. Dive deep into Python, JavaScript, and SQL,
    and explore frameworks like Django, React, and Bootstrap. With hands-on projects,
    I learned about database design, scalability, security, and user experience. `,
};

const BachelorDegree: TExperience = {
  title: "University of Massachusetts, Boston",
  subtitle: "B.S. in Mathematics",
  time: "2016 - 2020",
  description: `Relevant courses: Calculus I-III,
    Linear Algebra,
    Logic,
    Probability and Statistics,
    Discrete Mathematics,
    Algorithms.`,
};

const experiences: TExperience[] = [hackReactor, CS50Web, BachelorDegree];

export default experiences;
