function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");//dato ingresado en buscador
    filter = input.value.toUpperCase();//convertir texto en mayuscula
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {// busqueda de fila  X fila y columna 0 = nombre pelicula
    td = tr[i].getElementsByTagName("td")[0];//nombre pelicula 
    if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) { //si encuentro nombre pelicula en la tablas
    tr[i].style.display = "";
    } else {
    tr[i].style.display = "none";
    }
    }
    }
    }