document.addEventListener('DOMContentLoaded', function () {

    // Anima os elementos com a classe "fade-in-scroll" quando eles entram na tela
    const elementosAnimados = document.querySelectorAll('.fade-in-scroll');

    const observer = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('is-visible');
                observer.unobserve(entrada.target); // anima só uma vez
            }
        });
    }, {
        threshold: 0.15
    });

    elementosAnimados.forEach(function (elemento) {
        observer.observe(elemento);
    });

    // Botão de voltar ao topo
    const botaoTopo = document.getElementById('voltar-topo');

    if (botaoTopo) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                botaoTopo.classList.add('mostrar');
            } else {
                botaoTopo.classList.remove('mostrar');
            }
        });

        botaoTopo.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
