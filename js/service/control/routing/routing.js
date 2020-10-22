const erase = () => {
    Q("#body").innerHTML = "";
}
const write = (content) => {
    Q("#body").innerHTML = content;
}
const activate_a_nav = (name) => {
    let a_array = ["aFuntucomvive", "aNoticias", "aBrigadas"];
    for (let i = 0; i < a_array.length; i++) {
        if (name === a_array[i]) {
            Q("#" + a_array[i]).setAttribute("class", "activate");
        } else {
            Q("#" + a_array[i]).setAttribute("class", "");
        }
    }
}
const routing = (page) => {
    Q("#body").setAttribute("class", "body_unsee");
    setTimeout(function(){
        erase();
        setTimeout(function(){
            switch (page) {
                case "index":
                    write(body_index());
                    activate_a_nav("aFuntucomvive");
                    break;
                default: 
                    write("<br /><br /><br /><br /><br /><br /><center>" + 
                        "<h1>La ruta que especificada no existe</h1></center>");
                    activate_a_nav("");
                    break;
            }
            setTimeout(function(){
                Q("#body").setAttribute("class", "body_see");
            }, 500);
        }, 100);
    }, 500);
}
window.onload = write_nav;