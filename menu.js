document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const dropdownToggle = document.getElementById('dropdownToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const navItems = document.getElementById('navItems');
    const dropdown = document.querySelector('.dropdown');

    // Función para cerrar todos los menús
    function closeAllMenus() {
        if (dropdownMenu) dropdownMenu.classList.remove('active');
        if (dropdown) dropdown.classList.remove('active');
        if (navItems) navItems.classList.remove('active');
    }

    // Menú desplegable
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Cerrar otros dropdowns si están abiertos
            document.querySelectorAll('.dropdown').forEach(item => {
                if (item !== dropdown) {
                    item.classList.remove('active');
                    const menu = item.querySelector('.dropdown-menu');
                    if (menu) menu.classList.remove('active');
                }
            });

            // Alternar el menú actual
            dropdown.classList.toggle('active');
            dropdownMenu.classList.toggle('active');
        });
    }

    // Menú móvil
    if (mobileMenu && navItems) {
        mobileMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            navItems.classList.toggle('active');
        });
    }

    // Cerrar menús al hacer clic fuera
    document.addEventListener('click', function() {
        closeAllMenus();
    });

    // Cerrar menús al cambiar el tamaño de la pantalla
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeAllMenus();
        }
    });

    // Evitar que el clic en el menú propague al documento
    if (dropdownMenu) {
        dropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});