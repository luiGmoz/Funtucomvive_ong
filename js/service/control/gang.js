let information_gang = {
    query: {
        data: new Array(),
    },
    indexation: {
        start: 0,
        final: 10,
    }
};
const more_information_gang = () => {
    information.indexation.start+=10;
    information.indexation.final+=10;
}
const get_information_gang = async() => {
    try {
        const answer = await fetch("js/service/bdd/gang.json");
        information.query.data = await answer.json();
    } catch(error) {
        alert("Tenemos inconveniente para cargar los datos de esta pagina");
    }
}