function consulta(){

    let cep = document.querySelector('#cep').value;
    
    let url = "https://viacep.com.br/ws/"+cep+"/json/";

    if (cep.lenght ==! 8) {
        alert('cep invalido');
        return;
    }

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            endereco(data);
        })
        
    })

}

function endereco(dados){
     let resultado = document.querySelector('#resultado');
     if(dados.erro){
        resultado.innerHTML ='Não foi possivel localizar endereço'
     }else{

     resultado.innerHTML =  "<p>Endereço:"+dados.logradouro+"</p><p>Complemento:"+dados.complemento+"</p><p>Bairro:"+dados.bairro+"</p><p>Cidade:"+dados.localidade+"</p>"

    }
}

