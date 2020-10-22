const mine_alert = (message) => {
    alertify.alert(message, function(){});
}
const mine_green = (message) => {
    alertify.success(message);
}
const mine_red = (message) => {
    alertify.error(message);
}
const mine_yellow = (message) => {
    alertify.warning(message);
}
const mine_white = (message) => {
    alertify.message(message);
}