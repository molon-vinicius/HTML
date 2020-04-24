function calcula(){
	var pv1 = parseFloat(document.dados.p1.value);
	var pv2 = parseFloat(document.dados.p2.value);
	var curso = document.dados.curso;
	var corte = document.dados.corte;
	var media;
	var sit;
	var cor;
	var fonte;
	var cursoesc;
			if(curso[0].checked){
				media = (pv1+pv2) / 2;
				cursoesc ='Sistemas de Informação';
				cor = '#eedd82';
			}
			else 
			if(curso[1].checked){
				media = (pv1+pv2*2) / 3.0;
				cursoesc = 'Engenharia';
				cor = '#87cefa';
			}
			else
			if(curso[2].checked){
				media = (pv1*1.5 + pv2*2.5) / 4.0;
				cursoesc = 'Medicina';
				cor = '#dcdcdc';
			}
			else{
				alert('Favor selecionar o curso.')
			}
				if(corte[0].selected){
					corte = 5.0;
				}
				else
				if(corte[1].selected){
					corte = 5.5;
				}
				else
				if(corte[2].selected){
					corte = 6.0;
				}
				else
				if(corte[3].selected){
					corte = 6.5;
				}
				else{
					corte = 7.0;
				}
						if(media <= 3.0){
							sit = 'Reprovado';
							fonte = '#ff0000' ; 
						}			
						else
						if(media >=3.0 && media < corte){
							sit = 'Exame';
							fonte = '#000000';
						}
						else{
							sit = 'Aprovado';
							fonte = '#0000ff';
						}			
			var jan = window.open("","jp","height=300, width=400, left=200, top=100");
			jan.document.write("<html><head><title>"+cursoesc+"</title></head>\n");
			jan.document.write("<body bgcolor='"+cor+"'>\n");
			jan.document.write("<h2 align='center'>"+cursoesc+"</h2>\n<hr />\n");
			jan.document.write("<p><strong>Prova P1: </strong>"+pv1.toFixed(2)+"</p>\n");
			jan.document.write("<p><strong>Prova P2: </strong>"+pv2.toFixed(2)+"</p>\n");
			jan.document.write("<p><strong>Media: </strong>"+media.toFixed(2)+"</p>\n");
			jan.document.write("<p><strong>Diagnóstico: </strong><font color='"+fonte+"'>"+sit+"</font></p>\n");
			jan.document.write("<p><strong>Média para aprovação:</strong> "+corte.toFixed(2)+"</p>\n");
			jan.document.write("<center><input type='button' value='Fechar' onclick='javascript:window.close()'</center>")
			jan.document.write("</body>\n");
			jan.document.write("</html>");
			jan.document.close();
}