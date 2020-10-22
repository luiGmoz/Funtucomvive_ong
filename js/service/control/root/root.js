const erase = () => {
    Q("#body").innerHTML = "";
}
const write = (content) => {
    Q("#body").innerHTML = content;
}
const root = (page) => {
    erase();
    switch (page) {
        case "index":
            write(body_index());
            break;
    }
}