import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "data-sharing",
    category: "Productivity",
    title: "Data Sharing Ecosystem",
    src: "/projects/data_sharing.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.shadcn],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.sockerio, PROJECT_SKILLS.firebase],
    },
    github: "https://github.com/yashchoudhary-fullstack/data-sharing-ai",
    content: (
      <div>
        <SlideShow images={["/projects/data_sharing.png", "/projects/data_sharing_2.png"]} />
        <TypographyP className="font-mono">
          A seamless Android + Windows ecosystem app with real-time file sharing, clipboard synchronization, and cross-device connectivity.
        </TypographyP>
        <ProjectsLinks repo="https://github.com/yashchoudhary-fullstack/data-sharing-ai" />
        <TypographyH3>File Sync</TypographyH3>
        <TypographyP>Transfer files instantly across local devices without any cloud limits or internet dependencies. Enjoy high-speed data sharing.</TypographyP>
        <TypographyH3>Clipboard Sync</TypographyH3>
        <TypographyP>Copy text on your smartphone and instantly paste it on your PC, streamlining your cross-device workflow and saving valuable time.</TypographyP>
        <TypographyH3>Auto Discovery</TypographyH3>
        <TypographyP>Devices automatically find each other on the same network using zero-configuration networking, removing the hassle of manual pairing.</TypographyP>
      </div>
    ),
  },
  {
    id: "oneplus-showcase",
    category: "E-Commerce",
    title: "OnePlus 11R Showcase",
    src: "/projects/selling_real.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    github: "https://github.com/yashchoudhary-fullstack/Selling",
    live: "https://oneplus-11r-showcase-yash.web.app/",
    content: (
      <div>
        <SlideShow images={["/projects/selling_real.png", "/projects/selling_real_2.png"]} />
        <TypographyP className="font-mono">
          A premium product showcase website for the OnePlus 11R, featuring stunning visuals, animations, and detailed specifications.
        </TypographyP>
        <ProjectsLinks live="https://oneplus-11r-showcase-yash.web.app/" repo="https://github.com/yashchoudhary-fullstack/Selling" />
        <TypographyH3>Product Showcase</TypographyH3>
        <TypographyP>High-quality image galleries and 3D visual effects that highlight the premium design of the OnePlus 11R.</TypographyP>
        <TypographyH3>Specifications</TypographyH3>
        <TypographyP>Detailed breakdown of hardware specs, camera capabilities, and battery performance presented in a clean UI.</TypographyP>
        <TypographyH3>Responsive Layout</TypographyH3>
        <TypographyP>A fully responsive e-commerce landing page optimized for both mobile and desktop viewing experiences.</TypographyP>
      </div>
    ),
  },
  {
    id: "cheat-doc",
    category: "Education",
    title: "Academic Document Viewer",
    src: "/projects/cheat_real.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.firebase],
    },
    github: "https://github.com/yashchoudhary-fullstack/Cheat",
    live: "https://cheat-viewer-yash.web.app/",
    content: (
      <div>
        <SlideShow images={["/projects/cheat_real.png", "/projects/cheat_real_2.png"]} />
        <TypographyP className="font-mono">
          An academic study material viewer to securely extract and organize study resources, featuring AI and PHP curriculum PDFs.
        </TypographyP>
        <ProjectsLinks live="https://cheat-viewer-yash.web.app/" repo="https://github.com/yashchoudhary-fullstack/Cheat" />
        <TypographyH3>Quick Access</TypographyH3>
        <TypographyP>Instantly load study materials, reference guides, and notes in a clean, distraction-free interface optimized for reading.</TypographyP>
        <TypographyH3>Offline Mode</TypographyH3>
        <TypographyP>Access your previously downloaded or cached documents even without an active internet connection, perfect for exam preparation.</TypographyP>
        <TypographyH3>Smart Search</TypographyH3>
        <TypographyP>Quickly find specific keywords, topics, or definitions within large text documents using an optimized indexing algorithm.</TypographyP>
      </div>
    ),
  },
  {
    id: "smartphone-client",
    category: "Web App",
    title: "Smartphone Finder Client",
    src: "/projects/client_ui.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.chakra],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    github: "https://github.com/yashchoudhary-fullstack/client",
    content: (
      <div>
        <SlideShow images={["/projects/client_ui.png", "/projects/client_2.png"]} />
        <TypographyP className="font-mono">
          A detailed smartphone specification client integrating GSMArena data, providing advanced filtering and mobile model comparisons.
        </TypographyP>
        <ProjectsLinks repo="https://github.com/yashchoudhary-fullstack/client" />
        <TypographyH3>Real-time Location</TypographyH3>
        <TypographyP>Track your lost or misplaced device with high accuracy on a live interactive map, complete with route history.</TypographyP>
        <TypographyH3>Remote Lock</TypographyH3>
        <TypographyP>Secure your device remotely by locking the screen to prevent unauthorized access to your personal data.</TypographyP>
        <TypographyH3>Sound Alarm</TypographyH3>
        <TypographyP>Trigger a loud alarm remotely to locate your phone nearby, even if the device was previously set to silent mode.</TypographyP>
      </div>
    ),
  },
  {
    id: "yash-portfolio",
    category: "Personal Website",
    title: "Yash Portfolio",
    src: "/projects/yash_portfolio_real.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion, PROJECT_SKILLS.spline],
      backend: [],
    },
    live: "https://yash-portfolio-1f5.web.app/",
    content: (
      <div>
        <SlideShow images={["/projects/yash_portfolio_real.png", "/projects/yash_portfolio_real_2.png"]} />
        <TypographyP className="font-mono">
          My personal interactive 3D portfolio featuring seamless page transitions, an integrated 3D Spline model, and responsive design.
        </TypographyP>
        <ProjectsLinks live="https://yash-portfolio-1f5.web.app/" />
        <TypographyH3>3D Visuals</TypographyH3>
        <TypographyP>Interactive 3D elements and modern scroll animations create an engaging and memorable user experience from the first click.</TypographyP>
        <TypographyH3>Responsive Design</TypographyH3>
        <TypographyP>A pixel-perfect layout that adapts beautifully across mobile phones, tablets, and desktop monitors without losing fidelity.</TypographyP>
        <TypographyH3>Dynamic Content</TypographyH3>
        <TypographyP>Seamlessly integrated with a robust project data structure, making it easy to update and showcase new work over time.</TypographyP>
      </div>
    ),
  },
  {
    id: "realtime-map",
    category: "Tracking",
    title: "Real-time Map Location Tracker",
    src: "/projects/map_ui.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.sockerio, PROJECT_SKILLS.postgres],
    },
    github: "https://github.com/yashchoudhary-fullstack/realtime-tracker",
    content: (
      <div>
        <SlideShow images={["/projects/map_ui.png", "/projects/map_2.png"]} />
        <TypographyP className="font-mono">
          A real-time location tracker utilizing Socket.io and mapping APIs for dynamic device tracking and interactive route rendering.
        </TypographyP>
        <ProjectsLinks repo="https://github.com/yashchoudhary-fullstack/realtime-tracker" />
        <TypographyH3>Live Tracking</TypographyH3>
        <TypographyP>Watch real-time movement updates pushed directly to the browser via websockets, ensuring zero-latency coordinate updates.</TypographyP>
        <TypographyH3>Route History</TypographyH3>
        <TypographyP>View past trajectories, speed data, and exact timestamps across a plotted polyline for comprehensive movement analysis.</TypographyP>
        <TypographyH3>Multi-device Support</TypographyH3>
        <TypographyP>Track multiple devices simultaneously on a single map interface, complete with custom markers and device-specific side panels.</TypographyP>
      </div>
    ),
  },
];

export default projects;
