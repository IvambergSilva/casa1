document.querySelector('#botaoCodigo').onclick = buscarPessoa;

let codigoPessoas = [
    {
        nome: 'Eduarda e Nattan',
        codigo: 'AE2022E1',
        id: 1, 
    },
    {
        nome: 'Kassandra',
        codigo: 'AE2022K2',
        id: 2, 
    },
    {
        nome: 'Emília',
        codigo: 'AE2022W3',
        id: 3, 
    },
    {
        nome: 'Samuel e Vitória',
        codigo: 'AE2022S4',
        id: 4,
    }
];

function buscarPessoa () {
    let codigo = document.querySelector('#codigo').value.toUpperCase()

    let convidado = document.querySelector('#convidado');

    codigoPessoas.map((elemento) => {
        if (elemento.codigo == codigo) {
            document.getElementById(`${elemento.id}`).style.display = 'flex';
            convidado.innerHTML = `Oii, ${elemento.nome}, aqui estão algumas sugestões...`
        } else if (codigo == '') {
            convidado.innerHTML = 'Oii, digite o código que você recebeu!';
        }
    })
}
