function openMenu(){
    document.getElementById("mainMenu").style.width="480px";//clave para vista en celular//
    document.getElementById("mainMenu").style.display="flex";
    document.getElementById("mainMenu").style.height="1000px";
    document.getElementById("openmenu").style.display="none";
    }
    function closeNav(){
    document.getElementById("mainMenu").style.width="0";
    document.getElementById("mainMenu").style.transition="0.9s all";
    window.location.reload();// es semejante a cargar pagina web
    }
