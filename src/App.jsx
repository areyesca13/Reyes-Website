import Navbar from './components/Navbar';
import './App.css'
import { useState, useEffect } from "react";

import selfie from './assets/selfie.jpg';
import sky from './assets/sky.jpg';
import maki from './assets/maki.jpg';
import bella from './assets/bella.jpg';
import hiking from './assets/hiking.jpg';
export default function App() {
  const images = [sky, maki, bella, hiking];

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
        <h1>Hello World! I'm Angel and welcome to my website</h1>
        <h2>I'm a software engineering new grad who loves building creative and practical projects.</h2>
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
        <h2>I love any outdoor activity such has hiking, camping, and fishing. I adore spending time with my
          friends, and my cat Maki! To wind down I like watching and analyzing sports like football and hockey.</h2></div>
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
    <h3>Sports Analytics</h3>
    <p>Built using React, CSS, and JavaScript. Features smooth scrolling, responsive design, and dynamic sections.</p>
    <p><strong>Tech:</strong> React, CSS, HTML</p>
    <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>

  <div className="project-card">
    <h3>Cat Activity Monitor</h3>
    <p>An IoT project that tracks when my cat uses the litter box and sends notifications to my phone via SMS.</p>
    <p><strong>Tech:</strong> Arduino, Python, Twilio API</p>
    <a href="https://github.com/yourusername/cat-monitor" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>

  <div className="project-card">
    <h3>SAMA</h3>
    <p>An IoT project that tracks when my cat uses the litter box and sends notifications to my phone via SMS.</p>
    <p><strong>Tech:</strong> Arduino, Python, Twilio API</p>
    <a href="https://github.com/yourusername/cat-monitor" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>

 
  <div className="project-card">
    <h3>Agricultre and Global warming ML model</h3>
    <p>An IoT project that tracks when my cat uses the litter box and sends notifications to my phone via SMS.</p>
    <p><strong>Tech:</strong> Arduino, Python, Twilio API</p>
    <a href="https://github.com/yourusername/cat-monitor" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>

  <div className="project-card">
    <h3>PLACEHOLDER</h3>
    <p>An IoT project that tracks when my cat uses the litter box and sends notifications to my phone via SMS.</p>
    <p><strong>Tech:</strong> Arduino, Python, Twilio API</p>
    <a href="https://github.com/yourusername/cat-monitor" target="_blank" rel="noopener noreferrer">View on GitHub</a>
  </div>

  <div className="project-card">
    <h3>PLACEHOLDER</h3>
    <p>An IoT project that tracks when my cat uses the litter box and sends notifications to my phone via SMS.</p>
    <p><strong>Tech:</strong> Arduino, Python, Twilio API</p>
    <a href="https://github.com/yourusername/cat-monitor" target="_blank" rel="noopener noreferrer">View on GitHub</a>
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


