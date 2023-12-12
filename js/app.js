let pistaAtualizada = 0;
let superiorAtualizada = 0;
let inferiorAtualizada = 0;
function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtdeIngresso = document.getElementById('qtd').value;
    let pista = document.getElementById('qtd-pista');
    let ingressoPista = parseInt(pista.innerHTML);
    let superior = document.getElementById('qtd-superior');
    let ingressoSuperior = parseInt(superior.innerHTML);
    let inferior = document.getElementById('qtd-inferior');
    let ingressoInferior = parseInt(inferior.innerHTML);

    // Pista
    if (tipoIngresso == 'pista') {
        if (qtdeIngresso <= ingressoPista) {
            pistaAtualizada = ingressoPista - qtdeIngresso;
            pista.innerHTML = pistaAtualizada;
            alert (`Compra de ${qtdeIngresso} ingressos para ${tipoIngresso} realizada com sucesso.`)

            console.log(`Quantidade Atual: ${pistaAtualizada}`);
        } else {
            console.log('erro!');
            alert (`A quantidade escolhida não está disponível para ${tipoIngresso}. Quantidade atual: ${ingressoPista}`);
        }
    }
    // Superior
    if (tipoIngresso == 'superior') {
        if (qtdeIngresso <= ingressoSuperior) {
            superiorAtualizada = ingressoSuperior - qtdeIngresso;
            superior.innerHTML = superiorAtualizada;
            alert (`Compra de ${qtdeIngresso} ingressos para ${tipoIngresso} realizada com sucesso.`)

            console.log(`Quantidade Atual: ${superiorAtualizada}`);
        } else {
            console.log('erro!');
            alert (`A quantidade escolhida não está disponível para ${tipoIngresso}. Quantidade atual: ${ingressoPista}`);
        }
    }
    // Inferior
    if (tipoIngresso == 'inferior') {
        if (qtdeIngresso <= ingressoInferior) {
            inferiorAtualizada = ingressoInferior - qtdeIngresso;
            inferior.innerHTML = inferiorAtualizada;
            alert (`Compra de ${qtdeIngresso} ingressos para ${tipoIngresso} realizada com sucesso.`)

            console.log(`Quantidade Atual: ${inferiorAtualizada}`);
        } else {
            console.log('erro!');
            alert (`A quantidade escolhida não está disponível para ${tipoIngresso}. Quantidade atual: ${ingressoPista}`);
        }
    }
    //     console.log (`ingressoSuperior: ${ingressoSuperior} qtdeIngresso: ${qtdeIngresso}`);
    // }

    // console.log (tipoIngresso, qtdeIngresso, ingressoPista, pistaAtualizada);
}