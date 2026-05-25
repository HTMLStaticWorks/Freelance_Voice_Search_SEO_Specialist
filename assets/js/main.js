// Premium JavaScript Suite for VoiceSEO Pro

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Core Theme Engine (Light / Dark)
    // ----------------------------------------------------
    const themeToggles = document.querySelectorAll('.theme-toggle, #theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('voice_seo_theme') || 'light';
    htmlElement.setAttribute('data-bs-theme', savedTheme);
    applyThemeUI(savedTheme);

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            htmlElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('voice_seo_theme', newTheme);
            applyThemeUI(newTheme);
        });
    });

    function applyThemeUI(theme) {
        themeToggles.forEach(toggle => {
            const icon = toggle.querySelector('i');
            if (!icon) return;
            if (theme === 'dark') {
                icon.className = 'bi bi-sun-fill';
                toggle.setAttribute('aria-label', 'Switch to light mode');
            } else {
                icon.className = 'bi bi-moon-stars-fill';
                toggle.setAttribute('aria-label', 'Switch to dark mode');
            }
        });
    }

    // ----------------------------------------------------
    // 2. Persistent RTL Engine
    // ----------------------------------------------------
    const rtlToggles = document.querySelectorAll('.rtl-toggle, #rtl-toggle');
    
    const savedDir = localStorage.getItem('voice_seo_dir') || 'ltr';
    htmlElement.setAttribute('dir', savedDir);
    updateRtlButtonStates(savedDir);

    rtlToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentDir = htmlElement.getAttribute('dir') || 'ltr';
            const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
            
            htmlElement.setAttribute('dir', newDir);
            localStorage.setItem('voice_seo_dir', newDir);
            updateRtlButtonStates(newDir);
        });
    });

    function updateRtlButtonStates(dir) {
        rtlToggles.forEach(toggle => {
            if (dir === 'rtl') {
                toggle.classList.add('bg-primary', 'text-white');
                toggle.textContent = 'LTR';
            } else {
                toggle.classList.remove('bg-primary', 'text-white');
                toggle.textContent = 'RTL';
            }
        });
    }

    // ----------------------------------------------------
    // 3. Navbar Scroll Transitions
    // ----------------------------------------------------
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                navbar.classList.add('shadow-sm');
                navbar.style.padding = '12px 0';
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.style.padding = '20px 0';
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger initial state
    }

    // ----------------------------------------------------
    // 4. Back to Top Mechanism
    // ----------------------------------------------------
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.style.display = 'inline-flex';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ----------------------------------------------------
    // 5. Interactive Soundwave Speed Controller
    // ----------------------------------------------------
    const soundwaveBars = document.querySelectorAll('.soundwave-bar');
    const heroInteractive = document.querySelector('.hero-section, .hero-section-alt');

    if (heroInteractive && soundwaveBars.length > 0) {
        heroInteractive.addEventListener('mouseenter', () => {
            soundwaveBars.forEach((bar, index) => {
                bar.style.animationDuration = `${0.3 + (index * 0.1)}s`;
            });
        });

        heroInteractive.addEventListener('mouseleave', () => {
            soundwaveBars.forEach(bar => {
                bar.style.animationDuration = '1s';
            });
        });
    }

    // ----------------------------------------------------
    // 6. Premium Form Interaction & Real-time Validation
    // ----------------------------------------------------
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused-parent');
            });
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused-parent');
                // Basic validation style helper
                if (input.hasAttribute('required') && !input.value.trim()) {
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
            });
        });

        form.addEventListener('submit', (e) => {
            const submitBtn = form.querySelector('[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Processing...`;
                
                // Simulate network latency for absolute premium feedback
                setTimeout(() => {
                    submitBtn.innerHTML = `<i class="bi bi-check2-circle me-2"></i>Success!`;
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalText;
                        form.reset();
                    }, 1500);
                }, 1200);
                
                e.preventDefault();
            }
        });
    });
});

// ----------------------------------------------------
// 7. Global Password Visibility Toggle
// ----------------------------------------------------
function togglePassword(fieldId, button) {
    const field = document.getElementById(fieldId);
    const icon = button.querySelector('i');
    if (!field || !icon) return;
    
    if (field.type === 'password') {
        field.type = 'text';
        icon.className = 'bi bi-eye-slash-fill';
    } else {
        field.type = 'password';
        icon.className = 'bi bi-eye-fill';
    }
}
