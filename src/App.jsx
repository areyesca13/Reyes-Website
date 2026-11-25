import Navbar from './components/Navbar';
import './App.css'
import { useState, useEffect } from "react";

import selfie from './assets/selfie.jpg';
import sky from './assets/sky.jpg';
import maki from './assets/maki.jpg';
import bella from './assets/bella.jpg';
import hiking from './assets/hiking.jpg';
import tobermory from './assets/me-tobermory.jpg';
import fall from './assets/me-fall.jpg';
import jacob from './assets/jacob-me.jpg';
export default function App() {
  const images = [fall, maki, bella, hiking, tobermory,sky, jacob];

  const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className='App'>
      <Navbar/>

      <section id="home" className='home section'>
        <div className="home-content">
          <img src={selfie} alt="Angel" className='home-image'/>
        <h1>Hello World! </h1>
        <h1>I'm Angel and welcome to my website</h1>
        <h2>I'm a software engineering grad who loves building creative and practical projects.</h2>
        </div>
        
      </section>
      <svg className="divider" viewBox="0 0 1440 200">
            <path 
              fill="#1e2f59"
              d="
          M0,160 
          C240,200 360,100 480,150 
          C600,200 720,120 840,160 
          C960,200 1080,80 1200,140 
          C1320,200 1440,120 1440,120 
          L1440,200 
          L0,200 
          Z"
            />
      </svg>
      <section id="about" className="about section">
        <div className="about-container">
    
    <div className="about-text">
      <div className="about-personal">
        <h1>Who Am I?</h1>
        <h2>I love any physical and outdoor activity such has rock climbing, hiking, camping, and fishing. I adore spending time with my
          friends, my lovely boyfriend, and my cat Maki! To wind down I like photographing nature, reading classical lit, or watching and analyzing sports like football and hockey.</h2></div>
      <div className="about-programming">
        <h1>Programming Interests</h1>
        <h2>My main interests are in cyber security and embedded systems programming, where I enjoy tackling real-world technical challenges.</h2>
        <h2>Lets take a look at my recent projects!</h2>
      </div>
    </div>

    
    <div className="about-slideshow">
  <img
    src={images[currentIndex]}
    alt="About slideshow"
    className="slideshow-image"
  />

  <div className="slideshow-dots">
    {images.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === currentIndex ? "active" : ""}`}
        onClick={() => setCurrentIndex(index)}
      />
    ))}
  </div>
</div>

  </div>
        
      </section>
      <svg className="divider2" viewBox="0 0 1440 200">
            <path 
              fill="#e7e9ee"
              d="
          M0,160 
          C240,200 360,100 480,150 
          C600,200 720,120 840,160 
          C960,200 1080,80 1200,140 
          C1320,200 1440,120 1440,120 
          L1440,200 
          L0,200 
          Z"
            />
      </svg>
      <section id="projects" className="projects">
        <h1>Projects</h1>
        
        <div className="projects-grid">
  <div className="project-card">
    <h3>NFL Analytics Dashboard</h3>
    <p>Currently developing a cloud-hosted database and Streamlit dashboard analyzing 5 seasons of NFL data. 
      It measures analytics such as quaterback impact and team efficiency.</p>
    <p><strong>Tech:</strong> Python, PostgreSQL, pandas, Streamlit</p>
    <a href="https://github.com/areyesca13/portfolio" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>

  <div className="project-card">
    <h3>Cat Activity Monitor</h3>
    <p>An ESP32 prototype that uses a distance sensor to detect when a cat enters and leaves a hooded litter box. 
      It filters out brief interruptions to count completed visits and tracks daily usage, with a simulation for testing the logic before connecting the hardware.</p>
    <p><strong>Tech:</strong> C++, ESP32, VL53L0X sensor, PlatformIO</p>
    <a href="https://github.com/areyesca13/MAKI" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>

  <div className="project-card">
    <h3>SAMA</h3>
    <p>A cross-platform app for designing and optimizing hybrid energy systems, now used by researchers and developers at Western's FAST Research Group. 
      Our team built the frontend features and UI then connected them to the Python backend.</p>
    <p><strong>Tech:</strong> React, Electron, Material UI, Python, REST APIs, Git</p>
    <a href="https://github.com/areyesca13/swecapstone2024" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>

 
  <div className="project-card">
    <h3>Agricultre and Global warming ML model</h3>
    <p>Group project: machine learning analysis of 10,000 climate and agriculture records that predicts crop yield from temperature, precipitation, CO₂ emissions and extreme weather (R² = 0.83). 
      It also compares how different crops and adaptation strategies hold up under extreme weather conditions.</p>
    <p><strong>Tech:</strong> Python, pandas, scikit-learn, Matplotlib, Seaborn, Google Colab</p>
    <a href="https://github.com/areyesca13/ML_ProjectG15" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>

  <div className="project-card">
    <h3>Download Security Scanner</h3>
    <p>A Python tool that scans downloaded files for warning signs like known-bad hashes, disguised extensions and mismatched 
      file contents. It gives each file a risk score so the most dangerous ones are reviewed first.</p>
    <p><strong>Tech:</strong> Python, SHA-256, pytest</p>
    <a href="https://github.com/areyesca13/Reyes" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>

  

</div>

      </section>
      <section id="contact" className='contact'>
        <div className="contact-container">
          <div className='contact-form'>
            <h2>Contact Me</h2>
            <form 
                action="mailto:areyesca88@outlook.com"
                method="POST"
                encType="text/plain">
                
              <input type='text' name="name" placeholder="Your Name" required />
              <input type='email' name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required />
              <button type="submit">Send</button>
                </form>
          </div>

          <div className='contact-social'>
            <h2>My Socials</h2>
            <div className="social-links">
              <a
          href="https://www.linkedin.com/in/a-reyesca/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          LinkedIn
        </a>
         <a
          href="https://github.com/areyesca13"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          GitHub
        </a>
        <a
          href="https://instagram.com/angellreyess_"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          Instagram
        </a>
            </div>

          </div>
        </div>
       
        
      
      </section>
    </div>
  );
  
}


