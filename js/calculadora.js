function insert (num) { 
/*função chamada pelo 'onclick' onde será inserido o valor que está dentro das aspas simples (html)*/
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}


function limpar () {
    document.getElementById('resultado').innerHTML = ""
}

function voltar(){
	
}


function calcular(){
	var resultado = document.getElementById('resultado').innerHTML;
	if(isNaN(resultado) || !isFinite(resultado))
	{
		document.getElementById('resultado').innerHTML	= eval(resultado)
	}
	else{
		
		document.getElementById('resultado').innerHTML	= "Impossível calcular"
	}
}

/* if (resultado) {
            var resultadoCalculado = eval(resultado);
            if (isNaN(resultadoCalculado) || !isFinite(resultadoCalculado)) {
                throw new Error("Impossível Calcular");
            } else {
                resultadoElemento.innerHTML = resultadoCalculado;
            }
        } else {
            throw new
			
	*/