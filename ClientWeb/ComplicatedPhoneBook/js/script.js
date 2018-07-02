var vm = new Vue({
    el: ".data",
    data: {
        lastName: "",
        firstName: "",
        number: "",
        contacts: [],
        isShowing: false,
        isWarningLastName: false,
        isWarningFirstName: false,
        isWarningNumber: false
    },
    methods: {
        addData: function () {
            if (this.lastName !== "" && this.lastName !== "Введите фамилию!"
                && this.firstName !== "" && this.firstName !== "Введите имя!"
                && this.number !== "" && this.number !== "Введите номер!") {
                this.contacts.push({
                    lastName: this.lastName,
                    firstName: this.firstName,
                    number: this.number,
                    deleteButton: this.deleteButton
                });
            } else {
                if (this.lastName === "" || this.lastName === "Введите фамилию!") {
                    this.lastName = "Введите фамилию!";
                    this.isWarningLastName = true;
                    return;
                }

                if (this.firstName === "" || this.firstName === "Введите имя!") {
                    this.firstName = "Введите имя!";
                    this.isWarningFirstName = true;
                    return;
                }

                if (this.number === "" || this.number === "Введите номер!") {
                    this.number = "Введите номер!";
                    this.isWarningNumber = true;
                    return;
                }
            }

            this.isShowing = true;
        },
        deleteData: function(index) {
            this.contacts.splice(index, 1);
        }
    }
});