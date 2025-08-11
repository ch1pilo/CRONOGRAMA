document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('dropdownToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const navItems = document.getElementById('navItems');
    
    // Función para cerrar todos los menús
    function closeAllMenus() {
        dropdownMenu.classList.remove('active');
        // No cerramos el navItems aquí para móviles
        if (window.innerWidth > 768) {
            navItems.classList.remove('active');
        }
    }
    
    // Menú desplegable para desktop/tablet
    if(dropdownToggle) {
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault(); // Siempre prevenir el comportamiento por defecto
        dropdownMenu.classList.toggle('active');
        
        // Cerrar otros menús si están abiertos
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if(menu !== dropdownMenu && menu.classList.contains('active')) {
                menu.classList.remove('active');
                }
            });
        });
    }
    
    // Menú móvil
    if(mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            navItems.classList.toggle('active');
            // Cierra el submenú si está abierto
            dropdownMenu.classList.remove('active');
        });
    }
    
    // Cerrar menús al hacer clic fuera
    document.addEventListener('click', function() {
        closeAllMenus();
    });
    
    // Evitar que el clic en el menú propague al documento
    if (navItems) {
        navItems.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Cerrar menús al cambiar tamaño de pantalla
    window.addEventListener('resize', function() {
        if(window.innerWidth > 768) {
            closeAllMenus();
        }
    });
});