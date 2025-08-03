  
        // Projects data
        const projects = [
            {
                image: "💵",
                title: "Budget Buddy",
                description: "It is a simple and smart expense tracker that helps you manage your finances, set budgets, and track spending effortlessly. ",
                tech: ["HTML5", "CSS", "JavaScript", "Local Storage", "Responsive UI"],
                github: "https://github.com/Bhumica-jaiswal/Budget_Buddy",
                demo: "https://singular-semolina-1ac67d.netlify.app/"
            },
            {
                image: "⚙️",
                title: "URL-Shortner",
                description: "A simple and efficient URL shortening service built using Node.js and Express.js. This project allows users to convert long, unwieldy URLs into short, shareable links",
                tech: ["Node.js", "Express.js", "MongoDB", "REST APIs", ],
                github: "https://github.com/Bhumica-jaiswal/URL_SHORTNER",
            },
            {
                image: "🌏🌞",
                title: "3D-Solar-System",
                description: "A fully interactive 3D model of the solar system . It features orbiting planets with realistic textures, lighting, and rotation animations. Users can zoom, rotate, and explore the system in real-time.",
                tech: ["JavaScript", "Three.js", "WEBGL", "CSS3", "HTML5"],
                github: "https://github.com/Bhumica-jaiswal/3D-Solar-System",
                demo: "playful-dasik-335a17.netlify.app"
            },
            {
                image: "💼",
                title: "Portfolio Website",
                description: "My personal portfolio site to showcase my skills, projects, and experience. Fully responsive and designed with modern UI/UX best practices and smooth animations.",
                tech: ["HTML5", "CSS3", "JavaScript", "Netlify"],
                github: "https://github.com/Bhumica-jaiswal/My_Portfolio",
                demo: "https://bhumica.netlify.app/"
            },
           
        ];

        let currentSlide = 0;
        let isAnimating = false;
        let autoSlideTimer = null;

        // Enhanced Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const delay = element.dataset.delay || 0;
                    
                    setTimeout(() => {
                        element.classList.add('animate');
                        
                        // Special handling for different elements
                        if (element.classList.contains('section-header')) {
                            animateSectionHeader(element);
                        }
                        
                        if (element.classList.contains('about-text')) {
                            animateAboutText(element);
                        }
                        
                        if (element.classList.contains('skill-category')) {
                            animateSkillCategory(element);
                        }
                        
                        if (element.classList.contains('stat-item')) {
                            animateStatItem(element);
                        }
                        
                        if (element.classList.contains('contact-item')) {
                            animateContactItem(element);
                        }
                        
                        if (element.classList.contains('form-group')) {
                            animateFormGroup(element);
                        }
                        
                        if (element.classList.contains('education-item')) {
                            animateEducationItem(element);
                        }
                    }, delay);
                }
            });
        }, observerOptions);

        // Animation functions
        function animateSectionHeader(element) {
            const title = element.querySelector('.section-title');
            const subtitle = element.querySelector('.section-subtitle');
            
            setTimeout(() => {
                if (title) title.style.transform = 'translateY(0)';
            }, 200);
            
            setTimeout(() => {
                if (subtitle) subtitle.style.transform = 'translateY(0)';
            }, 400);
        }

        function animateAboutText(element) {
            const paragraphs = element.querySelectorAll('p');
            paragraphs.forEach((p, index) => {
                setTimeout(() => {
                    p.style.opacity = '1';
                    p.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }

        function animateSkillCategory(element) {
            const tags = element.querySelectorAll('.skill-tag');
            tags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.opacity = '1';
                    tag.style.transform = 'scale(1)';
                }, index * 100);
            });
        }

        function animateStatItem(element) {
            const number = element.querySelector('.stat-number');
            const target = parseInt(element.dataset.target) || 0;
            let current = 0;
            const increment = target / 50;
            const suffix = number.textContent.replace(/\d+/g, '');
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(counter);
                }
                number.textContent = Math.floor(current) + suffix;
            }, 40);
        }

        function animateContactItem(element) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }

        function animateFormGroup(element) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }

        function animateEducationItem(element) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }

        // Navigation functions with enhanced animations
        function showSection(sectionId) {
            // Update progress bar
            updateProgressBar();
            
            // Update nav items with animation
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('active');
                el.style.transform = 'translateY(0)';
            });
            
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.remove('active');
            });
            
            // Find and activate nav item
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                if (item.getAttribute('onclick').includes(sectionId)) {
                    item.classList.add('active');
                    item.style.transform = 'translateY(-2px)';
                }
            });

            // Show section with stagger animation
            const section = document.getElementById(sectionId);
            section.classList.add('active');
            
            // Animate section elements
            setTimeout(() => {
                animateSectionElements(section);
            }, 100);
            
            // Hide mobile menu with animation
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.remove('active');
            
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function animateSectionElements(section) {
            const animationElements = section.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
            
            animationElements.forEach((element, index) => {
                setTimeout(() => {
                    observer.observe(element);
                }, index * 100);
            });

            // Observe other elements
            const skillCategories = section.querySelectorAll('.skill-category');
            const educationItems = section.querySelectorAll('.education-item');
            const contactItems = section.querySelectorAll('.contact-item');
            const formGroups = section.querySelectorAll('.form-group');
            const statItems = section.querySelectorAll('.stat-item');
            const sectionHeaders = section.querySelectorAll('.section-header');

            [...skillCategories, ...educationItems, ...contactItems, ...formGroups, ...statItems, ...sectionHeaders].forEach(element => {
                observer.observe(element);
            });
        }

        function toggleMobileMenu() {
            const navMenu = document.getElementById('navMenu');
            const menuToggle = document.getElementById('menuToggle');
            const isActive = navMenu.classList.contains('active');
            
            if (isActive) {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '☰';
                menuToggle.style.transform = 'rotate(0deg)';
            } else {
                navMenu.classList.add('active');
                menuToggle.innerHTML = '✕';
                menuToggle.style.transform = 'rotate(180deg)';
            }
        }

        function updateProgressBar() {
            const progressBar = document.getElementById('progressBar');
            const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
            const activeSection = document.querySelector('.page-section.active').id;
            const currentIndex = sections.indexOf(activeSection);
            const progress = (currentIndex + 1) / sections.length;
            
            progressBar.style.transform = `scaleX(${progress})`;
        }

        // Projects Slider functions with enhanced animations
        function initializeSlider() {
            const sliderTrack = document.getElementById('sliderTrack');
            const sliderDots = document.getElementById('sliderDots');
            
            // Render slides with enhanced content
            sliderTrack.innerHTML = '';
            projects.forEach((project, idx) => {
                const card = document.createElement('div');
                card.className = "project-card";
                card.innerHTML = `
                    <div class="project-image">
                        <span style="font-size: 4rem;">${project.image}</span>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tech">
                            ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.github}" class="project-link link-github" target="_blank">
                                <span>GitHub</span>
                            </a>
                            <a href="${project.demo}" class="project-link link-demo" target="_blank">
                                <span>Live Demo</span>
                            </a>
                        </div>
                    </div>
                `;
                sliderTrack.appendChild(card);
            });

            // Render dots
            sliderDots.innerHTML = '';
            projects.forEach((_, idx) => {
                const dot = document.createElement('span');
                dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
                dot.onclick = () => goToSlide(idx);
                sliderDots.appendChild(dot);
            });

            // Start auto-slide
            startAutoSlide();
        }

        function goToSlide(idx) {
            if (isAnimating || idx === currentSlide) return;
            
            isAnimating = true;
            currentSlide = idx;
            updateSlider();
            resetAutoSlide();
            
            setTimeout(() => { isAnimating = false; }, 800);
        }

        function nextSlide() {
            if (isAnimating) return;
            goToSlide((currentSlide + 1) % projects.length);
        }

        function prevSlide() {
            if (isAnimating) return;
            goToSlide((currentSlide - 1 + projects.length) % projects.length);
        }

        function updateSlider() {
            const sliderTrack = document.getElementById('sliderTrack');
            const dots = document.querySelectorAll('.slider-dot');
            const cards = document.querySelectorAll('.project-card');
            
            // Animate slide transition
            sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update dots with animation
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentSlide);
                if (idx === currentSlide) {
                    dot.style.transform = 'scale(1.4)';
                } else {
                    dot.style.transform = 'scale(1)';
                }
            });

            // Animate current card
            setTimeout(() => {
                cards[currentSlide].style.transform = 'scale(1.02)';
                setTimeout(() => {
                    cards[currentSlide].style.transform = 'scale(1)';
                }, 300);
            }, 400);
        }

        function startAutoSlide() {
            autoSlideTimer = setInterval(nextSlide, 6000);
        }

        function resetAutoSlide() {
            if (autoSlideTimer) {
                clearInterval(autoSlideTimer);
                startAutoSlide();
            }
        }

        // Enhanced scroll effects
        function handleScroll() {
            const header = document.getElementById('header');
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Parallax effect for floating elements
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.1;
                const yPos = -(scrollY * speed);
                element.style.transform += ` translateY(${yPos}px)`;
            });
        }

        // Enhanced photo interactions
        function initPhotoInteractions() {
            const photoWrappers = document.querySelectorAll('.photo-wrapper');
            
            photoWrappers.forEach(wrapper => {
                const photo = wrapper.querySelector('.photo');
                
                wrapper.addEventListener('mousemove', (e) => {
                    const rect = wrapper.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = (y - centerY) / centerY * -15;
                    const rotateY = (x - centerX) / centerX * 15;
                    
                    wrapper.style.transform = `
                        translateY(-10px) 
                        rotateX(${rotateX}deg) 
                        rotateY(${rotateY}deg)
                        scale(1.05)
                    `;
                });

                wrapper.addEventListener('mouseleave', () => {
                    wrapper.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg) scale(1)';
                });
            });
        }

        // Form handling with enhanced animations
        function initContactForm() {
            const form = document.getElementById('contactForm');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitBtn = form.querySelector('button[type="submit"]');
                const formData = new FormData(this);
                const name = formData.get('name');
                
                // Add loading state
                submitBtn.classList.add('btn-loading');
                submitBtn.textContent = '';
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.classList.remove('btn-loading');
                    submitBtn.textContent = 'Send Message';
                    
                    // Show success message
                    showSuccessMessage(`Thank you for reaching out, ${name}! I will get back to you soon.`);
                    
                    // Reset form with animation
                    const inputs = form.querySelectorAll('input, textarea');
                    inputs.forEach((input, index) => {
                        setTimeout(() => {
                            input.style.transform = 'scale(0.95)';
                            setTimeout(() => {
                                input.value = '';
                                input.style.transform = 'scale(1)';
                            }, 150);
                        }, index * 100);
                    });
                }, 2000);
            });
        }

        function showSuccessMessage(message) {
            const successDiv = document.createElement('div');
            successDiv.className = 'success-message';
            successDiv.textContent = message;
            document.body.appendChild(successDiv);
            
            setTimeout(() => {
                if (document.body.contains(successDiv)) {
                    document.body.removeChild(successDiv);
                }
            }, 4000);
        }

        // Keyboard navigation
        function initKeyboardNavigation() {
            document.addEventListener('keydown', (e) => {
                const activeSection = document.querySelector('.page-section.active');
                
                // Project navigation
                if (activeSection && activeSection.id === 'projects') {
                    if (e.key === 'ArrowLeft') {
                        e.preventDefault();
                        prevSlide();
                    }
                    if (e.key === 'ArrowRight') {
                        e.preventDefault();
                        nextSlide();
                    }
                }
                
                // Section navigation
                const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
                const currentIndex = sections.indexOf(activeSection.id);
                
                if (e.key === 'ArrowUp' && e.ctrlKey) {
                    e.preventDefault();
                    const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
                    showSection(sections[prevIndex]);
                }
                
                if (e.key === 'ArrowDown' && e.ctrlKey) {
                    e.preventDefault();
                    const nextIndex = (currentIndex + 1) % sections.length;
                    showSection(sections[nextIndex]);
                }
            });
        }

        // Mouse tracking effects
        function initMouseEffects() {
            let mouseX = 0, mouseY = 0;
            let currentX = 0, currentY = 0;
            
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX / window.innerWidth;
                mouseY = e.clientY / window.innerHeight;
            });
            
            function animateElements() {
                currentX += (mouseX - currentX) * 0.1;
                currentY += (mouseY - currentY) * 0.1;
                
                const floatingElements = document.querySelectorAll('.floating-element');
                floatingElements.forEach((element, index) => {
                    const speed = (index + 1) * 0.5;
                    const x = (currentX - 0.5) * speed * 20;
                    const y = (currentY - 0.5) * speed * 20;
                    
                    element.style.transform += ` translate(${x}px, ${y}px)`;
                });
                
                requestAnimationFrame(animateElements);
            }
            
            animateElements();
        }

        // Initialize everything
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize all components
            initializeSlider();
            initPhotoInteractions();
            initContactForm();
            initKeyboardNavigation();
            initMouseEffects();
            
            // Set up event listeners
            document.getElementById('sliderPrev').onclick = prevSlide;
            document.getElementById('sliderNext').onclick = nextSlide;
            window.addEventListener('scroll', handleScroll);
            
            // Initialize progress bar
            updateProgressBar();
            
            // Observe initial elements
            const initialElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
            initialElements.forEach(element => observer.observe(element));
            
            // Pause auto-slide on hover
            const slider = document.querySelector('.projects-slider');
            slider.addEventListener('mouseenter', () => {
                if (autoSlideTimer) clearInterval(autoSlideTimer);
            });
            slider.addEventListener('mouseleave', startAutoSlide);
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                const navMenu = document.getElementById('navMenu');
                const menuToggle = document.getElementById('menuToggle');
                
                if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                    navMenu.classList.remove('active');
                    menuToggle.innerHTML = '☰';
                    menuToggle.style.transform = 'rotate(0deg)';
                }
            });

            // Hide mobile menu on window resize
            window.addEventListener('resize', function() {
                if(window.innerWidth > 768) {
                    const navMenu = document.getElementById('navMenu');
                    const menuToggle = document.getElementById('menuToggle');
                    navMenu.classList.remove('active');
                    menuToggle.innerHTML = '☰';
                    menuToggle.style.transform = 'rotate(0deg)';
                }
            });
            
            // Add subtle entrance animation to home section
            setTimeout(() => {
                document.querySelector('#home').style.opacity = '1';
            }, 100);
        });
    