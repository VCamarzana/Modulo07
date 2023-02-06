
function validateIban1(iban) {
    let re = /^[A-Z]{2}\d{22}$/;
    return re.test(iban);
};
console.log(validateIban1("ES6600190020961234567890"));

function validateIban2(iban) {
    let re = /^[A-Z]{2}\d{2}(\s?\d{4}){5}$/;
    return re.test(iban);
};
console.log(validateIban2("ES66 0019 0020 9612 3456 7890"));

function validateIban3(iban) {
    let re = /^([A-Z]{2})(\d{2})(?:\s?\d{4}){2}\s?(\d{2})\d{2}(?:\s?\d{4}){2}$/;
    return re.exec(iban);
};
console.log(validateIban3("ES66 0019 0020 9612 3456 7890"));

function validatePlates() {
    let plates = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];
    plates.forEach(value => {
        const re = /^(\d{4})[\s-]?([A-Z]{3})$/;
        console.log(value.match(re));
    });
};
validatePlates();

let htmlText = ['<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>'];

let htmlText2 = [`
<html>
<body>
<img
src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
/>
<h1>ejemplo</h1>
<img
src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
/>
</body>
</html>
`];

function pullImage(showImg) {
    showImg.forEach(value => {
        let re = /<img(\n|\r)?\s?src="https:\/\/.*"(\n|\r)?\/>/gmi
        console.log(value.match(re));
    });
};
pullImage(htmlText);
pullImage(htmlText2);

function validateCard() {
    let cards = ["5299 6400 0000 0000", "5199-6400-0000-0000", "5399640012341234"]
    cards.forEach(value => {
        let re = /^(5[0-5]\d{2})[\s-]?(\d{4})[\s-]?(\d{4})[\s-]?(\d{4})$/;
        console.log(re.exec(value));
    });
};
validateCard();

function validatePassword(password) {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%&\=\+\?~\^-])[a-zA-Z\d?=.*[!@#\$%&\=\+\?~\^-]{8,}$/;
    return re.test(password);
    // return re.exec(password);
};
console.log("Contraseña: ", validatePassword("LemonCode123%a"));
console.log("Contraseña: ", validatePassword("Le23%a"));

function validateHex(color) {
    let re = /^#([0-9a-fA-F]{3}){1,2}$/;
    return re.test(color);

}
console.log("Color: ", validateHex("#77a345"));
console.log("Color: ", validateHex("#77a"));







