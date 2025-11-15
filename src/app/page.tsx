import TrueFocus from "@/components/TrueFocus";
import LogoLoop from "@/components/LogoLoop";
import Navbar from "@/components/Navbar";
import Barakat from "../../public/barakat.jpg";
import { Timeline } from "@/components/timeline";
import { dataTimeLine } from "@/Types/dataTimeLine";
import { techLogos } from "@/Types/logoLoop";
import Image from "next/image";
import frontend from "./../../public/frontend.png";
import marketing from "./../../public/digital marketing.png";
import dataanalyst from "./../../public/data analyst.png";
import ecommerce from "./../../public/ecommerce.png";
import dashboard from "./../../public/dashboard.png";
import python from "./../../public/python.png";
import { CometCard } from "@/components/comet-card";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { Button } from "@/components/moving-border";
import ThemeToggle from "@/components/ThemeToggle";
import { CardStack } from "@/components/card-stack";
import ElectricBorder from "@/components/ElectricBorder";
import Link from "next/link";
import { Badge } from "@/components/badge";

function App() {
  return (
    <main className="dark">
      <Navbar />
      <div className="w-full h-fit md:h-screen bg-white dark:bg-black relative flex justify-center items-center">
        <div className="absolute top-6 md:top-8 left-5  md:left-10 text-white">
          <TrueFocus
            sentence="Ahmed Barakat"
            manualMode={false}
            blurAmount={5}
            borderColor="#39fc03"
            animationDuration={2}
            pauseBetweenAnimations={1}
            glowColor="rgba(57, 252, 3, 0.6)"
          />
        </div>
        <div className="absolute top-5 md:top-8 right-[50%] translate-x-[50%] text-white md:right-15 ">
          <ThemeToggle />
        </div>

        {/* Hero  */}
        <div className="w-[80%] h-fit flex flex-col md:flex-row  pb-10 rounded-lg ">
          {/* Text  */}
          <div className="md:w-3/1 pb-20 md:pb-0 pt-15 ">
            <h5 className="dark:text-white text-black p-5">Hello! I'm</h5>
            <h2 className="text-6xl dark:text-white text-black px-4 font-bold">
              Ahmed <span className="text-[#39fc03]">Barakat</span>
            </h2>
            <TextGenerateEffect
              filter={false}
              words="A Passionate Fronend Developer & GIS Analyst & Software Engineer Student"
              className="px-4 font-light"
              duration={1}
            />
            <div className="w-full flex flex-col lg:flex-row items-center ">
              <div className="flex">
                <Button
                borderRadius="1.75rem"
                borderClassName=" bg-[#39fc03]"
                containerClassName="container-class mt-10 ml-4"
                duration={4000}
                className="dark:text-white text-black cursor-pointer font-semibold hover:scale-[1.03] transition-transform"
              >
                <Link
                  href="/CV Ahmed Barakat.pdf"
                  download
                  className="dark:text-white text-black font-light px-4"
                >
                  Download CV
                </Link>
              </Button>

              <Button
                borderRadius="1.75rem"
                borderClassName=" bg-[#39fc03]"
                containerClassName="container-class mt-10 ml-4 "
                duration={4000}
                className="dark:text-white cursor-pointer text-black font-semibold hover:scale-[1.03] transition-transform"
              >
                <Link
                  href="#projects"
                  className="dark:text-white text-black font-light px-4"
                >
                  Portfolio
                </Link>
              </Button>
              </div>
              <div className="flex justify-start items-start">

                
              {/* GitHub */}

              <Link
                href="https://github.com/ahmedbarakat98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 496 512"
                  className="mr-1 dark:text-white cursor-pointer  text-black mt-12 ml-4 ms-10"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </Link>

              {/* LinkedIn */}

              <Link
                href="https://www.linkedin.com/in/ahmedbarakatdev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="mr-1 dark:text-white cursor-pointer  text-black mt-12 ml-4"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>
              </Link>

              {/* mail  */}

              <Link
                href="mailto:ahmedbarakat9850@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="mr-1 dark:text-white cursor-pointer  text-black mt-12 ml-4"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
              </Link>

              </div>

            </div>
          </div>
          {/* Image  */}
          <div className="md:w-3/2 flex justify-center pt-15  items-center ">
            <CometCard rotateDepth={15} translateDepth={10} className="w-2/3 ">
              <Image
                width={400}
                height={400}
                src={Barakat.src}
                alt="Batakat"
                className="w-full h-full object-cover rounded-2xl"
              />
            </CometCard>
            {/* <Image className="w-2/3 rounded-full " width={100} height={100} alt="Barakat Photo" src={Barakat}></Image> */}
          </div>
        </div>
      </div>

      {/* About me  */}
      <div id="about" className="w-full h-fit  bg-white dark:bg-black">
        <div className="flex dark:text-white text-black justify-center flex-col items-center ">
          <h1 className="text-4xl font-bold p-2 mt-15 md:mt-10 mb-10 ">
            About Me
          </h1>
          <div className="flex flex-col ">
            <div className="w-full pb-10 px-20 md:px-40 lg:px-60">
              <p className="pb-5 dark:text-white text-center">
                I Am a Motivated Junior Frontend Developer with a background in
                GIS and over two years of experience at MaxAB Logistics,
                specializing in GIS software including QGIS, ArcGIS, and SQL.
                Recently completed a Frontend Development course at Route
                Academy, where I gained hands-on experience in HTML, CSS,
                JavaScript, and React. Eager to leverage my technical skills and
                passion for web development, especially in interactive mapping
                and data visualization, to contribute to a dynamic and
                innovative team in the tech industry.
              </p>
            </div>
            <div className="w-3/4 mx-auto gap-5 md:gap-0 flex flex-col lg:flex-row justify-around items-center ">
              <ElectricBorder
                color="#39fc03"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}
              >
                <div className="p-5">
                  <h2 className="flex items-center pb-3 gap-2 font-bold text-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 text-[#39fc03]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>{" "}
                    Helwan University{" "}
                  </h2>
                  <p className="text-[14px]">Faculty Of Arts</p>
                  <p className="text-[14px]">Bachelor's Degree in Geography</p>
                  <p className="text-[14px]">Grade : B (GPA 3.0/4.0) </p>
                  <p className="text-[14px]">Cairo 2016- 2020</p>
                </div>
              </ElectricBorder>
              <ElectricBorder
                color="#39fc03"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}
              >
                <div className="p-5">
                  <h2 className="flex items-center pb-3 gap-2 font-bold text-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 text-[#39fc03]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                      />
                    </svg>
                    Route Academy{" "}
                  </h2>
                  <p className="text-[14px]">Full Stack Development Diploma</p>
                  <p className="text-[14px]">Frontend (React.js)</p>
                  <p className="text-[14px]">Backend (.Net)</p>
                  <p className="text-[14px]">Cairo 2025-present</p>
                </div>
              </ElectricBorder>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline  */}
      <div className="h-fit dark:bg-black pt-20 lg:mt-0 bg-white ">
        <Timeline data={dataTimeLine} />
      </div>

      {/* Skills  */}
      <div className="h-fit dark:bg-black dark:text-amber-50  bg-white ">
        <TextGenerateEffect
          filter={false}
          words="Throughout my Journey, I Have Acquired a Diverse Set of Skills, Including but Not Limited to the Following:"
          className="text-center py-10 text-2xl"
          duration={1}
        />

        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={50}
          gap={45}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#181818"
          className="bg-white dark:bg-[#0b0b0b]"
          ariaLabel="Technology partners"
        />
      </div>

      {/* Certifications  */}
      <div id="certificates" className="h-fit dark:bg-black bg-white pt-10">
        <div className="flex dark:text-white text-black justify-center items-center ">
          <h1 className="text-4xl font-bold p-2 mt-15 md:mt-10 mb-10 ">
            Certifications
          </h1>
        </div>
        <div className="pt-15 lg:p-15 flex flex-col lg:flex-row justify-center items-center">
          <div className="w-2/3 flex flex-col dark:text-white text-black justify-start items-start">
            <h2 className="font-bold text-2xl pb-5">
              During my professional journey, I have earned several
              certifications, the most notable of which include:
            </h2>
            <h4 className="font-bold text-[16px] text-[#39fc03]">
              FrontEnd Development Diploma - Route IT Training Center (7 Month)
            </h4>
            <p className="pb-5">
              Completed the Front-End Development Diploma at Route Academy,
              gaining expertise in HTML5, CSS3, JavaScript, responsive design,
              Git & GitHub, React.js, and web optimization. Proficient in using
              Webpack and npm for efficient development workflows.
            </p>

            <h4 className="font-bold text-[16px] text-[#39fc03]">
              Google Data Analytics - Google-Coursera (6 Month)
            </h4>
            <p>
              Completed the Google Data Analytics course, gaining proficiency in
              data cleaning, analysis, and visualization using tools like Excel,
              SQL, and Tableau. Learned to interpret data to provide actionable
              insights and drive business decisions.
            </p>
          </div>
          <CardStack
            offset={15}
            scaleFactor={0.04}
            items={[
              {
                id: 1,
                content: frontend.src,
              },
              {
                id: 2,
                content: marketing.src,
              },
              {
                id: 3,
                content: dataanalyst.src,
              },
              {
                id: 4,
                content: python.src,
              },
            ]}
          />
        </div>
      </div>

      {/* Projects  */}
      <div id="projects" className="w-full h-fit bg-white dark:bg-black">
        <div className="flex flex-col dark:text-white text-black justify-center items-center ">
          <h1 className="text-4xl font-bold px-2 pe-2 mt-0 md:mt-10 mb-10 ">
            Portfolio
          </h1>
          {/* projects Cards  */}
          <div className="flex gap-10 flex-col lg:flex-row justify-between items-center px-15 mb-10">
            <ElectricBorder
              color="#39fc03"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <Link
                href="https://github.com/ahmedbarakat98/E-Commerce"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-5 w-80 h-fit m-5">
                  <Image
                    src={ecommerce}
                    alt="Project 1"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3 w-80 h-40 object-fill"
                  />

                  <h2 className="flex items-center pb-3 gap-2 font-bold text-[20px]">
                    E-Commerce App
                  </h2>

                  <div className="flex gap-2 pb-2">
                    <Badge
                      variant="secondary"
                      className="bg-yellow-500 text-white dark:bg-yellow-600"
                    >
                      Next.JS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-red-500 text-white dark:bg-red-600"
                    >
                      Tailwind
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-500 text-white dark:bg-blue-600"
                    >
                      Type Script
                    </Badge>
                  </div>
                  <p className="text-[10px]">
                    I developed an e-commerce website during the Route Academy
                    course, where I created a platform allowing customers to
                    browse products, add items to their cart, and complete
                    secure payments. I used technologies such as HTML, CSS,
                    JavaScript, and Next.js to build a smooth and efficient user
                    experience.
                  </p>
                  <p className="text-yellow-300 text-[14px]">on progress</p>
                </div>
              </Link>
            </ElectricBorder>

            <ElectricBorder
              color="#39fc03"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <Link
                href="https://github.com/ahmedbarakat98/E-Commerce/blob/main/public/dashboard.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-5 w-80 h-fit m-5">
                  <Image
                    src={dashboard}
                    alt="Project 1"
                    width={300}
                    height={200}
                    className="rounded-lg mb-3 w-80 h-40 object-fill"
                  />

                  <h2 className="flex items-center pb-3 gap-2 font-bold text-[20px]">
                    Cash Collection Dashboard
                  </h2>

                  <div className="flex gap-2 pb-2">
                    <Badge
                      variant="secondary"
                      className="bg-green-500 text-white dark:bg-green-600"
                    >
                      Microsoft Excel
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-500 text-white dark:bg-yellow-600"
                    >
                      Power BI
                    </Badge>
                  </div>
                  <p className="text-[10px]">
                    This dashboard provides a concise view of cash collection
                     performance. The top section presents key KPIs such as market
                     count, fleet size, and order volumes for Mega and Mega+ 
                     retailers. The bar chart shows how orders are distributed
                      across different markets, while the map highlights retailer
                       locations to visualize geographic activity and concentration.
                  </p>
                  <p className="text-green-300 text-[14px]">Finished</p>
                </div>
              </Link>
            </ElectricBorder>
          </div>
        </div>
      </div>

      {/* get in touch  */}
      <div className="w-full h-fit bg-white border-t-8 border-b-8 border-[#39fc03]/30 dark:bg-black py-10">
        <div id="call" className="flex flex-col dark:text-white text-black justify-center items-center ">
          <h1 className="text-4xl font-bold px-2 pe-2  mb-10 ">
            Get In Touch
          </h1>
          <TextGenerateEffect
              filter={false}
              words="I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. I'll try my best to get back to you!"
              className="text-center px-4 font-light max-w-2xl"
              duration={1}
              />
            <div className="flex my-0 justify-center pe-10 items-center ">
                              
              {/* GitHub */}

              <Link
                href="https://github.com/ahmedbarakat98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 496 512"
                  className="mr-1 dark:text-white cursor-pointer  text-black mt-12 ml-4 ms-10"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </Link>

              {/* LinkedIn */}

              <Link
                href="https://www.linkedin.com/in/ahmedbarakatdev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="mr-1 dark:text-white cursor-pointer  text-black mt-12 ml-4"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>
              </Link>

              {/* mail  */}

              <Link
                href="mailto:ahmedbarakat9850@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="mr-1 dark:text-white cursor-pointer  text-black mt-12 ml-4"
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
              </Link>

            </div>
        </div>
      </div>
      <div className="w-full h-fit flex justify-center items-center bg-white dark:bg-black ">
        <h2 className="p-5 dark:text-white text-black">© 2025 Ahmed Abdelraheem Barakat . All rights reserved.</h2>
      </div>
    </main>
  );
}

export default App;
