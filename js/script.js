
let About = document.querySelector('.About');
let main = document.querySelector('main');

About.addEventListener('click', (e) => {
    main.innerHTML = '';
    main.innerHTML = `
     <section class="About-section">
     <div class="aboutfirst">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, consequuntur?</p>
     </div>
     <section class="about-section">
        <div class="image-container">
            <img src="/image/" alt="Profile Image">
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

    <div class="features-section">
        <h2>FEATURES<br> I'M INTERESTED IN</h2>
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

