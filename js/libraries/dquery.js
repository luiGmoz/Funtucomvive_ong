const reformat_Q_constant = (value, init_number) => {
    let answer = "";
    for (let i = init_number; i < value.length; i++) {
        answer += value[i];
    }
    return answer;
}
const Q = (value) => {
    value = value.split("");
    let first = value[0];
    let second = null;
    if (first === "#" || first === ".") {
        second = reformat_Q_constant(value, 1);
    } else {
        second = reformat_Q_constant(value, 0);
    }
    if (first === "#") {
        return document.getElementById(second);
    } else if (first === ".") {
        return document.getElementsByClassName(second);
    } else {
        return document.getElementsByTagName(second);
    }
}