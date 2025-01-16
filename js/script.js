document.addEventListener('DOMContentLoaded', () => {
    let Resume = document.querySelector('.Resume');
    let About = document.querySelector('.About');
    let main = document.querySelector('main');
    let Services = document.querySelector('.Services');
    let Contact = document.querySelector(".Contact");
    let Portfolio = document.querySelector('.Portfolios');

    const aboutsection = `
            <section class="About-section "  >
        <div class="aboutfirst wow fadeInLeftBig" style = " animation-delay: 0.1s;" >
            <h2>About Me</h2>
            <p>I'm an aspiring software developer who loves creating dynamic, responsive, and user-friendly web applications using modern technologies and creative design ideas.</p>
        </div>
        <section class="about-section wow fadeInUp" data-wow-delay="0.1s" style = " animation-delay: 0.2s"; >
            <div class="image-container">
                <img src="/image/srijon_image-modified-removebg-preview.png" alt="Profile Image">
            </div>
            <div class="info-container">
                <h1>Software Developer & Frontend Web Developer.</h1>
                <p class="intro-text">
                    I'm Srijon Chowdhury, currently pursuing a BCA degree at Maulana Abul Kalam Azad University of Technology, West Bengal
                </p>
                <div class="details">
                    <div class="left">
                        <p><strong>Birthday:</strong> 8 July 2004</p>
                         <p><strong>Website:</strong> www.example.com</p>
                        <p><strong>Phone:</strong>+917029046473</p>
                        <p><strong>City:</strong>Kolkata</p>
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
                <div class="skill-title">JavaScript</div>
                <div class="progress-bar wow fadeInUp" style = " animation-delay: 0.1s;" >
                    <div class="progress-bar-fill" style="--progress: 80%;">80%</div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-title">Python</div>
                <div class="progress-bar wow fadeInUp" style = " animation-delay: 0.1s;" >
                    <div class="progress-bar-fill" style="--progress: 80%;">80%</div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-title">SQL</div>
                <div class="progress-bar wow fadeInUp" style = " animation-delay: 0.1s;" >
                    <div class="progress-bar-fill" style="--progress: 80%;">80%</div>
                </div>
            </div>
            <div class="skill">
                <div class="skill-title">Bootstrap</div>
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
                    <span class="feature-title">AL Ml </span>
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

    About.addEventListener('click', (e) => {
        e.preventDefault();
        checkbox.checked = false;
        main.style.height = 'auto';
        main.style.background = '#000';
        main.innerHTML = aboutsection;
    });

    const resumesection = `
<div class="res-section">
    <div class="res wow fadeInLeftBig ">
      <h2>Resume</h2>
     </div>
     <div class="container">
        <!-- Left Column: Summary and Education -->
        <div class="column wow fadeInUp ">
            <div class="section">
                <h2>Summary</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <h3>Srijon Chowdhury</h3>
                        <p>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
                        <ul class="contact">
                            <li>Portland par 127, Orlando, FL</li>
                            <li>+917029046473</li>
                            <li>csrijon92@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Education</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <h3>Bachelor of Computer Applications</h3>
                        <p>2022 - 2025</p>
                        <p>Maulana Abul Kalam Azad University of Technology, West Bengal</p>
                        <p>Currently Pursuing BCA Degree final year</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Column: Professional Experience -->
        <div class="column wow fadeInUp ">
            <div class="section">
                <h2>Professional Experience</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <h3>Web Development Intern</h3>
                        <p>6 july 2023 - Present</p>
                        <p>Euphoria Genx, Kolkata</p>
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

    Resume.addEventListener("click", (e) => {
        e.preventDefault();
        main.style.background = '#000';
        main.style.height = '100vh';
        checkbox.checked = false;
        main.innerHTML = resumesection
        new WOW().init();
    })

    const servicessection = ` <section class="services-section" >
    <h2 class="services-title wow fadeInLeftBig ">Our Services</h2>
  <div class="card-container">
    <div class="card wow fadeInUp">
      <div class="icon">
        <span class="material-icons">brush</span>
      </div>
      <h3>Web Design</h3>
      <p>The most modern and high-quality design made at a professional level.</p>
    </div>
    <div class="card wow fadeInUp">
      <div class="icon">
        <span class="material-icons">code</span>
      </div>
      <h3>Web Development</h3>
      <p>High-quality development of sites at the professional level.</p>
    </div>
    <div class="card wow fadeInUp">
      <div class="icon">
        <span class="material-icons">photo_camera</span>
      </div>
      <h3>Mobile Photography</h3>
      <p>I make high-quality photos of any category at a professional level.</p>
    </div>
  </div>
</section>`

    Services.addEventListener("click", (e) => {
        e.preventDefault();
        main.innerHTML = '';
        main.style.background = '#000';
        checkbox.checked = false;
        main.innerHTML = servicessection;
    });
    const contactsection = `<div class="contactus">
      <h2 class = "wow fadeInLeftBig" >Contact Us</h2>
      <form  >      
        <input name="name" type="text" class="feedback-input" placeholder="Name" />   
        <input name="email" type="text" class="feedback-input" placeholder="Email" />
        <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" value="SUBMIT"/>
      </form>
    </div>`

    Contact.addEventListener("click", (e) => {
        e.preventDefault();
        main.innerHTML = '';
        main.style.background = '#000';
        if (checkbox) {
            checkbox.checked = false;
        }
        main.innerHTML = contactsection
    });
    const portfolioItems = [
        { img: "/image/27230.jpg", alt: "Portfolio Item 1", category: "all" },
        { img: "https://img.freepik.com/free-photo/production-manufacture-process-chart-diagram_53876-120646.jpg", alt: "Portfolio Item 2", category: "all" },
        { img: "/image/Portfolio.png", alt: "Portfolio Item 3", category: "all" },
        { img: "/image/GDG Website.png", alt: "Portfolio Item 4", category: "Front" },
        { img: "/image/Music Player.png", alt: "Portfolio Item 5", category: "all" },
        { img: "/image/E-Learning Website.png", alt: "Portfolio Item 6", category: "all" },
        { img: "/image/online Resturant.png", alt: "Portfolio Item 7", category: "all" },
        { img: "/image/Currency Coverter.png", alt: "Portfolio Item 8", category: "all" },
        { img: "/image/Analog Clock.png", alt: "Portfolio Item 9", category: "back" },
        { img: "/image/NetfixClone.png", alt: "Portfolio Item 10", category: "all" },
        { img: "/image/Nature Image.jpeg", alt: "Portfolio Item 11", category: "photo" },
        { img: "/image/sunset Image.jpeg", alt: "Portfolio Item 12", category: "photo" },
        { img: "/image/Tree Image.jpeg", alt: "Portfolio Item 13", category: "photo" }
      ];
      
      const Portfoliosection = `
        <div class="portfolio">
          <div class="port wow fadeInLeftBig ">
            <h2>Portfolio</h2>
          </div>
          <div class="head">
            <div class="nav">
              <ul class="categories">
                <li><a href="#" class="all-project">All</a></li>
                <li><a class="Front-project" href="#">Frontend</a></li>
                <li><a class="full-project" href="#">FullStack</a></li>
                <li><a class="photo-project" href="#">Photography</a></li>
              </ul>
            </div>
          </div>
          <div class="mains">
            <section class="gallery"></section>
          </div>
        </div>`;
      
      Portfolio.addEventListener("click", (e) => {
        e.preventDefault();
        main.innerHTML = '';
        main.style.background = '#000';
        if (checkbox) {
          checkbox.checked = false;
        }
        main.innerHTML = Portfoliosection;
      
        const gallery = document.querySelector('.gallery');
        
        portfolioItems.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.className = `img ${item.category} wow fadeInUp`;
          itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.alt}">
            <div class="caption">${item.alt}</div>
          `;
          gallery.appendChild(itemElement);
        });
      
        let allpicture = document.querySelectorAll('.gallery .img');
        let frontend = document.querySelector('.Front-project');
        let fullstack = document.querySelector('.full-project');
        let photography = document.querySelector('.photo-project');
        let allproject = document.querySelector('.all-project');
      
        frontend.addEventListener("click", () => {
          allpicture.forEach(picture => {
            picture.style.display = picture.classList.contains("Front") ? "block" : "none";
          });
        });
      
        fullstack.addEventListener("click", () => {
          allpicture.forEach(picture => {
            picture.style.display = picture.classList.contains("back") ? "block" : "none";
          });
        });
      
        photography.addEventListener("click", (e) => {
          e.preventDefault();
          allpicture.forEach(picture => {
            picture.style.display = picture.classList.contains("photo") ? "block" : "none";
          });
        });
      
        allproject.addEventListener("click", () => {
          allpicture.forEach(picture => {
            picture.style.display = "block";
          });
        });
      });
      
});