const nav = () => {
    return /*html*/`
        <a id="aFuntucomvive" onclick="routing('index');">Funtucomvive</a>
        <a id="aNoticias" onclick="routing('noticias');">Noticias</a>
        <a id="aBrigadas" onclick="routing('brigadas');">Brigadas</a>
    `;
}
const write_nav = () => {
    Q("#nav").innerHTML = nav();
    setTimeout(function(){
        Q("body")[0].setAttribute("class", "body_see");
        routing('index');
    }, 500);
}