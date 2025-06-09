
document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
        <header>
            <div class="bg-[#246788] text-white text-base py-2">
                <div class="container mx-auto flex md:justify-end justify-center md:flex-nowrap flex-wrap space-x-5 px-4">
                    <div class="flex gap-2"><a href="#" class="hover:underline">Home</a><span class="md:block hidden"> |
                        </span>
                    </div>
                    <div class="flex gap-2"><a href="#" class="hover:underline">Subscribe</a><span class="md:block hidden">
                            |
                        </span></div>
                    <div class="flex gap-2"><a href="#" class="hover:underline">Contact Us</a><span class="md:block hidden">
                            |
                        </span></div>
                    <div class="flex gap-2"><a href="#" class="hover:underline">Francais</a><span class="md:block hidden"> |
                        </span>
                    </div>
                    <button>
                        <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1111 3a7.5 7.5 0 015.65 13.65z" />
                        </svg>
                    </button>
                </div>
            </div>

            <nav class="bg-white ">
                <div class="container mx-auto flex justify-between items-center py-4">
                    <div>
                        <img src="/Public/Images/logo.png" alt="Logo" class="w-[119px] h-[52px] mt-2" />
                    </div>

                    <div class="md:hidden">
                        <button id="menu-toggle">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    <nav class="hidden md:flex space-x-6 font-medium text-base relative">
                        <div class="group relative">
                            <a href="#" class="flex items-center gap-1 hover:text-[#246788]">
                                About
                                <svg class="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <div
                                class="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-50">
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white">Who We Are</a>
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white">Mission</a>
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white">Team</a>
                            </div>
                        </div>

                        <div class="group relative">
                            <a href="#" class="flex items-center gap-1 hover:text-[#246788]">
                                Certification
                                <svg class="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <div
                                class="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-50">
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white">Overview</a>
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white">Apply</a>
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white">Renewal</a>
                            </div>
                        </div>

                        <div class="group relative">
                            <a href="#" class="flex items-center gap-1 hover:text-[#246788]">
                                Guidelines & Policies
                                <svg class="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <div
                                class="absolute left-0 mt-2 w-64 bg-white shadow-md rounded-md hidden group-hover:block z-50">
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white">Ethical
                                    Guidelines</a>
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white">Animal Care
                                    Policy</a>
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white">Safety
                                    Regulations</a>
                            </div>
                        </div>

                        <div class="group relative">
                            <a href="#" class="flex items-center gap-1 hover:text-[#246788]">
                                Training
                                <svg class="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <div
                                class="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-50">
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white">Courses</a>
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white">Workshops</a>
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white">Certifications</a>
                            </div>
                        </div>

                        <div class="group relative">
                            <a href="#" class="flex items-center gap-1 hover:text-[#246788]">
                                Animals Used In Science
                                <svg class="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <div
                                class="absolute left-0 mt-2 w-64 bg-white shadow-md rounded-md hidden group-hover:block z-50">
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white ">Research
                                    Guidelines</a>
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white">Animal Welfare</a>
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788] hover:text-white">Ethics Training</a>
                            </div>
                        </div>
                        <div class="group relative">
                            <a href="#" class="flex items-center gap-1 hover:text-[#246788]">
                                Three Rs
                                <svg class="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <div
                                class="absolute left-0 mt-2 w-64 bg-white shadow-md rounded-md hidden group-hover:block z-50">
                                <a href="#" class="block px-4 py-2  hover:bg-[#246788]">Research Guidelines</a>
                                <a href="#" class="block px-4 py-2 hover:bg-[#246788]">Animal Welfare</a>
                                <a href="#" class="block px-4 py-2 hover:bg-[#246788]">Ethics Training</a>
                            </div>
                        </div>
                        <div class="group relative">
                            <a href="#" class="flex items-center gap-1 hover:text-[#246788]">
                                Volunteers & Awards <svg class="w-3 h-3 group-hover:rotate-180 transition-transform"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <div
                                class="absolute left-0 mt-2 w-64 bg-white shadow-md rounded-md hidden group-hover:block z-50">
                                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white">Research
                                    Guidelines</a>
                                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white">Animal Welfare</a>
                                <a href="#" class="block px-4 py-2 hover:bg-[#246788] hover:text-white">Ethics Training</a>
                            </div>
                        </div>
                    </nav>
                </div>

                <div id="mobile-menu" class="md:hidden hidden bg-white border-t">
                    <div class="px-4 py-2 border-b">
                        <button class="w-full text-left font-semibold" onclick="toggleSubmenu('about')">About</button>
                        <div id="submenu-about" class="ml-4 mt-2 space-y-1 hidden">
                            <a href="#" class="block">Who We Are</a>
                            <a href="#" class="block">Mission</a>
                            <a href="#" class="block">Team</a>
                        </div>
                    </div>
                    <div class="px-4 py-2 border-b">
                        <button class="w-full text-left font-semibold"
                            onclick="toggleSubmenu('certification')">Certification</button>
                        <div id="submenu-certification" class="ml-4 mt-2 space-y-1 hidden">
                            <a href="#" class="block">Overview</a>
                            <a href="#" class="block">Apply</a>
                            <a href="#" class="block">Renewal</a>
                        </div>
                    </div>
                    <div class="px-4 py-2 border-b">
                        <button class="w-full text-left font-semibold" onclick="toggleSubmenu('guidelines')">Guidelines &
                            Policies</button>
                        <div id="submenu-guidelines" class="ml-4 mt-2 space-y-1 hidden">
                            <a href="#" class="block">Ethical Guidelines</a>
                            <a href="#" class="block">Animal Care Policy</a>
                            <a href="#" class="block">Safety Regulations</a>
                        </div>
                    </div>
                    <div class="px-4 py-2 border-b">
                        <button class="w-full text-left font-semibold" onclick="toggleSubmenu('training')">Training</button>
                        <div id="submenu-training" class="ml-4 mt-2 space-y-1 hidden">
                            <a href="#" class="block">Courses</a>
                            <a href="#" class="block">Workshops</a>
                            <a href="#" class="block">Certifications</a>
                        </div>
                    </div>
                    <div class="px-4 py-2">
                        <button class="w-full text-left font-semibold" onclick="toggleSubmenu('animals')">Animals Used In
                            Science</button>
                        <div id="submenu-animals" class="ml-4 mt-2 space-y-1 hidden">
                            <a href="#" class="block">Research Guidelines</a>
                            <a href="#" class="block">Animal Welfare</a>
                            <a href="#" class="block">Ethics Training</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    `;

    const footerHTML = `
        <footer class="bg-[url('/Public/Images/footerbg.png')] bg-cover bg-center">
            <section class="container mx-auto">
                <div class=" grid grid-cols-1 md:grid-cols-3 gap-10 py-20 ">
                    <div class="space-y-5 text-white">
                        <img src="/Public/Images/footerlogo.svg" alt="CCAC Logo" class=" w-[119px] h-[52px]" />
                        <p class=" text-white/80 font-medium">Canadian Council On Animal Care</p>
                        <p class=" text-white/80 font-medium">Important Notices<br />Site Map</p>
                        <a href="#" class="inline-block bg-[#FFFFFF0D] p-3 rounded" title="LinkedIn">
                            <img src="/Public/Images/in.svg" alt="LinkedIn" class="w-6 h-6" />
                        </a>
                    </div>

                    <div class="space-y-7 text-white/80">
                        <h3 class="text-2xl font-bold">Quick links</h3>
                        <ul class="space-y-4">
                            <li><a href="#" class="hover:text-[#77DDFE] hover:underline text-lg font-medium">Home</a></li>
                            <li><a href="#" class="hover:text-[#77DDFE] hover:underline text-lg font-medium">About</a></li>
                            <li><a href="#"
                                    class="hover:text-[#77DDFE] hover:underline text-lg font-medium">Certification</a></li>
                            <li><a href="#" class="hover:text-[#77DDFE] hover:underline text-lg font-medium">Training</a>
                            </li>
                            <li><a href="#" class="hover:text-[#77DDFE] hover:underline text-lg font-medium">Animal used in
                                    Science</a></li>
                            <li><a href="#" class="hover:text-[#77DDFE] hover:underline text-lg font-medium">Guidelines &
                                    Policies</a></li>
                        </ul>
                    </div>

                    <div class="space-y-7 text-white">
                        <h3 class="text-2xl font-bold">Get In Touch</h3>
                        <ul class="space-y-4 ">
                            <li class="flex items-start gap-3 text-white">
                                <img src="/Public/Images/location.svg" alt="location">
                                <p class="text-white/80">190 O’Connor St, Suite 800<br>Ottawa, ON, K2P 2R3</p>
                            </li>
                            <li class="flex items-center gap-3 text-white">
                                <img src="/Public/Images/email.svg" alt="location">
                                <p class="text-white/80">media@ccac.ca</p>
                            </li>
                            <li class="flex items-center gap-3 ">
                                <img src="/Public/Images/tel.svg" alt="location">
                                <p class="text-white/80">613–238–4031</p>
                            </li>
                        </ul>
                    </div>

                </div>

                <hr class="border-t border-gray-600" />
                <p class="text-center text-base text-white/80 py-3">
                    © 2005–2025 - Canadian Council On Animal Care - All Rights Reserved
                </p>
            </section>
        </footer>
    `;

    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    // --- JavaScript for Mobile Menu (Hamburger and Submenus) ---
    // This part is crucial for your mobile navigation to work
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Define the global function for toggling submenus
    window.toggleSubmenu = function(id) {
        const submenu = document.getElementById(`submenu-${id}`);
        if (submenu) {
            submenu.classList.toggle('hidden');
        }
    };
    // --- End of Mobile Menu JavaScript ---
});