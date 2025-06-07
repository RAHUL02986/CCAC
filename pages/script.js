
        const swiper = new Swiper(".swiper", {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // navigation removed
        });
        const toggleMenu = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        toggleMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        function toggleSubmenu(id) {
            const submenu = document.getElementById('submenu-' + id);
            submenu.classList.toggle('hidden');
        }
 