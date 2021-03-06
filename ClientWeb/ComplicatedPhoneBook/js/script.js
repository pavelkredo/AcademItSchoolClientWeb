﻿Vue.component('modal', {
    template: '#modal-template'
});

var vm = new Vue({
    el: ".data",
    data: {
        lastName: "",
        firstName: "",
        number: "",
        contacts: [],
        checkedContacts: [],
        isShowing: false,
        isContactWarningShowing: false,
        isWarningLastName: false,
        isWarningFirstName: false,
        isWarningNumber: false
    },
    methods: {
        addData: function () {
            if (this.lastName !== "" && this.lastName !== "Введите фамилию!"
                && this.firstName !== "" && this.firstName !== "Введите имя!"
                && this.number !== "" && this.number !== "Введите номер!") {
                if (this.contacts.some(elem => elem.number === this.number)) {
                    this.isContactWarningShowing = true;
                    return;
                }

                this.contacts.push({
                    lastName: this.lastName,
                    firstName: this.firstName,
                    number: this.number,
                    deleteButton: this.deleteButton,

                    showModal: false
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

            this.lastName = "";
            this.firstName = "";
            this.number = "";

            this.isShowing = true;
        },
        deleteData: function (index) {
            this.contacts.splice(index, 1);
        },
        textboxClicked: function () {
            this.isContactWarningShowing = false;

            if (this.lastName === "Введите фамилию!") {
                this.lastName = "";
                this.isWarningLastName = false;
            } else if (this.firstName === "Введите имя!") {
                this.firstName = "";
                this.isWarningFirstName = false;
            } else if (this.number === "Введите номер!") {
                this.number = "";
                this.isWarningNumber = false;
            }
        },
        removeChecked: function () {
            this.checkedContacts(function (item, i, checkedContacts) {
                deleteData(item.index);
            })
        }
    }
});