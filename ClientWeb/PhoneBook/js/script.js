$(function () {
    var i = 1;

    var secondNameVar = $(".add-second-name");
    var firstNameVar = $(".add-first-name");
    var numberVar = $(".add-phone-number");

    secondNameVar.focus(function () {
        secondNameVar.removeClass("warning");
        secondNameVar.val("");
    });

    firstNameVar.focus(function () {
        firstNameVar.removeClass("warning");
        firstNameVar.val("");
    });

    numberVar.focus(function () {
        numberVar.removeClass("warning");
        numberVar.val("");
    });

    $(".add-button").click(function () {
        var secondName = secondNameVar.val();
        var firstName = firstNameVar.val();
        var number = numberVar.val();

        if (secondName === "" || secondName === "Фамилия" || secondName === "Введите фамилию!") {
            secondNameVar.addClass("warning");
            secondNameVar.val("Введите фамилию!");
            return;
        }

        if (firstName === "" || firstName === "Имя" || firstName === "Введите имя!") {
            firstNameVar.addClass("warning");
            firstNameVar.val("Введите имя!");
            return;
        }

        if (number === "" || number === "Номер" || number === "Введите номер!") {
            numberVar.addClass("warning");
            numberVar.val("Введите номер!");
            return;
        }

        var secondNameColumn = $("<td></td>");
        secondNameColumn.text(secondName);

        var firstNameColumn = $("<td></td>");
        firstNameColumn.text(firstName);

        var numberColumn = $("<td></td>");;
        numberColumn.text(number);

        var row = $("<tr></tr>")
            .append("<td>" + i + "</td>")
            .append(secondNameColumn)
            .append(firstNameColumn)
            .append(numberColumn)
            .append("<td><input type=\"button\" class=\"delete-button\" value=\"Удалить\"</td>");

        $(".first-table").append(row);

        $(".delete-button").click(function() {
            $(this).closest("tr").remove();
        });

        i++;
    });
});