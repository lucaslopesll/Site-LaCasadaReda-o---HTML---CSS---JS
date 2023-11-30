var tamanho=19;
function aumentar(){
    var texto = document.getElementsByClassName("acessibilidade");
    tamanho=tamanho+1;
    for (var i = 0; i <= texto.length; i++){
    if (tamanho<=22){
      texto[i].style.fontSize=tamanho+"px";}   
    }
}
function diminuir(){
    var texto = document.getElementsByClassName("acessibilidade");
    tamanho=tamanho-1;
    for (var i = 0; i <= texto.length; i++){
      if (tamanho>=16){
      texto[i].style.fontSize=tamanho+"px";} 
    }
}
function calcula() {
	var valor01=document.getElementById("valor1");
    var valor02=document.getElementById("valor2");
    var valor03=document.getElementById("valor3");
    var valor04=document.getElementById("valor4");
    var valor05=document.getElementById("valor5");
    var result=document.getElementById("result");

    var calc=(parseFloat(valor01.value)+parseFloat(valor02.value)+parseFloat(valor03.value)+parseFloat(valor04.value)+parseFloat(valor05.value))/5;
    var form = document.getElementById("form");
        form.innerHTML="";    
    if (parseFloat(valor01.value) < 450 || parseFloat(valor02.value) < 450 || parseFloat(valor03.value) < 450 || parseFloat(valor04.value) < 450){
        result.innerHTML="Uma de suas notas está abaixo da média, isso impossibilita a sua partcipação do.<br>"; 
        result.innerHTML+="ProUni, pois é necessária nota mínima de 450 pontos, sem zerar a redação.<br>";
        result.innerHTML+="Mas você pode participar do SISU, pois não é necessário média mínima, você só não pode zerar a redação.<br>";
    if (calc>1000){
        result.innerHTML="Padrão de notas está incorreto verifique os valores informados, pois a média máxima é 1000.";}
    else if (calc>=851 && calc<=1000){
        result.innerHTML="Padrão de notas para disputar em todas os cursos do SISU."; }  
    else if (calc>=800 && calc<=850){
        result.innerHTML+="Padrão de notas SISU: MEDICINA, ENGENHARIA AERONÁUTICA. <br>";}
    else if (calc>=751 && calc<=799){
        result.innerHTML+="Padrão de notas SISU: DIREITO, ODONTOLOGIA, PSICOLOGIA, ENGENHARIA: Civil, Automatica, Mecânica, Computação e Elétrica.<br>";}
    else if (calc>=700 && calc<=750){
        result.innerHTML+="Padrão de notas SISU: ARQUITETURA, ADMINISTRAÇÃO, MATEMÁTICA, NUTRIÇÃO, JORNALISMO, OUTRAS ENGENHARIAS. <br>";}
    else if (calc>=651 && calc<=699){
        result.innerHTML+="Padrão de notas SISU: ENFERMAGEM, ED.FÍSICA, FÁRMACIA, SERVIÇO SOCIAL, BIOLOGIA, CONTÁBEIS, PEDAGOGIA, FONOAUDIOLOGIA. <br>";}     
    else if (calc>=600 && calc<=651){
        result.innerHTML+="Padrão de notas SISU: HISTÓRIA, LETRAS (idiomas), GEOGRAFIA, BIBLIOTECONOMIA, SOCIOLOGIA, AGRONOMIA. <br>";}
    else if (calc<600){
        result.innerHTML+="Padrão de notas SISU: TECNÓLOGOS E LICENSIATURAS COM MENOR PROCURA <br>";}
    }
    else if (parseFloat(valor05.value) == 0){
        result.innerHTML="VOCÊ NÃO PODE PARTICIPAR DE NENHUM PROCESSO SELETIVO, POIS SUA NOTA NA REDAÇÃO FOI ZERO<br>";}
    else if (calc>1000){
        result.innerHTML="Padrão de notas está incorreto verifique os valores informados, pois a nota máxima é 1000.";}
    else if (calc>=851 && calc<=1000){
        result.innerHTML="Padrão de notas nas Universidades mais disputadas do Brasil.";}  
    else if (calc>=800 && calc<=850){
        result.innerHTML="Você tem grandes chances de Disputar Vagas em: <br>";
        result.innerHTML+="Padrão de notas SISU: MEDICINA, ENGENHARIA AERONÁUTICA. <br>";
        result.innerHTML+="Padrão de notas PROUNI: MEDICINA, DIREITO.<br> "; }
    else if (calc>=751 && calc<=799){
        result.innerHTML="Você tem grandes chances de Disputar Vagas em: <br>";
        result.innerHTML+="Padrão de notas SISU: DIREITO, ODONTOLOGIA, PSICOLOGIA, ENGENHARIA: Civil, Automatica, Mecânica, Computação e Elétrica.<br>";
        result.innerHTML+="Padrão de notas PROUNI: PSICOLOGIA, ENGENHARIA: Civil, Elétrica, Química, Aeronáutica, Computação, Mecânica, Automoção.<br>"; } 
    else if (calc>=700 && calc<=750){
        result.innerHTML="Você tem grandes chances de Disputar Vagas em: <br>";
        result.innerHTML+="Padrão de notas SISU: ARQUITETURA, ADMINISTRAÇÃO, MATEMÁTICA, NUTRIÇÃO, JORNALISMO, OUTRAS ENGENHARIAS. <br>";
        result.innerHTML+="Padrão de notas PROUNI: ADMINISTRAÇÃO, ODONTOLOGIA, ENFERMAGEM, ARQUITETURA, CONTÁBEIS, NUTRIÇÃO, COMUNICAÇÃO.<br>"; } 
    else if (calc>=651 && calc<=699){
        result.innerHTML="Você tem grandes chances de Disputar Vagas em: <br>";
        result.innerHTML+="Padrão de notas SISU: ENFERMAGEM, ED.FÍSICA, FÁRMACIA, SERVIÇO SOCIAL, BIOLOGIA, CONTÁBEIS, PEDAGOGIA, FONOAUDIOLOGIA. <br>";
        result.innerHTML+="Padrão de notas PROUNI: FÁRMACIA, FISIOTERAPIA, RECURSOS HUMANOS, SISTEMAS WEB, SECRETARIADO, WEBDESIGN, SEGURANÇA.<br> "; }    
    else if (calc>=600 && calc<=651){
        result.innerHTML="Você tem grandes chances de Disputar Vagas em: <br>";
        result.innerHTML+="Padrão de notas SISU: HISTÓRIA, LETRAS (idiomas), GEOGRAFIA, BIBLIOTECONOMIA, SOCIOLOGIA, AGRONOMIA. <br>";
        result.innerHTML+="Padrão de notas PROUNI: OCEANOGRAFIA, VETERINÁRIA, LETRAS, PETRÓLEO E GÁS, PODOLOGIA, PRODUÇÃO AGRICOLA.<br> "; }    
    else if (calc<600){
        result.innerHTML="Você tem grandes chances de Disputar Vagas em: <br>";
        result.innerHTML+="Padrão de notas SISU: TECNÓLOGOS E LICENSIATURAS COM MENOR PROCURA <br>";
        result.innerHTML+="Padrão de notas PROUNI: SANEAMENTO, LICCENSIATURAS E TECNÓLOGOS MENOS PROCURADOS<br>";}

    result.innerHTML+="<br>SUA MÉDIA GERAL É "+calc;           
    }
    
    
