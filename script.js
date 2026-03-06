/* ========================================
   PlacementApp - Dynamic JavaScript
   ======================================== */

// ========================================
// Data Management
// ========================================

// Initialize data from localStorage or use defaults
function getJobsData() {
    const stored = localStorage.getItem('jobsData');
    if (stored) {
        return JSON.parse(stored);
    }
    
    const defaultJobs = [
        {
            id: 1,
            title: "Senior Software Engineer",
            company: "TechCorp India",
            companyLogo: "💻",
            location: "Bangalore, Karnataka",
            salary: "₹18-25 LPA",
            type: "Full-time",
            posted: "2 days ago",
            featured: true,
            description: "Leading tech company seeking experienced software engineer with expertise in Java, Spring Boot, and microservices.",
            requirements: ["5+ years experience", "Java/Spring Boot", "Microservices", "Cloud AWS/Azure", "REST APIs"]
        },
        {
            id: 2,
            title: "Product Manager",
            company: "StartupX",
            companyLogo: "🚀",
            location: "Gurgaon, Haryana",
            salary: "₹15-22 LPA",
            type: "Full-time",
            posted: "1 day ago",
            featured: false,
            description: "Fast-growing startup looking for product visionary to lead product development.",
            requirements: ["3+ years PM experience", "Agile/Scrum", "Data Analytics", "User Research"]
        },
        {
            id: 3,
            title: "Data Analyst",
            company: "DataDriven Inc",
            companyLogo: "📊",
            location: "Hyderabad, Telangana",
            salary: "₹8-12 LPA",
            type: "Full-time",
            posted: "3 days ago",
            featured: false,
            description: "Analytics company seeking data expert to derive business insights.",
            requirements: ["SQL expert", "Python/R", "Tableau/PowerBI", "Statistics"]
        },
        {
            id: 4,
            title: "UX Designer",
            company: "DesignHub",
            companyLogo: "🎨",
            location: "Mumbai, Maharashtra",
            salary: "₹10-15 LPA",
            type: "Full-time",
            posted: "5 days ago",
            featured: false,
            description: "Creative design agency needs talented UX designer.",
            requirements: ["Figma/Sketch", "User Research", "Prototyping", "Design Systems"]
        },
        {
            id: 5,
            title: "Marketing Manager",
            company: "BrandBuilders",
            companyLogo: "📢",
            location: "Delhi, NCR",
            salary: "₹12-18 LPA",
            type: "Full-time",
            posted: "1 week ago",
            featured: false,
            description: "Marketing firm seeking experienced manager for digital campaigns.",
            requirements: ["Digital Marketing", "SEO/SEM", "Content Strategy", "Team Management"]
        },
        {
            id: 6,
            title: "DevOps Engineer",
            company: "CloudTech",
            companyLogo: "☁️",
            location: "Pune, Maharashtra",
            salary: "₹14-20 LPA",
            type: "Full-time",
            posted: "4 days ago",
            featured: true,
            description: "Cloud solutions company needs DevOps expert.",
            requirements: ["AWS/GCP", "Docker/Kubernetes", "CI/CD", "Terraform", "Linux"]
        },
        {
            id: 7,
            title: "Content Writer",
            company: "ContentPro",
            companyLogo: "✍️",
            location: "Work from Home",
            salary: "₹4-6 LPA",
            type: "Part-time",
            posted: "3 days ago",
            featured: false,
            description: "Remote content writing opportunity.",
            requirements: ["Excellent English", "SEO Writing", "Research Skills"]
        },
        {
            id: 8,
            title: "Python Developer",
            company: "CodeMasters",
            companyLogo: "🐍",
            location: "Chennai, Tamil Nadu",
            salary: "₹8-14 LPA",
            type: "Contract",
            posted: "6 days ago",
            featured: false,
            description: "6-month contract for Python developer.",
            requirements: ["Python/Django", "REST APIs", "PostgreSQL", "Git"]
        },
        {
            id: 9,
            title: "HR Intern",
            company: "PeopleFirst",
            companyLogo: "👥",
            location: "Kolkata, West Bengal",
            salary: "₹2-3 LPA",
            type: "Internship",
            posted: "1 day ago",
            featured: false,
            description: "Summer internship for HR students.",
            requirements: ["HR/MBA students", "Communication Skills", "MS Excel"]
        },
        {
            id: 10,
            title: "Machine Learning Engineer",
            company: "AIInnovators",
            companyLogo: "🤖",
            location: "Bangalore, Karnataka",
            salary: "₹20-30 LPA",
            type: "Full-time",
            posted: "2 days ago",
            featured: true,
            description: "AI company seeking ML expert for cutting-edge projects.",
            requirements: ["Python", "TensorFlow/PyTorch", "ML Algorithms", "NLP", "Deep Learning"]
        }
    ];
    
    localStorage.setItem('jobsData', JSON.stringify(defaultJobs));
    return defaultJobs;
}

