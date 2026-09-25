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

    const alterarFundo = document.getElementById('alterarFundo');
    const legendas = document.querySelectorAll('.legenda-botao');


    function atualizarLegenda(ativo) {
        legendas.forEach(function (legenda) {
            legenda.textContent = ativo ? 'Sair da Matrix' : 'Entrar na Matrix';
        });
    }

    if (alterarFundo) {
        if (localStorage.getItem('modoMatrix') === 'ativo') {
            document.body.classList.add('modo-matrix');
            alterarFundo.checked = true;
        }

        atualizarLegenda(alterarFundo.checked); // já aplica o texto certo ao carregar a página

        alterarFundo.addEventListener('change', function () {
            document.body.classList.toggle('modo-matrix', alterarFundo.checked);
            localStorage.setItem('modoMatrix', alterarFundo.checked ? 'ativo' : 'inativo');
            atualizarLegenda(alterarFundo.checked);
        });
    }

    if (alterarFundo) {
        if (localStorage.getItem('modoMatrix') === 'ativo') {
            document.body.classList.add('modo-matrix');
            alterarFundo.checked = true;
        }

        alterarFundo.addEventListener('change', function () {
            document.body.classList.toggle('modo-matrix', alterarFundo.checked);
            localStorage.setItem('modoMatrix', alterarFundo.checked ? 'ativo' : 'inativo');
        });
    }

});