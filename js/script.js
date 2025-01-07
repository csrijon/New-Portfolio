
let Resume = document.querySelector('.Resume');
let About = document.querySelector('.About');
let main = document.querySelector('main');
let Services = document.querySelector('.Services');
let Contact = document.querySelector(".Contact");
let Portfolio =  document.querySelector('.Portfolios');
let Frontend =  document.querySelector('.Frontend');

document.addEventListener('DOMContentLoaded', () => {

About.addEventListener('click', (e) => {
    e.preventDefault();
    main.innerHTML = '';
    checkbox.checked = false;
    main.style.height = 'auto';
    main.style.background = '#000';
    main.innerHTML = `
        <section class="About-section "  >
        <div class="aboutfirst wow fadeInLeftBig" style = " animation-delay: 0.1s;" >
            <h2>About</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, consequuntur?</p>
        </div>
        <section class="about-section wow fadeInUp" data-wow-delay="0.1s" style = " animation-delay: 0.2s"; >
            <div class="image-container">
                <img src="/image/WhatsApp_Image_2024-12-13_at_8.35.50_PM-removebg-preview.png" alt="Profile Image">
            </div>
            <div class="info-container">
                <h1>UI/UX Designer & Web Developer.</h1>
                <p class="intro-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="details">
                    <div class="left">
                        <p><strong>Birthday:</strong> 1 May 1995</p>
                        <p><strong>Website:</strong> www.example.com</p>
                        <p><strong>Phone:</strong> +123 456 7890</p>
                        <p><strong>City:</strong> New York, USA</p>
                    </div>
                    <div class="right">
                        <p><strong>Age:</strong> 30</p>
                        <p><strong>Degree:</strong> Master</p>
                        <p><strong>Email:</strong> email@example.com</p>
                        <p><strong>Freelance:</strong> Available</p>
                    </div>
                </div>
                <p class="description">
                    Officiis eligendi itaque labore et dolorem mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore.
                </p>
            </div>
        </section>

        <div class="stats-container">
            <div class="stat-card wow fadeInUp"  style = " animation-delay: 0.1s;" >
            <div class="icon"><img src="/image/smile-icon.svg" alt="Happy Clients"></div>
            <div class="number">232</div>
            <div class="label">Happy Clients</div>
            </div>
            <div class="stat-card wow fadeInUp"  style = " animation-delay: 0.3s;">
            <div class="icon"><img src="projects-icon.svg" alt="Projects"></div>
            <div class="number">521</div>
            <div class="label">Projects</div>
            </div>
            <div class="stat-card wow fadeInUp" style = " animation-delay: 0.5s;" >
            <div class="icon"><img src="support-icon.svg" alt="Hours of Support"></div>
            <div class="number">1463</div>
            <div class="label">Hours Of Support</div>
            </div>
            <div class="stat-card wow fadeInUp "  style = " animation-delay: 0.7s;">
            <div class="icon"><img src="workers-icon.svg" alt="Hard Workers"></div>
            <div class="number">15</div>
            <div class="label">Hard Workers</div>
            </div>
        </div>
        <section id="Skill-section">
            <div class="skills-container">
            <span class="skills-subtitle  wow fadeInLeftBig ">SKILLS</span>
            <div class="skills-underline wow fadeInLeftBig "></div>
        </div>
        <h1 class="skills-main-title wow fadeInLeftBig">MY SKILLS</h1>
        <div class="skills-section">
            <div class="skill">
                <div class="skill-title">HTML</div>
                <div class="progress-bar wow fadeInUp" style = " animation-delay: 0.1s;" >
                    <div class="progress-bar-fill" style="--progress: 90%;">90%</div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-title">CSS</div>
                <div class="progress-bar wow fadeInUp" style = " animation-delay: 0.1s;" >
                    <div class="progress-bar-fill" style="--progress: 80%;">80%</div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-title">CSS</div>
                <div class="progress-bar wow fadeInUp" style = " animation-delay: 0.1s;" >
                    <div class="progress-bar-fill" style="--progress: 80%;">80%</div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-title">CSS</div>
                <div class="progress-bar wow fadeInUp" style = " animation-delay: 0.1s;" >
                    <div class="progress-bar-fill" style="--progress: 80%;">80%</div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-title">CSS</div>
                <div class="progress-bar wow fadeInUp" style = " animation-delay: 0.1s;" >
                    <div class="progress-bar-fill" style="--progress: 80%;">80%</div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-title">JavaScript</div>
                <div class="progress-bar wow fadeInUp" style = " animation-delay: 0.1s;" >
                    <div class="progress-bar-fill" style="--progress: 70%;">70%</div>
                </div>
            </div>
        </div>
    </section>

        <div class="features-section">
            <div class="Feature">
            <span class="span-features" >FEATURES</span>
            <div class="skills-underline"></div>
        </div>
        <div class="Feature-interested" >I'M INTERESTED IN</div>
            <div class="features-grid">
                <div class="feature-card wow fadeInUp " style = " animation-delay: 0.1s;" >
                    <span class="feature-icon">&#x1F441;</span>
                    <span class="feature-title">Lorem Ipsum</span>
                </div>
                <div class="feature-card wow fadeInUp " style = " animation-delay: 0.2s;" >
                    <span class="feature-icon">&#x267E;</span>
                    <span class="feature-title">Dolor Sitema</span>
                </div>
                <div class="feature-card wow fadeInUp " style = " animation-delay: 0.3s;" >
                    <span class="feature-icon">&#x1F393;</span>
                    <span class="feature-title">Sed Perspiciatis</span>
                </div>
                <div class="feature-card wow fadeInUp " style = " animation-delay: 0.4s;" >
                    <span class="feature-icon">&#x2B50;</span>
                    <span class="feature-title">Magni Dolores</span>
                </div>
                <div class="feature-card wow fadeInUp " style = " animation-delay: 0.5s;" >
                    <span class="feature-icon">&#x21BA;</span>
                    <span class="feature-title">Nemo Enim</span>
                </div>
                <div class="feature-card wow fadeInUp " style = " animation-delay: 0.6s;" >
                    <span class="feature-icon">&#x1F4D8;</span>
                    <span class="feature-title">Eiusmod Tempor</span>
                </div>
                <div class="feature-card wow fadeInUp " style = " animation-delay: 0.7s;" >
                    <span class="feature-icon">&#x1F4FD;</span>
                    <span class="feature-title">Pira Neve</span>
                </div>
                <div class="feature-card wow fadeInUp " style = " animation-delay: 0.8s;" >
                    <span class="feature-icon">&#x2B1F;</span>
                    <span class="feature-title">Midela Teren</span>
                </div>
                <div class="feature-card wow fadeInUp " style = " animation-delay: 0.9s;" >
                    <span class="feature-icon">&#x1F517;</span>
                    <span class="feature-title">Dirada Pack</span>
                </div>
                <div class="feature-card wow fadeInUp " style = " animation-delay: 0.10;" >
                    <span class="feature-icon">&#x1F4AA;</span>
                    <span class="feature-title">Moton Ideal</span>
                </div>
                <div class="feature-card wow fadeInUp " style = " animation-delay: 0.11s;" >
                    <span class="feature-icon">&#x1F6A8;</span>
                    <span class="feature-title">Verdo Park</span>
                </div>
                <div class="feature-card wow fadeInUp " style = " animation-delay: 0.12s;" >
                    <span class="feature-icon">&#x1F31F;</span>
                    <span class="feature-title">Flavor Nivelanda</span>
                </div>
            </div>
        </div>
    </section>`
});

Resume.addEventListener("click", (e) => {
    e.preventDefault();
    main.innerHTML = '';
    main.style.background = '#000';
    main.style.height = '100%';
    checkbox.checked = false;
    main.innerHTML = `
    <div class="res-section">
    <div class="res wow fadeInLeftBig ">
      <h2>Resume</h2>
     </div>
     <div class="container">
        <!-- Left Column: Summary and Education -->
        <div class="column wow fadeInRightBig ">
            <div class="section">
                <h2>Summary</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <h3>BRANDON JOHNSON</h3>
                        <p>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
                        <ul class="contact">
                            <li>Portland par 127, Orlando, FL</li>
                            <li>(123) 456-7891</li>
                            <li>alice.barkley@example.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Education</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <h3>MASTER OF FINE ARTS & GRAPHIC DESIGN</h3>
                        <p>2015 - 2016</p>
                        <p>Rochester Institute of Technology, Rochester, NY</p>
                        <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.</p>
                    </div>
                    <div class="timeline-item">
                        <h3>BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h3>
                        <p>2010 - 2014</p>
                        <p>Rochester Institute of Technology, Rochester, NY</p>
                        <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Column: Professional Experience -->
        <div class="column wow fadeInLeftBig ">
            <div class="section">
                <h2>Professional Experience</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <h3>SENIOR GRAPHIC DESIGN SPECIALIST</h3>
                        <p>2019 - Present</p>
                        <p>Experion, New York, NY</p>
                        <ul>
                            <li>Lead in the design, development, and implementation of graphic communication materials.</li>
                            <li>Delegate tasks to a 7-member design team.</li>
                            <li>Supervise quality and accuracy of graphic materials.</li>
                            <li>Manage project budgets from $2,000 - $25,000.</li>
                        </ul>
                    </div>
                    <div class="timeline-item">
                        <h3>GRAPHIC DESIGN SPECIALIST</h3>
                        <p>2017 - 2018</p>
                        <p>Stepping Stone Advertising, New York, NY</p>
                        <ul>
                            <li>Developed marketing programs and design presentations.</li>
                            <li>Managed up to 5 projects under pressure.</li>
                            <li>Recommended graphic design strategies to clients.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>`
    new WOW().init();
})
Services.addEventListener("click", (e) => {
    e.preventDefault();
    main.innerHTML = ''; // Clear the main content
    main.style.background = '#000';
    checkbox.checked = false;
    main.innerHTML = `
       <section class="services-section" >
    <h2 class="services-title wow fadeInLeftBig ">Our Services</h2>
  <div class="card-container">
    <div class="card wow fadeInLeft">
      <div class="icon">
        <span class="material-icons">brush</span>
      </div>
      <h3>Web Design</h3>
      <p>The most modern and high-quality design made at a professional level.</p>
    </div>
    <div class="card wow fadeInRight">
      <div class="icon">
        <span class="material-icons">code</span>
      </div>
      <h3>Web Development</h3>
      <p>High-quality development of sites at the professional level.</p>
    </div>
    <div class="card wow fadeInLeft">
      <div class="icon">
        <span class="material-icons">photo_camera</span>
      </div>
      <h3>Mobile Photography</h3>
      <p>I make high-quality photos of any category at a professional level.</p>
    </div>
  </div>
</section>`;
});

Contact.addEventListener("click",(e) => {
  e.preventDefault();
  main.innerHTML = '';
  main.style.background = '#000';
  main.innerHTML = `
  <div class="contactus">
      <h2>Portfolio</h2>
      <form>      
        <input name="name" type="text" class="feedback-input" placeholder="Name" />   
        <input name="email" type="text" class="feedback-input" placeholder="Email" />
        <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" value="SUBMIT"/>
      </form>
    </div>`
});

Portfolio.addEventListener("click",(e) => {
    e.preventDefault();
    main.innerHTML = '';
    main.style.background = '#000'; 
    main.innerHTML = `
    <div class="portfolio">
      <div class="port">
        <h2>Portfolio</h2>
      </div>
      <div class="head">
        <div class="nav">
          <ul class="categories">
            <li><a href="#" class="active">All</a></li>
            <li><a  class = "Frontend" href="#">Frontend</a></li>
            <li><a href="#">FullStack</a></li>
            <li><a href="#">Photography</a></li>
          </ul>
        </div>
      </div>    
      <div class="mains">
        <section class="gallery">
          <div class="img">
            <img src="/image/27230.jpg" alt="Portfolio Item 1">
            <div class="caption">Portfolio Item 1</div>
          </div>
          <div class="img">
            <img src="https://img.freepik.com/free-photo/production-manufacture-process-chart-diagram_53876-120646.jpg" alt="Portfolio Item 2">
            <div class="caption">Portfolio Item 2</div>
          </div>
          <div class="img">
            <img src="/image/Portfolio.png" alt="Portfolio Item 3">
            <div class="caption">Portfolio Item 3</div>
          </div>
          <div class="img Front">
            <img src="/image/GDG Website.png" alt="Portfolio Item 4">
            <div class="caption">Portfolio Item 4</div>
          </div>
          <div class="img">
            <img src="/image/Music Player.png" alt="Portfolio Item 5">
            <div class="caption">Portfolio Item 5</div>
          </div>
          <div class="img">
            <img src="/image/E-Learning Website.png" alt="Portfolio Item 6">
            <div class="caption">Portfolio Item 6</div>
          </div>
          <div class="img">
            <img src="/image/online Resturant.png" alt="Portfolio Item 7">
            <div class="caption">Portfolio Item 7</div>
          </div>
          <div class="img">
            <img src="/image/Currency Coverter.png" alt="Portfolio Item 8">
            <div class="caption">Portfolio Item 8</div>
          </div>
          <div class="img">
            <img src="/image/Analog Clock.png" alt="Portfolio Item 9">
            <div class="caption">Portfolio Item 9</div>
          </div>
          <div class="img">
            <img src="/image/NetfixClone.png" alt="Portfolio Item 10">
            <div class="caption">Portfolio Item 10</div>
          </div>
        </section>
      </div>
    </div>`;        
});
});

Frontend.addEventListener("click",(e) => {
  e.preventDefault();
if (Frontend.classList.contains('Front')) {
    
    
}});