function getEmployersData() {
    const stored = localStorage.getItem('employersData');
    if (stored) {
        return JSON.parse(stored);
    }
    
    const defaultEmployers = [
        { id: 1, name: "TechCorp India", logo: "💻", industry: "Information Technology", location: "Bangalore, Karnataka", positions: 45, description: "Leading software solutions provider" },
        { id: 2, name: "StartupX", logo: "🚀", industry: "E-Commerce", location: "Gurgaon, Haryana", positions: 28, description: "Disrupting the retail industry" },
        { id: 3, name: "DataDriven Inc", logo: "📊", industry: "Analytics", location: "Hyderabad, Telangana", positions: 18, description: "Data-powered business insights" },
        { id: 4, name: "CloudTech", logo: "☁️", industry: "Cloud Computing", location: "Pune, Maharashtra", positions: 32, description: "Enterprise cloud solutions" },
        { id: 5, name: "AIInnovators", logo: "🤖", industry: "Artificial Intelligence", location: "Bangalore, Karnataka", positions: 22, description: "Cutting-edge AI research" },
        { id: 6, name: "FinServe", logo: "🏦", industry: "Financial Services", location: "Mumbai, Maharashtra", positions: 55, description: "Premium financial services" }
    ];
    
    localStorage.setItem('employersData', JSON.stringify(defaultEmployers));
    return defaultEmployers;
}

