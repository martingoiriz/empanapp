$(document).ready(function () {

    var counterMeat = 0;

    $("#add-meat").click(function () {
        counterMeat++;

        $("#meat").text(counterMeat);
    });



    var counterChicken = 0;

    $("#add-chicken").click(function () {
        counterChicken++;

        $("#chicken").text(counterChicken);
    });





    var counterCheese = 0;

    $("#add-cheese").click(function () {
        counterCheese++;

        $("#cheese").text(counterCheese);
    });




});