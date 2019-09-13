"use strict";

$(function() {

    $('#new_ticket').on('click', function(e) {
        e.preventDefault();

        const error = $('#error');
        error.html('');
        let submitFlag = true;

        let name = $("#name").val();
        let street = $("#street").val();
        let seat = $("#seat").val();


        if(name == '') {
            submitFlag = false;
            error.append(
                $("<p>",  { text: "Name cannot be null!", style: "color:red"})
            )
        }

        if(seat  <= 0 || seat >=200) {
            submitFlag = false;
            error.append(
                $("<p>", { text: "Seat number must be a number less than 200!", style: "color:red"})
            )
        }

        if(submitFlag) {
            this.submit();
        }

    })
});
