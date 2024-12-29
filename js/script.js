let Resume = document.querySelector('.Resume');
let About = document.querySelector('.About');
let main = document.querySelector('main');
let Services = document.querySelector('.Services');

About.addEventListener('click', (e) => {
    e.preventDefault();
    main.innerHTML = '';
    main.style.height = 'auto';
    main.style.background = '#000';
    main.innerHTML = `
        <section class="About-section">
        <div class="aboutfirst">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, consequuntur?</p>
        </div>
        <section class="about-section">
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
            <div class="stat-card">
            <div class="icon"><img src="/image/smile-icon.svg" alt="Happy Clients"></div>
            <div class="number">232</div>
            <div class="label">Happy Clients</div>
            </div>
            <div class="stat-card">
            <div class="icon"><img src="projects-icon.svg" alt="Projects"></div>
            <div class="number">521</div>
            <div class="label">Projects</div>
            </div>
            <div class="stat-card">
            <div class="icon"><img src="support-icon.svg" alt="Hours of Support"></div>
            <div class="number">1463</div>
            <div class="label">Hours Of Support</div>
            </div>
            <div class="stat-card">
            <div class="icon"><img src="workers-icon.svg" alt="Hard Workers"></div>
            <div class="number">15</div>
            <div class="label">Hard Workers</div>
            </div>
        </div>
        <section id="Skill-section">
            <div class="skills-container">
            <span class="skills-subtitle">SKILLS</span>
            <div class="skills-underline"></div>
        </div>
        <h1 class="skills-main-title">MY SKILLS</h1>
        <div class="skills-section">
            <div class="skill">
                <div class="skill-title">HTML</div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="--progress: 90%;">90%</div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-title">CSS</div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="--progress: 80%;">80%</div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-title">CSS</div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="--progress: 80%;">80%</div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-title">CSS</div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="--progress: 80%;">80%</div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-title">CSS</div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="--progress: 80%;">80%</div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-title">JavaScript</div>
                <div class="progress-bar">
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
                <div class="feature-card">
                    <span class="feature-icon">&#x1F441;</span>
                    <span class="feature-title">Lorem Ipsum</span>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">&#x267E;</span>
                    <span class="feature-title">Dolor Sitema</span>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">&#x1F393;</span>
                    <span class="feature-title">Sed Perspiciatis</span>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">&#x2B50;</span>
                    <span class="feature-title">Magni Dolores</span>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">&#x21BA;</span>
                    <span class="feature-title">Nemo Enim</span>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">&#x1F4D8;</span>
                    <span class="feature-title">Eiusmod Tempor</span>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">&#x1F4FD;</span>
                    <span class="feature-title">Pira Neve</span>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">&#x2B1F;</span>
                    <span class="feature-title">Midela Teren</span>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">&#x1F517;</span>
                    <span class="feature-title">Dirada Pack</span>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">&#x1F4AA;</span>
                    <span class="feature-title">Moton Ideal</span>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">&#x1F6A8;</span>
                    <span class="feature-title">Verdo Park</span>
                </div>
                <div class="feature-card">
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
    main.innerHTML = `
    <div class="resume-container">
    <div class="left-section">
      <h2>Sumary</h2>
      <div class="section-item">
        <div class="timeline-icon"></div>
        <h3>BRANDON JOHNSON</h3>
        <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
        <ul>
          <li>Portland par 127, Orlando, FL</li>
          <li>(123) 456-7891</li>
          <li>alice.barkley@example.com</li>
        </ul>
      </div>

      <h2>Education</h2>
      <div class="section-item">
        <div class="timeline-icon"></div>
        <h3>MASTER OF FINE ARTS & GRAPHIC DESIGN</h3>
        <p><strong>2015 - 2016</strong></p>
        <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
        <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.</p>
      </div>
      <div class="section-item">
        <div class="timeline-icon"></div>
        <h3>BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h3>
        <p><strong>2010 - 2014</strong></p>
        <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
        <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius.</p>
      </div>
    </div>
    <div class="right-section">
      <h2>Professional Experience</h2>
      <div class="section-item">
        <div class="timeline-icon"></div>
        <h3>SENIOR GRAPHIC DESIGN SPECIALIST</h3>
        <p><strong>2019 - Present</strong></p>
        <p><em>Experion, New York, NY</em></p>
        <ul>
          <li>Lead in the design, development, and implementation of graphic, layout, and production communication materials</li>
          <li>Delegate tasks to team members and provide counsel on all aspects of the project</li>
          <li>Oversee project budgets ranging from $2,000 - $25,000</li>
        </ul>
      </div>
      <div class="section-item">
        <div class="timeline-icon"></div>
        <h3>GRAPHIC DESIGN SPECIALIST</h3>
        <p><strong>2017 - 2018</strong></p>
        <p><em>Stepping Stone Advertising, New York, NY</em></p>
        <ul>
          <li>Developed marketing programs: logos, brochures, infographics, presentations</li>
          <li>Managed up to 5 projects simultaneously</li>
          <li>Recommended design strategies for clients</li>
        </ul>
      </div>
    </div>
  </div>`
})
Services.addEventListener("click",(e) => {
    e.preventDefault();
    main.innerHTML = '';
    main.style.background = '#000';
    main.innerHTML = `
      <div class="card-container">
    <div class="card">
      <div class="icon">
        <span class="material-icons">brush</span>
      </div>
      <h3>Web Design</h3>
      <p>The most modern and high-quality design made at a professional level.</p>
    </div>
    <div class="card">
      <div class="icon">
        <span class="material-icons">code</span>
      </div>
      <h3>Web Development</h3>
      <p>High-quality development of sites at the professional level.</p>
    </div>
    <div class="card">
      <div class="icon">
        <span class="material-icons">photo_camera</span>
      </div>
      <h3>Mobile Photography</h3>
      <p>I make high-quality photos of any category at a professional level.</p>
    </div>
  </div>`
})



document.addEventListener('DOMContentLoaded', () => {
    VANTA.DOTS({
el: "#rings",
mouseControls: true,
touchControls: true,
gyroControls: false,
minHeight: 200.00,
minWidth: 200.00,
scale: 1.00,
scaleMobile: 1.00,
color: "#18d26e",
color2: "#18d26e",
backgroundColor:"black"
})
})