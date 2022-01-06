
function AddEstados() {
    let estados = document.getElementById('estados');
    let listaEstados = [ '', "Acre", "Alagoas", "Amapá", "Amazonas","Bahia", "Ceará","Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

    for (let i = 0; i < listaEstados.length; i += 1) {
        let opicao = document.createElement('option')
        opicao.innerText = listaEstados[i]
        opicao.value = listaEstados[i]
        estados.appendChild(opicao)

       
    }
}
AddEstados();
