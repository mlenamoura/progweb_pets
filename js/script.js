document.addEventListener("DOMContentLoaded", function () {
    function mostrarGaleria() {
        let imagens = ['dog1.jpg', 'dog2.jpg', 'dog3.jpg', 'dog4.jpg', 'dog5.jpg', 'dog6.jpg'];
        let galeria = document.querySelector('.carousel');

        imagens.forEach(img => {
            let imgElement = document.createElement('img');
            imgElement.src = './img/' + img;
            galeria.appendChild(imgElement);
        });

        iniciarCarrossel();
    }

    function iniciarCarrossel() {
        const images = document.querySelectorAll('#galeria img');
        let index = 0;

        setInterval(() => {
            if (index >= images.length) {
                index = 0;
            }

            const width = images[0].width;
            document.querySelector('.carousel').style.transform = `translateX(-${index * (width + 20)}px)`;
            index++;
        }, 3000);
    }

    mostrarGaleria();
});

function exibirRaca(raca) {
    let info = {
        'Labrador': 'Amigável, inteligente e energético.',
        'Bulldog': 'Calmo, dócil e sociável.',
        'Poodle': 'Extremamente inteligente e ativo.',
        'Golden': 'Amigável e afetuoso que adora brincar',
        'Caramelo': 'Extremamente brincalhão, leal e a cara do Brasil.',
        'Pastor': 'inteligente e corajoso e ótimo cão de guarda.'
    };
    document.getElementById('infoRaca').innerText = info[raca];
}

function pesquisarRaca() {
    let pesquisa = document.getElementById('campoPesquisa').value.toLowerCase();
    let racas = ['labrador', 'bulldog', 'poodle', 'Golden', 'Caramelo', 'Pastor'];
    let resultado = racas.includes(pesquisa) ? 'Raça encontrada!' : 'Raça não encontrada';
    document.getElementById('resultadoPesquisa').innerText = resultado;
}

