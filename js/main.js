	letra = "X";
 
	function joga(celula){
		let celulaclicada = document.getElementById(celula).innerHTML;
		if (celulaclicada == "X" || celulaclicada == "O"){
			alert("Opa, este quadrado já foi escolhido!");
		}else{
			document.getElementById(celula).innerHTML = letra;
			if (letra == "X"){
				letra = "O";
			}else{
				letra = "X";
			}
		}
	}
 