// ========================================
// Utility Functions
// ========================================

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${type === 'success' ? '✓' : '⚠'}</span>
        <span class="toast-message">${message}</span>
    `;
    
    // Add toast styles if not exists
    if (!document.getElementById('toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            .toast {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                padding: 16px 24px;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                display: flex;
                align-items: center;
                gap: 12px;
                z-index: 10000;
                animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
                border-left: 4px solid #00a87d;
            }
            .toast-error { border-left-color: #e94560; }
            .toast-icon {
                width: 24px;
                height: 24px;
                background: #00a87d;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
            }
            .toast-error .toast-icon { background: #e94560; }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Get URL Parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}

// ========================================
// DOM Elements & Initialization
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = getCurrentPage();
    
    // Initialize common features
    initNavbar();
    initCommon();
    
    // Initialize page-specific features
    switch(currentPage) {
        case 'index':
        case '':
            initHomePage();
            break;
        case 'jobs':
            initJobsPage();
            break;
        case 'employers':
            initEmployersPage();
            break;
        case 'candidates':
            initCandidatesPage();
            break;
        case 'services':
            initServicesPage();
            break;
        case 'contact':
            initContactPage();
            break;
        case 'job':
            initJobDetailPage();
            break;
    }
});

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '');
    return page || 'index';
}

// ========================================
// Common Functions
// ========================================

function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!navbar) return;
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Mobile menu toggle
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close on link click
        document.querySelectorAll('.mobile-nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // Active nav link
    const currentPage = getCurrentPage();
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === `${currentPage}.html` || (currentPage === 'index' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

function initCommon() {
    // Counter animations
    initCounters();
    
    // Scroll reveal
    initScrollReveal();
    
    // Close modals on outside click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count) || 0;
                animateValue(counter, 0, target, 2000);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (range * easeOut));
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function initScrollReveal() {
    const elements = document.querySelectorAll('.service-card, .job-card, .employer-card, .testimonial-card, .feature-box');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ========================================
// Home Page
// ========================================

function initHomePage() {
    const jobs = getJobsData();
    const employers = getEmployersData();
    
    // Render featured jobs
    const featuredJobs = jobs.filter(job => job.featured).slice(0, 3);
    renderJobsGrid('featuredJobs', featuredJobs);
    
    // Render employers
    renderEmployersGrid('employersGrid', employers.slice(0, 6));
    
    // Search functionality
    const searchBtn = document.querySelector('.btn-search');
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
    
    // Enter key search
    document.getElementById('jobSearch')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
}

function handleSearch() {
    const keyword = document.getElementById('jobSearch')?.value.toLowerCase();
    const location = document.getElementById('locationSearch')?.value.toLowerCase();
    
    if (keyword || location) {
        window.location.href = `jobs.html?keyword=${encodeURIComponent(keyword || '')}&location=${encodeURIComponent(location || '')}`;
    } else {
        window.location.href = 'jobs.html';
    }
}

function renderJobsGrid(containerId, jobs) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = jobs.map(job => `
        <div class="job-card ${job.featured ? 'featured' : ''}">
            <div class="job-header">
                <div class="job-logo">${job.companyLogo}</div>
                <div class="job-info">
                    <h3>${job.title}</h3>
                    <span class="job-company">${job.company}</span>
                </div>
            </div>
            <div class="job-details">
                <div class="job-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    ${job.location}
                </div>
                <div class="job-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    ${job.type}
                </div>
            </div>
            <div class="job-meta">
                <span class="job-type ${job.type.toLowerCase()}">${job.type}</span>
                <span class="job-salary">${job.salary}</span>
            </div>
            <div class="job-meta">
                <span class="job-posted">${job.posted}</span>
                <button class="btn btn-primary btn-sm" onclick="viewJob(${job.id})">Apply</button>
            </div>
        </div>
    `).join('');
}

function renderEmployersGrid(containerId, employers) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = employers.map(employer => `
        <div class="employer-card">
            <div class="employer-logo">${employer.logo}</div>
            <h3>${employer.name}</h3>
            <p class="employer-industry">${employer.industry}</p>
            <div class="employer-location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ${employer.location}
            </div>
            <span class="employer-positions">${employer.positions} Open Positions</span>
        </div>
    `).join('');
}

function viewJob(jobId) {
    window.location.href = `job.html?id=${jobId}`;
}

// ========================================
// Jobs Page
// ========================================

function initJobsPage() {
    const jobs = getJobsData();
    const params = getUrlParams();
    
    // Apply URL filters
    let filteredJobs = jobs;
    
    if (params.keyword) {
        const keyword = params.keyword.toLowerCase();
        filteredJobs = filteredJobs.filter(job => 
            job.title.toLowerCase().includes(keyword) || 
            job.company.toLowerCase().includes(keyword) ||
            job.description.toLowerCase().includes(keyword)
        );
    }
    
    if (params.location) {
        const location = params.location.toLowerCase();
        filteredJobs = filteredJobs.filter(job => 
            job.location.toLowerCase().includes(location)
        );
    }
    
    if (params.type && params.type !== 'all') {
        filteredJobs = filteredJobs.filter(job => job.type === params.type);
    }
    
    renderJobsGrid('jobsGrid', filteredJobs);
    initFilters(jobs);
    
    // Update URL params display
    if (params.keyword || params.location) {
        const activeFilters = document.querySelector('.job-filters');
        if (activeFilters) {
            let filterInfo = '';
            if (params.keyword) filterInfo += ` 🔍 "${params.keyword}"`;
            if (params.location) filterInfo += ` 📍 "${params.location}"`;
            
            activeFilters.insertAdjacentHTML('beforeend', `<p class="filter-info">Showing results for${filterInfo}</p>`);
        }
    }
}

function initFilters(jobs) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const type = btn.dataset.type;
            const params = getUrlParams();
            
            if (type === 'all') {
                window.location.href = 'jobs.html' + (params.keyword || params.location ? `?keyword=${params.keyword || ''}&location=${params.location || ''}` : '');
            } else {
                window.location.href = `jobs.html?type=${type}${params.keyword ? `&keyword=${params.keyword}` : ''}${params.location ? `&location=${params.location}` : ''}`;
            }
        });
    });
    
    // Set active filter from URL
    const params = getUrlParams();
    if (params.type) {
        filterBtns.forEach(btn => {
            if (btn.dataset.type === params.type) {
                btn.classList.add('active');
            }
        });
    }
}

// ========================================
// Employers Page
// ========================================

function initEmployersPage() {
    const employers = getEmployersData();
    renderEmployersGrid('employersGrid', employers);
}

// ========================================
// Candidates Page
// ========================================

function initCandidatesPage() {
    // Candidate registration form
    const form = document.getElementById('candidateForm');
    if (form) {
        form.addEventListener('submit', handleCandidateSubmit);
    }
}

function handleCandidateSubmit(e) {
    e.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName')?.value,
        email: document.getElementById('email')?.value,
        phone: document.getElementById('phone')?.value,
        candidateType: document.querySelector('input[name="candidateType"]:checked')?.value,
        // Fresher fields
        education: document.getElementById('education')?.value,
        passingYear: document.getElementById('passingYear')?.value,
        college: document.getElementById('college')?.value,
        percentage: document.getElementById('percentage')?.value,
        skills: document.getElementById('skills')?.value,
        // Experienced fields
        experience: document.getElementById('experience')?.value,
        currentCompany: document.getElementById('currentCompany')?.value,
        currentCTC: document.getElementById('currentCTC')?.value,
        expectedCTC: document.getElementById('expectedCTC')?.value,
        noticePeriod: document.getElementById('noticePeriod')?.value,
        timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    const candidates = JSON.parse(localStorage.getItem('candidates') || '[]');
    candidates.push(formData);
    localStorage.setItem('candidates', JSON.stringify(candidates));
    
    showToast('Profile submitted successfully! We will contact you soon.');
    e.target.reset();
}

// ========================================
// Services Page
// ========================================

function initServicesPage() {
    // Service request forms
    const forms = document.querySelectorAll('.service-request-form');
    forms.forEach(form => {
        form.addEventListener('submit', handleServiceRequest);
    });
}

function handleServiceRequest(e) {
    e.preventDefault();
    
    const formData = {
        service: e.target.dataset.service,
        name: e.target.querySelector('input[type="text"]')?.value,
        email: e.target.querySelector('input[type="email"]')?.value,
        phone: e.target.querySelector('input[type="tel"]')?.value,
        company: e.target.querySelector('input[type="text"]:nth-of-type(4)')?.value,
        message: e.target.querySelector('textarea')?.value,
        timestamp: new Date().toISOString()
    };
    
    const requests = JSON.parse(localStorage.getItem('serviceRequests') || '[]');
    requests.push(formData);
    localStorage.setItem('serviceRequests', JSON.stringify(requests));
    
    showToast('Service request submitted! Our team will contact you.');
    e.target.reset();
}

// ========================================
// Contact Page
// ========================================

function initContactPage() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleContactSubmit);
    }
    
    // Candidate type toggle
    initCandidateToggle();
}

function initCandidateToggle() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const fresherFields = document.getElementById('fresherFields');
    const experiencedFields = document.getElementById('experiencedFields');
    
    if (!toggleBtns.length) return;
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const type = btn.dataset.type;
            
            if (type === 'fresher') {
                fresherFields?.classList.add('active');
                experiencedFields?.classList.remove('active');
            } else {
                fresherFields?.classList.remove('active');
                experiencedFields?.classList.add('active');
            }
        });
    });
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name')?.value,
        email: document.getElementById('email')?.value,
        phone: document.getElementById('phone')?.value,
        company: document.getElementById('company')?.value,
        service: document.getElementById('service')?.value,
        message: document.getElementById('message')?.value,
        timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.push(formData);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    
    showToast('Message sent successfully! We will get back to you soon.');
    e.target.reset();
    
    // Show success modal
    document.getElementById('successModal')?.classList.add('active');
}

// ========================================
// Job Detail Page
// ========================================

function initJobDetailPage() {
    const params = getUrlParams();
    const jobId = parseInt(params.id);
    const jobs = getJobsData();
    const job = jobs.find(j => j.id === jobId);
    
    if (!job) {
        document.querySelector('.job-details-section')?.insertAdjacentHTML('afterbegin', 
            '<div class="container"><div class="alert">Job not found. <a href="jobs.html">Browse all jobs</a></div></div>');
        return;
    }
    
    // Render job details
    renderJobDetails(job);
    
    // Initialize application form
    initApplicationForm(job);
}

function renderJobDetails(job) {
    // Update page title
    document.title = `${job.title} at ${job.company} - PlacementApp`;
    
    // Job info
    const companyEl = document.getElementById('jobCompany');
    if (companyEl) companyEl.textContent = job.company;
    
    const titleEl = document.getElementById('jobTitle');
    if (titleEl) titleEl.textContent = job.title;
    
    const logoEl = document.getElementById('jobLogo');
    if (logoEl) logoEl.textContent = job.companyLogo;
    
    const locationEl = document.getElementById('jobLocation');
    if (locationEl) locationEl.textContent = job.location;
    
    const salaryEl = document.getElementById('jobSalary');
    if (salaryEl) salaryEl.textContent = job.salary;
    
    const typeEl = document.getElementById('jobType');
    if (typeEl) typeEl.textContent = job.type;
    
    const descEl = document.getElementById('jobDescription');
    if (descEl) descEl.textContent = job.description;
    
    // Requirements
    const reqEl = document.getElementById('jobRequirements');
    if (reqEl && job.requirements) {
        reqEl.innerHTML = job.requirements.map(req => `<li>${req}</li>`).join('');
    }
    
    // Set hidden job ID
    const jobIdInput = document.getElementById('jobId');
    if (jobIdInput) jobIdInput.value = job.id;
}

function initApplicationForm(job) {
    // Toggle fresher/experienced
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const fresherFields = document.getElementById('fresherFields');
    const experiencedFields = document.getElementById('experiencedFields');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const type = btn.dataset.type;
            
            if (type === 'fresher') {
                fresherFields?.classList.add('active');
                experiencedFields?.classList.remove('active');
                document.getElementById('candidateType')?.setAttribute('value', 'fresher');
            } else {
                fresherFields?.classList.remove('active');
                experiencedFields?.classList.add('active');
                document.getElementById('candidateType')?.setAttribute('value', 'experienced');
            }
        });
    });
    
    // Form submission
    const form = document.getElementById('applicationForm');
    if (form) {
        form.addEventListener('submit', (e) => handleApplicationSubmit(e, job));
    }
}

function handleApplicationSubmit(e, job) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    const application = {
        jobId: job.id,
        jobTitle: job.title,
        jobCompany: job.company,
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        candidateType: document.querySelector('.toggle-btn.active')?.dataset.type || 'fresher',
        // Fresher
        education: formData.get('education'),
        passingYear: formData.get('passingYear'),
        college: formData.get('college'),
        percentage: formData.get('percentage'),
        skills: formData.get('skills'),
        // Experienced
        totalExperience: formData.get('totalExperience'),
        currentCTC: formData.get('currentCTC'),
        expectedCTC: formData.get('expectedCTC'),
        noticePeriod: formData.get('noticePeriod'),
        currentCompany: formData.get('currentCompany'),
        workExperience: formData.get('workExperience'),
        // Common
        coverLetter: formData.get('coverLetter'),
        timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    const applications = JSON.parse(localStorage.getItem('jobApplications') || '[]');
    applications.push(application);
    localStorage.setItem('jobApplications', JSON.stringify(applications));
    
    showToast('Application submitted successfully!');
    
    // Show success modal
    document.getElementById('appliedJobTitle').textContent = job.title;
    document.getElementById('appliedCompany').textContent = job.company;
    document.getElementById('successModal').classList.add('active');
    
    // Reset form
    form.reset();
}

// ========================================
// Global Functions (called from HTML)
// ========================================

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('active'));
}

function searchJobs() {
    const keyword = document.getElementById('jobSearch')?.value;
    const location = document.getElementById('locationSearch')?.value;
    window.location.href = `jobs.html?keyword=${encodeURIComponent(keyword || '')}&location=${encodeURIComponent(location || '')}`;
}

function applyJob(jobId) {
    window.location.href = `job.html?id=${jobId}`;
}

function loadAllJobs() {
    window.location.href = 'jobs.html';
}

// Initialize on keypress
document.getElementById('jobSearch')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchJobs();
});

document.getElementById('locationSearch')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchJobs();
});
