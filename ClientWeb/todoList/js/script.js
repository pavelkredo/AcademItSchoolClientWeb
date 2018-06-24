document.addEventListener("DOMContentLoaded",
    function() {
        var onclick = document.body.querySelector(".onclick");
        var textbox = document.body.querySelector(".addtext");

        onclick.addEventListener("click", enterResult, false);

        function enterResult() {
            var text = textbox.value;

            if (text !== "") {
                textbox.value = null;

                var note = document.createElement("li");
                note.innerText = text;

                var ul = document.createElement("ul");
                ul.appendChild(note);

                var deleteButton = document.createElement("input");
                deleteButton.type = "button";
                deleteButton.className = "deleteButton";
                deleteButton.value = "Удалить";

                ul.appendChild(deleteButton);

                document.body.appendChild(ul);

                deleteButton.addEventListener("click", deleteButtonsFunc(ul), false);
            }
        }

        function deleteButtonsFunc(ul) {
            return function() {
                ul.remove();
            }
        }
    });