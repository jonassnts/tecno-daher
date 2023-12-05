document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um ouvinte de eventos a todos os links no documento
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // Adiciona uma rolagem suave
                });
            }
        });
    });
});
