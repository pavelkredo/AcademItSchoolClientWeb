var onclick = document.body.querySelector(".onclick");
var textbox = document.body.querySelector(".addtext");
var number = 0;
var deleteButtons = [];

onclick.addEventListener("click", enterResult, false);

function enterResult() {
    var text = textbox.value;

    textbox.value = null;

    var note = document.createElement("label");
    note.innerText = text;

    var div = document.createElement("div");
    div.className = "row" + number;
    div.appendChild(note);

    var deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.className = "deleteButton";
    deleteButton.value = "Удалить";

    div.appendChild(deleteButton);

    document.body.appendChild(div);

    deleteButtons = document.body.querySelectorAll(".deleteButton");

    deleteButtons[number].addEventListener("click", deleteButtonsFunc(number), false);

    number++;
}

function deleteButtonsFunc(i) {
    return function () {
        var del = document.body.querySelector(".row" + i);
        del.remove();
        number--;
    }
}