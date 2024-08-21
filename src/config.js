// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
 import newLogo from "./images/moon.png"

// Hero Images (add your images to the /images directory with the same names)


import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo1 from "./images/Logo1.jpg";
import Logo2 from "./images/Logo2.jpg";
import Logo3 from "./images/Logo3.jpg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "clancynat0r";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Hello, I'm Clancy, an aspiring Product Manager with a strong technical foundation, having started coding at the age of 13 by self-teaching HTML and JavaScript. This early start has shaped my ability to understand and translate complex technical concepts into user-centric, adaptable product solutions. My journey in product management is fueled by a passion for guiding the development of technology products from ideation through to market launch. With a solid background in programming, I offer a technical perspective that enhances my ability to manage product lifecycles effectively, ensuring that projects align with user needs and market trends. Outside of my professional life, I engage in activities that sharpen my problem-solving and strategic thinking skills, such as working on cars, troubleshooting devices, and enjoying Formula 1 races on Sundays. I'm also an avid hiker, frequently exploring trails with my dogs. Thank you for visiting my portfolio! I look forward to discussing how my technical expertise and product management skills can contribute to your projects and goals.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://docs.google.com/document/d/1tK_MQhlyFYl7_ZsnK2way8sLkPAtyVxDV8WO5ezN3dc/pub";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["Photo-Synthesis", "Tic-Tac-Toe", "TypeTest"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "Photo-Synthesis",
    image: Logo1,
  },
  {
    name: "Tic-Tac-Toe",
    image: Logo2,
  },
  {
    name: "TypeTest",
    image: Logo3,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xjvqaqna";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
