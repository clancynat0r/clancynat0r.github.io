// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/tic-tac-toe.png";
import Logo2 from "./images/typetest.png";
import Logo3 from "./images/photosynthesis.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };


export const githubUsername = "clancynat0r";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="simple-icons:linkedin" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Hello, I'm Clancy, an aspiring software engineer who began coding at 13, teaching myself HTML and Javascript at my school library. My passion lies in creating user-friendly, shareable, and adaptable technology. I've continued my programming journey into my professional career, and outside of work, I enjoy working on cars, troubleshooting broken devices, hiking with my dogs, and watching Formula 1 races on Sundays. Thanks for visiting my portfolio!";

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
    skill: <Icon icon="ph:graph-light" className="display-4" />,
    name: "Object-Oriented Programming",
  },
  {
    id: 8,
    skill: <Icon icon="file-icons:php" className="display-4" />,
    name: "PHP",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 11,
    skill: <Icon icon="mdi:powershell" className="display-4" />,
    name: "PowerShell",
  },
  {
    id: 12,
    skill: <Icon icon="mdi:sql-query" className="display-4" />,
    name: "SQL",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://docs.google.com/document/d/e/2PACX-1vQK0WIMEZbTBbPjNBASVEAqiKN8jS1Z9GLNoXi2CmS4_wSSV8kGbL9F9ROiUYiRLZsF7MBM7MY1In0g/pub";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["Tic-Tac-Toe", "TypeTest", "Photo-Synthesis"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "Tic-Tac-Toe",
    image: Logo,
  },
  {
    name: "TypeTest",
    image: Logo2,
  },
  {
    name: "Photo-Synthesis",
    image: Logo3
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xjvqaqna";
