
import re

with open("src/data/projects.tsx", "r", encoding="utf-8") as f:
    content = f.read()

new_projects_array = """const projects: Project[] = [
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
    github: "https://github.com/yashchoudhary-fullstack/data-sharing",
    live: "https://yashchoudhary.site/data-sharing",
    content: (
      <div>
        <SlideShow images={["/projects/data_sharing.png", "/projects/data_sharing_2.png"]} />
        <TypographyP className="font-mono">
          A seamless Android + Windows ecosystem app with real-time file sharing, clipboard synchronization, and cross-device connectivity.
        </TypographyP>
        <ProjectsLinks live="https://yashchoudhary.site/data-sharing" repo="https://github.com/yashchoudhary-fullstack/data-sharing" />
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
    live: "https://oneplus-11r-showcase-yash.web.app/",
    content: (
      <div>
        <SlideShow images={["/projects/selling_real.png", "/projects/selling_real.png"]} />
        <TypographyP className="font-mono">
          A premium product showcase website for the OnePlus 11R, featuring stunning visuals, animations, and detailed specifications.
        </TypographyP>
        <ProjectsLinks live="https://oneplus-11r-showcase-yash.web.app/" />
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
    live: "https://cheat-viewer-yash.web.app/",
    content: (
      <div>
        <SlideShow images={["/projects/cheat_real.png", "/projects/cheat_real.png"]} />
        <TypographyP className="font-mono">
          An academic study material viewer to securely extract and organize study resources, featuring AI and PHP curriculum PDFs.
        </TypographyP>
        <ProjectsLinks live="https://cheat-viewer-yash.web.app/" />
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
    github: "https://github.com/yashchoudhary-fullstack/smartphone-finder",
    live: "https://yashchoudhary.site/smartphones",
    content: (
      <div>
        <SlideShow images={["/projects/client_ui.png", "/projects/client_2.png"]} />
        <TypographyP className="font-mono">
          A detailed smartphone specification client integrating GSMArena data, providing advanced filtering and mobile model comparisons.
        </TypographyP>
        <ProjectsLinks live="https://yashchoudhary.site/smartphones" repo="https://github.com/yashchoudhary-fullstack/smartphone-finder" />
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
        <SlideShow images={["/projects/yash_portfolio_real.png", "/projects/yash_portfolio_real.png"]} />
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
    github: "https://github.com/yashchoudhary-fullstack/realtime-map",
    live: "https://yashchoudhary.site/tracker",
    content: (
      <div>
        <SlideShow images={["/projects/map_ui.png", "/projects/map_2.png"]} />
        <TypographyP className="font-mono">
          A real-time location tracker utilizing Socket.io and mapping APIs for dynamic device tracking and interactive route rendering.
        </TypographyP>
        <ProjectsLinks live="https://yashchoudhary.site/tracker" repo="https://github.com/yashchoudhary-fullstack/realtime-map" />
        <TypographyH3>Live Tracking</TypographyH3>
        <TypographyP>Watch real-time movement updates pushed directly to the browser via websockets, ensuring zero-latency coordinate updates.</TypographyP>
        <TypographyH3>Route History</TypographyH3>
        <TypographyP>View past trajectories, speed data, and exact timestamps across a plotted polyline for comprehensive movement analysis.</TypographyP>
        <TypographyH3>Multi-device Support</TypographyH3>
        <TypographyP>Track multiple devices simultaneously on a single map interface, complete with custom markers and device-specific side panels.</TypographyP>
      </div>
    ),
  },
];"""

new_content = re.sub(r"const projects: Project\[\] = \[.*?\n\];", new_projects_array, content, flags=re.DOTALL)
with open("src/data/projects.tsx", "w", encoding="utf-8") as f:
    f.write(new_content)

