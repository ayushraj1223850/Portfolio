import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const skills = [
    { name: "Web Development", percentage: 90 },
    { name: "Data Structures & Algorithms", percentage: 80 },
    { name: "Database Management", percentage: 75 },
    { name: "Problem Solving", percentage: 85 },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(' ayushraj620621@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I'm Ayush Raj</p>
              <p className="grid-subtext">
              Full Stack Developer with a passion for building user-friendly, scalable web applications. I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites.
              </p>
              <a 
                href="/assets/resume.pdf" 
                download 
                className="mt-4 inline-block"
              >
                <Button name="Download Resume" isBeam containerClass="w-full" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Skills</p>
              <p className="grid-subtext">
              <ul>
              <li><b>Languages:</b> C++, Python, PHP, JavaScript</li> 
              <li><b>Frontend:</b> HTML, CSS, Tailwind CSS, React</li>
              <li><b>Backend:</b> Node.js, Express, Laravel</li>
              <li><b>Database:</b> MongoDB, SQL</li>
              <li><b>Tools/Platforms:</b> Git, Postman, AWS, Docker, Kubernetes</li>
              <li><b>Soft Skills:</b> Problem Solving, Teamwork, Communication, Adaptability</li>
              
              </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="space-y-6">
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe
                  height={326}
                  width={326}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                />
              </div>

              <div>
                {/* Training Section */}
                <div className="mb-6">
                  <h3 className="text-white text-xl font-semibold mb-2">Training</h3>
                  <div className="bg-black-300 rounded-lg p-4 hover:bg-black-500 transition-colors duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-medium">Cipher Schools</h4>
                      <span className="text-purple-400 text-sm">Jun' 24 – Jul' 24</span>
                    </div>
                    <p className="text-white-600 text-sm">
                      Completed a Full-Stack Web Development training at Cipher Schools, focusing on building and deploying responsive web applications using modern JavaScript technologies. Gained hands-on experience with RESTful APIs, JWT authentication, version control, and deployment tools like Heroku and Netlify.
                    </p>
                  </div>
                </div>

                {/* Certifications Section */}
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">Certifications</h3>
                  <div className="space-y-3">
                    <div className="bg-black-300 rounded-lg p-3 hover:bg-black-500 transition-colors duration-300">
                      <p className="text-white font-medium">Online certification in Cloud Computing</p>
                      <p className="text-white-600 text-sm">NPTEL | Dec' 24</p>
                    </div>
                    <div className="bg-black-300 rounded-lg p-3 hover:bg-black-500 transition-colors duration-300">
                      <p className="text-white font-medium">Online certification in Operating System and DBMS</p>
                      <p className="text-white-600 text-sm">NPTEL | Apr' 24</p>
                    </div>
                    <div className="bg-black-300 rounded-lg p-3 hover:bg-black-500 transition-colors duration-300">
                      <p className="text-white font-medium">Getting Started with AI and Machine Learning</p>
                      <p className="text-white-600 text-sm">LinkedIn Learning | Feb' 23</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Expertise</p>
              <div className="mt-4">
                {skills.map((skill, index) => (
                  <ProgressBar 
                    key={index}
                    skill={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
              
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="flex flex-col gap-4">
                <div className="copy-container" onClick={handleCopy}>
                  <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                  <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ayushraj620621@gmail.com</p>
                </div>
                <a 
                  href="https://www.linkedin.com/in/ayush-raj-b29753259/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <img src="assets/linkedin.svg" alt="linkedin" className="w-6 h-6" />
                  <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">LinkedIn</p>
                </a>
                <a 
                  href="https://github.com/ayushraj1223850" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <img src="assets/github.svg" alt="github" className="w-6 h-6" />
                  <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">GitHub</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
