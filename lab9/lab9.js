"use strict";

$(function() {

    $('#new_ticket').submit(function(e) {
        e.preventDefault();

        const error = $('#error');
        let name = $("#name").val();
        let street = $("#street").val();
        let seat = $("#seat").val();

        let seat_regex =  '/^[0-9] $/'

        if(name == '') {
            error.append(
                $("<p>",  { text: "Name cannot be null!", style: "color:red"})
            )
        }

        let test = seat_regex.test(seat);
        if(!test || seat >= 200) {
            error.append(
                $("<p>", { text: "Seat number must be a number less than 200!", style: "color:red"})
            )
        }


    })
});
