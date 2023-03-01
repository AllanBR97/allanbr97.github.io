const isMobile = () => /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(navigator.userAgent) ||
    /\b(Android|Windows Phone|iPad|iPod|Mobi)\b/i.test(navigator.userAgent)


calculateAge = function (birthday) { // birthday is a date
    let ageDifMs = Date.now() - birthday;
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
btn_snake = function () {
    if (!isMobile) {
        alert("Este recurso não funciona em seu dispositivo!")
    }
}

calculateAge = function (birthday) { // birthday is a date
    const ageDifMs = Date.now() - birthday;
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

OnTyping = function () {
    const ch = document.getElementById("current").innerText
    window.alert(ch)
}

submitForm = function () {
    window.alert("A mensagem será enviada! Aguarde a página redirecionar totalmente.")
}

btn_palindrome = function () {
    const msg = prompt("Entre com frase sem acentuação: ")

    if (msg.length === 0) return;

    try {
        const no_chars = msg.toLowerCase().replace(/[ ,\-'!."?]/g, "");
        let count = 0

        for (let i = 0, rev = no_chars.length - 1; i < no_chars.length && rev >= 0; i++, rev--) {
            if (no_chars[i] === no_chars[rev]) {
                count++
            }
        }
        count === no_chars.length ? alert("É palíndromo!") : alert("Não é palíndromo!")
    } catch (e) { }

}