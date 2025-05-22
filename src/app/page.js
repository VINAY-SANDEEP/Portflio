'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { Link as ScrollLink } from 'react-scroll';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaJava,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaUsers,
  FaCode,
  FaServer,
  FaGitAlt,
  FaGithubAlt,
  FaVscode,
  FaIntellij,
  FaTrophy,
  FaCodeBranch,
  FaDatabase as FaDatabaseIcon
} from 'react-icons/fa';
import SkillCategory from './components/SkillCategory';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="h-screen flex items-center justify-center section-padding">
        <div className="container-padding text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h1 
              className="heading mb-4"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                type:"spring",
                stiffness: 100
              }}
            >
              Dwarampudi Vinay Sandeep Reddy
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-textSecondary mb-4"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                delay: 0.2
              }}
            >
              MERN Stack Developer | ReactJS Enthusiast | Passionate Problem Solver 
            </motion.p>
            <motion.p 
              className="text-lg text-textSecondary mb-8 max-w-2xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                delay: 0.4
              }}
            >
              A passionate B.Tech AIML student and MERN Stack Developer, crafting elegant solutions 
              and building user-friendly web applications. Currently pursuing my degree at Aditya College 
              of Engineering and I also have a strong interest in the stock market..
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                delay: 0.6
              }}
            >
              <ScrollLink to="projects" smooth={true} duration={500}>
                <button className="btn btn-primary">View Projects</button>
              </ScrollLink>
              <a href="https://drive.google.com/file/d/1Ix34kD8KGb1jrpPvkPfNxaMbPhHM0gaa/view?usp=drivesdk" download className="btn btn-outline">
                <HiDownload className="inline-block mr-2" />
                Download Resume
              </a>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <button className="btn btn-outline">Contact Me</button>
              </ScrollLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-tertiary">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <motion.div 
              className="w-full md:w-1/3"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
  <img 
    src="https://media.licdn.com/dms/image/v2/D5603AQGOE0pPT1uM7w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725239322014?e=1752105600&v=beta&t=JMY-8QpvLzBm2m2eACmrLtnD9K53pdRWUug5CXth_JU"
    alt="Dwarampudi Vinay Sandeep Reddy"
    className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
    style={{
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.4), 0 8px 10px rgba(0, 0, 0, 0.2)"
    }}
  />
            </motion.div>
            <motion.div 
              className="w-full md:w-2/3"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="heading mb-8">About Me</h2>
              <div className="max-w-3xl">
                <motion.p 
                  className="text-lg mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  I am a passionate MERN Stack Developer with a focus on building user-friendly and responsive web applications. 
                  Currently pursuing B.Tech in Artificial Intelligence and Machine Learning at Aditya College of Engineering (2023–2027) and I also have a strong interest in the stock market.  .
                </motion.p>
                <motion.p 
                  className="text-lg"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  I believe in writing clean, maintainable code and creating solutions that make a real impact. 
                  My journey in web development is driven by continuous learning and a commitment to excellence.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="heading text-center mb-12 "
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-red"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SkillCategory 
              title="Frontend Development"
              skills={[
                'HTML5',
                'CSS3',
                'JavaScript',
                'ReactJS',
                'Next.js',
                'Tailwind CSS'
              ]}
            />
            <SkillCategory 
              title="Backend Development"
              skills={[
                'Java',
                'ExpressJS',
                'Node.js',
                'MongoDB (NoSQL)',
                'Oracle SQL'
              ]}
            />
            <SkillCategory 
              title="Tools & Technologies"
              skills={[
                'Git',
                'GitHub',
                'VS Code',
                'IntelliJ IDEA'
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-padding bg-tertiary">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="heading text-center mb-12"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Achievements
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <FaCodeBranch className="text-4xl text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">LeetCode</h3>
                <p className="text-textSecondary text-center">
                  Completed 250+ problems using Java
                </p>
              </motion.div>

              <motion.div 
                className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <FaTrophy className="text-4xl text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">GeeksforGeeks</h3>
                <p className="text-textSecondary text-center">
                  Completed 220+ problems using Java
                </p>
              </motion.div>

              <motion.div 
                className="bg-primary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <FaDatabaseIcon className="text-4xl text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">HackerRank</h3>
                <p className="text-textSecondary text-center">
                  3 Stars in MySQL
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-tertiary">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-8">
              <motion.h2 
                className="heading"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Projects
              </motion.h2>
              <motion.a 
                href="https://github.com/VINAY-SANDEEP?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center gap-2"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </motion.a>
            </div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title="Food Delivery Web App"
                techStack={['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer']}
                description="A full-stack food delivery application with role-based dashboards, secure authentication, product management, and order functionality."
                githubLink="https://github.com/VINAY-SANDEEP/Backend_hotel"
                imageUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
              <ProjectCard
                title="Bus Details App"
                techStack={['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Tailwind CSS']}
                description="A bus search system with real-time data retrieval from JSON, featuring an intuitive user interface."
                githubLink="https://github.com/VINAY-SANDEEP/Busl"
                imageUrl="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
              <ProjectCard
                title="Gift Store"
                techStack={['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Tailwind CSS']}
                description="An interactive gift store with dynamic product display and engaging hover effects."
                githubLink="https://github.com/VINAY-SANDEEP/Gift-Store"
                imageUrl="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
              <ProjectCard
                title="Resource Mangement"
                techStack={['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Tailwind CSS',, 'Node.js', 'Express.js', 'MongoDB',]}
                description="This React app is a resource management system that allows admins to upload, edit, and delete PDF resources by subject, unit, and topic, while students can view available materials easily."
                githubLink="https://github.com/VINAY-SANDEEP/resources_frontend"
                imageUrl="https://media.kasperskydaily.com/wp-content/uploads/sites/36/2023/03/29010204/pii-gathering-advice-featured.jpg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="heading mb-8"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Certifications
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CertificationCard
                title="Oracle Java Fundamentals"
                issuer="Oracle"
              />
              <CertificationCard
                title="Web Developer Bootcamp"
                issuer="Udemy - Colt Steele"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="section-padding">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="heading mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Connect With Me
            </motion.h2>
            <motion.div 
              className="flex flex-wrap justify-center gap-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="mailto:vinaysandeep782@gmail.com" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope className="text-4xl" />
                <span>Gmail</span>
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/vinaysandeep" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="text-4xl" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a 
                href="https://wa.me/916303798703" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp className="text-4xl" />
                <span>WhatsApp</span>
              </motion.a>
              <motion.a 
                href="https://instagram.com/ig__vishnu_" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="text-4xl" />
                <span>Instagram</span>
              </motion.a>
              <motion.a 
                href="https://github.com/VINAY-SANDEEP" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-4xl" />
                <span>GitHub</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-tertiary">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="heading mb-8"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Contact Me
            </motion.h2>
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();

                  const name = e.target.name.value;
                  const email = e.target.email.value;
                  const message = e.target.message.value;
              
                  // Construct the email body with encoded newlines and values
                  const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${encodeURIComponent(
                    message
                  )}`;
              
                  // Encode subject
                  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
              
                  // Create the mailto link
                  const mailtoLink = `mailto:vinaysandeep782@gmail.com?subject=${subject}&body=${emailBody}`;
              
                  // Try opening the default email client
                  const opened = window.open(mailtoLink);
              
                  // Alert if blocked or failed
                  if (!opened) {
                    alert(
                      "Unable to open your email client. Please send your message directly to vinaysandeep782@gmail.com"
                    );
                  }

                  // Clear the form
                  e.target.reset();
                }}
              >
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-md bg-primary border border-textSecondary focus:border-secondary focus:outline-none"
                  />
                </motion.div>
          
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-md bg-primary border border-textSecondary focus:border-secondary focus:outline-none"
                  />
                </motion.div>
          
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full px-4 py-2 rounded-md bg-primary border border-textSecondary focus:border-secondary focus:outline-none"
                  ></textarea>
                </motion.div>
          
                <motion.button
                  type="submit"
                  className="btn btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-tertiary py-8">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex gap-6">
              <motion.a
                href="https://github.com/VINAY-SANDEEP"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-2xl text-textSecondary hover:text-secondary transition-colors" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/vinaysandeep"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="text-2xl text-textSecondary hover:text-secondary transition-colors" />
              </motion.a>
              <motion.a
                href="mailto:vinaysandeep782@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope className="text-2xl text-textSecondary hover:text-secondary transition-colors" />
              </motion.a>
            </div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-textSecondary mb-2">
                © {new Date().getFullYear()} Dwarampudi Vinay Sandeep Reddy. All rights reserved.
              </p>
              <p className="text-sm text-textSecondary">
                Built with ❤️ using Next.js and Tailwind CSS
              </p>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}

// Component for Project Cards
function ProjectCard({ title, techStack, description, githubLink, imageUrl }) {
  return (
    <motion.div 
      className="bg-tertiary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="subheading mb-4">{title}</h3>
        <p className="text-textSecondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span key={index} className="text-sm bg-primary px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:underline inline-flex items-center"
        >
          <FaGithub className="mr-2" />
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
}

// Component for Certification Cards
function CertificationCard({ title, issuer, imageUrl }) {
  return (
    <motion.div 
      className="bg-tertiary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {imageUrl && (
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <h3 className="subheading mb-2">{title}</h3>
      <p className="text-textSecondary">{issuer}</p>
    </motion.div>
  );
}
