var listaFilmes = ["Yesterday","A Chegada","Escola de Rock"];

listaFilmes.push("Harry Potter 3");

listaFilmes.push("Harry Potter 4");

// H1, H2, Strong
//document.write("<p>" + listaFilmes[0] + "</p>");
//document.write("<p>" + listaFilmes[1] + "</p>");
//document.write("<p>" + listaFilmes[2]+ "</p>");
//document.write("<p>" + listaFilmes[3]+ "</p>");

for (var indice = 0; indice < listaFilmes.length; indice++) {
	document.write("<p>" + listaFilmes[indice] + "</p>");
}