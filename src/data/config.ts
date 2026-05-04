const config = {
  title: "Yash Choudhary | Software Developer",
  description: {
    long: "Explore the portfolio of Yash Choudhary, a motivated B.Sc Computer Science student with a strong interest in software development, web technologies, and building real-world applications. Discover my projects like the Personal Ecosystem App, Tradex Cricket App, and more.",
    short:
      "Discover the portfolio of Yash Choudhary, a software developer building real-world applications and innovative projects.",
  },
  keywords: [
    "Yash Choudhary",
    "portfolio",
    "software developer",
    "web development",
    "Java",
    "HTML",
    "CSS",
    "Personal Ecosystem App",
    "Tradex Cricket App",
  ],
  author: "Yash Choudhary",
  email: "yashchoudhary0056@gmail.com",
  site: "https://yashchoudhary.site", // Assuming a placeholder for now

  // for github stars button
  githubUsername: "yashchoudhary-fullstack",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/YashChoudh24681",
    linkedin: "https://www.linkedin.com/login",
    instagram: "https://www.instagram.com/chaudhary.yashh?igsh=MWdmd3NtcGRzY3Ix",
    facebook: "https://www.facebook.com/",
    github: "https://github.com/yashchoudhary-fullstack",
  },
};
export { config };
