document.addEventListener("DOMContentLoaded",
    function() {
        var onclick = document.body.querySelector(".onclick");
        var textbox = document.body.querySelector(".addtext");

        onclick.addEventListener("click", enterResult, false);
        var ul = document.createElement("ul");

        function enterResult() {
            var text = textbox.value;

            if (text !== "") {
                textbox.value = null;

                var li = document.createElement("li");
                li.innerText = text;

                var deleteButton = document.createElement("input");
                deleteButton.type = "button";
                deleteButton.className = "deleteButton";
                deleteButton.value = "Удалить";

                li.appendChild(deleteButton);

                ul.appendChild(li);

                deleteButton.addEventListener("click", function() {
                    li.remove();
                }, false);
            }
        }

        document.body.appendChild(ul);
    });