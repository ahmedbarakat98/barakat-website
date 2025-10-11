import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiQgis,
  SiArcgis,
  SiPostgresql,
  SiLeaflet,
  SiPostman,
  SiGit,
  SiFigma,
  SiRedux,
  SiGithub,
  SiGooglesheets,
} from "react-icons/si";

export const techLogos = [
  // 🌐 Frontend
  { node: <SiHtml5 />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiLeaflet />, title: "Leaflet.js", href: "https://leafletjs.com" },
  { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },

  // 🐍 Backend / Programming
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiPostgresql />, title: "SQL", href: "https://www.postgresql.org" },

  // 🗺️ GIS Tools
  { node: <SiArcgis />, title: "ArcGIS", href: "https://www.esri.com/en-us/arcgis/about-arcgis/overview" },
  { node: <SiQgis />, title: "QGIS", href: "https://qgis.org/en/site/" },

  // 🧰 Tools & Platforms
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGooglesheets />, title: "Google Sheets", href: "https://www.google.com/sheets/about/" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },

    // 🎨 Design
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  
];

export const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];
