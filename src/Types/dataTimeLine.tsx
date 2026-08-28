import MapEmbed from "@/components/Location1";
import edge from "../../public/12345.png";
import Maxab from "../../public/mxb.jpg";
import foodiac from "../../public/logo white.png";
import etqan from "../../public/Etqan.png";
import Image from "next/image";
import { Link } from "lucide-react";


export const dataTimeLine = [
  {
    title: "2021",
    content: (
      <div className="text-neutral-700  dark:text-neutral-300">
        <h4 className="mb-1 text-2xl font-bold">
          Hassan Allam Holding — Land Surveyor Assistant
        </h4>
        <p className="mb-4 font-bold">
          Maspero Triangle Project, Downtown | Oct 2021 – Apr 2022 (On-site)
        </p>
        <p className="mb-4">
          Assisted senior land surveyors in conducting precise field
          measurements, data collection, and topographic mapping to ensure the
          accuracy of site layouts and development plans. Supported the
          preparation of survey reports and coordinated with engineering teams
          to maintain alignment between design specifications and on-ground
          implementation.
        </p>
        <MapEmbed
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3914.04250329919!2d31.234715523793916!3d30.05330036725395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2seg!4v1759807458933!5m2!1sar!2seg"
          title="Maspero Triangle Project, Downtown"
          aspectPercent={30}
          withBorder
          rounded
          className="shadow-sm"
        />
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div className="text-neutral-700 dark:text-neutral-300">
        <h4 className="mb-1 text-2xl font-bold">
          EDGE PRO for Information Systems - GIS Specialist
        </h4>
        <p className="mb-4 font-bold">
          El Katameya | Jun 2022 – Oct 2022 (onsite)
        </p>
        <p className="mb-4">
          Performed comprehensive block surveying operations by creating detailed layout
         drafts using Floor Plan Creator and accurately georeferencing polygons onto a base
          map. Supported spatial analysis and urban planning efforts through precise data
         mapping, ensuring alignment between field measurements and digital spatial
         datasets for enhanced project accuracy and planning efficiency.
        </p>
         <a href="https://edge-pro.com/ ">
        <Image width={100} height={100} className="w-1/4 rounded-3xl overflow-hidden"  alt={"Maxab"} src={edge}        ></Image>
        </a>
      
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="text-neutral-700 dark:text-neutral-300">
        <h4 className="mb-1 text-2xl font-bold">
          MAXAB Logistics - GIS Specialist
        </h4>
        <p className="mb-4 font-bold">
          Maadi || from Nov 2022 – Dec 2023 (HYPERD)
        </p>
        <p className="mb-4">
          Handled the allocation and distribution of Amazon orders throughout
           Giza by geocoding customer addresses into precise map coordinates and 
           managing spatial datasets within QGIS. Created detailed digital maps for
            retail operations, produced analytical reports to support logistics planning,
           and maintained accurate address records within the database to enhance data 
          reliability, delivery efficiency, and decision-making.
        </p>
        <a href="https://www.maxab.io/">
        <Image width={100} height={100} className="w-1/4 rounded-3xl overflow-hidden" src={Maxab} alt={"Maxab"}></Image>
        </a>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="text-neutral-700 dark:text-neutral-300">
        <h4 className="mb-1 text-2xl font-bold">
          ETQAN for Geoinformatics Systems - GIS Project Manager
        </h4>
        <p className="mb-4 font-bold">
          Zahraa El Maadi | Mar 2024 – Present (Seasonal)
        </p>
        <p className="mb-4">
          Led the development of digital utility maps by integrating remote sensing data
           with field survey results to support municipal planning and infrastructure 
           improvement. Designed and managed a PostgreSQL/PostGIS geodatabase for efficient
            collection, storage, and spatial analysis of GIS datasets. Delivered comprehensive
             training programs on GeoAI and Web GIS, incorporating JavaScript (React) and
              mapping libraries such as Mapbox, Leaflet.js, and Turf.js to enhance team technical 
              capabilities and project outcomes.
        </p>
        <a href="https://etqan-egy.com/">
        <Image width={100} height={100} className="w-1/4 rounded-3xl overflow-hidden" src={etqan} alt={"Maxab"}></Image>
        </a>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div className="text-neutral-700 dark:text-neutral-300">
        <span>Back To</span>
        <h4 className="mb-1 text-2xl font-bold">
         MAXAB Logistics - Distribution Sorting Center Team Leader
        </h4>
        <p className="mb-4 font-bold">
         Maadi | Jan 2024 – Jan 2026 (Full Time - Remote)
        </p>
        <p className="mb-4">
          I Develop and optimize a digital mapping system to automate product sorting 
          by geographic location, streamlining order distribution and reducing processing
           time. Conducted in-depth analyses of sorting operations to evaluate performance
            metrics and identify process enhancements. Designed and implemented area 
            segmentation strategies based on order density, improving delivery accuracy, 
            operational efficiency, and overall logistics coordination.
        </p>
        <a href="https://www.maxab.io/">
        <Image width={100} height={100} className="w-1/4 rounded-3xl overflow-hidden" src={Maxab} alt={"Maxab"}></Image>
        </a>
        
      </div>
    ),
  },
  {
    title: "2026",
    content: (
      <div className="text-neutral-700 dark:text-neutral-300">
        <h4 className="mb-1 text-2xl font-bold">
         Foodica Trading and Distribution Ltd. Co. - IT Frontend Developer and Network Administrator
        </h4>
        <p className="mb-4 font-bold">
         Abo Rawash | May 2026 – Present (Full Time - on-site)
        </p>
        <p className="mb-4">
          I Manage and maintain the company's IT infrastructure, ensuring high availability, stability, and security of systems and networks.
          Provide advanced technical support (Level 2/3) to end users, troubleshooting hardware, software, and network issues efficiently.
          Manage user permissions and access rights on Odoo ERP system, including creating new users, assigning security groups, role-based access control, and conducting periodic permission reviews.
          Configure and customize Odoo modules according to departmental requirements (Sales, Purchasing, Accounting, Inventory, HR, etc.).
          Implement and enforce cybersecurity policies, data access controls, and best practices for system security.
          Administer Active Directory, Group Policies, email accounts, and user provisioning.
          Participate in digital transformation projects and internal process automation using ERP systems.
          Train and support users on Odoo and other internal tools to maximize productivity and system adoption.
        </p>
        <a href="https://www.maxab.io/">
        <Image width={100} height={100} className="w-1/4 rounded-3xl overflow-hidden" src={foodiac} alt={"Maxab"}></Image>
        </a>
        
      </div>
    ),
  },
];
