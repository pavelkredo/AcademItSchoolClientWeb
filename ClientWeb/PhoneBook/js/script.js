$(function () {
    var i = 1;

    $(".add-button").click(function(e) {
        var secondName = $(".add-second-name").val();
        var firstName = $(".add-first-name").val();
        var number = $(".add-phone-number").val();

        var row = $("<tr></tr>")
            .append("<td>" + i + "</td>")
            .append("<td>" + secondName + "</td>")
            .append("<td>" + firstName + "</td>")
            .append("<td>" + number + "</td>")
            .append("<td><input type=\"button\" class=\"delete-button\" value=\"Удалить\"</td>");

        $("tbody").append(row);

        $(".delete-button").click(function(e) {
            $(this).parent().parent().remove();
        });

        i++;
    });
});