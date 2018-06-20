var onclick = document.body.querySelector(".onclick");
var resultBox = document.body.querySelector(".resultBox");

onclick.addEventListener("click", enterResult, false);

function enterResult() {
    var a = document.body.querySelector(".coefficient1").value;
    var b = document.body.querySelector(".coefficient2").value;
    var c = document.body.querySelector(".coefficient3").value;

    var discriminant = (b * b) - (4 * a * c);
    var finalResult;

    if (discriminant > 0) {
        var radical1 = (-b - Math.sqrt(discriminant)) / (2 * a);
        var radical2 = (-b + Math.sqrt(discriminant)) / (2 * a);
        finalResult = radical1 + ", " + radical2;
    }
    else if (discriminant === 0) {
        finalResult = -b / (2 * a);
    }
    else if (discriminant < 0) {
        finalResult = "Корней нет";
    }

    resultBox.value = finalResult;
}