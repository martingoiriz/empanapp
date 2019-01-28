$(document).ready(function() {
  var counterTotal = 0;

  var counterMeat = 0;

  $("#add-meat").click(function getMeat() {
    counterMeat++;

    $("#meat").text(counterMeat);

    if (getMeat) {
      counterTotal++;
    } else {
      console.log("No");
    }
    $("#total").text(counterTotal);
  });

  var counterChicken = 0;

  $("#add-chicken").click(function getChicken() {
    counterChicken++;

    $("#chicken").text(counterChicken);

    if (getChicken) {
      counterTotal++;
    } else {
      console.log("No");
    }
    $("#total").text(counterTotal);
  });

  var counterCheese = 0;

  $("#add-cheese").click(function getCheese() {
    counterCheese++;

    $("#cheese").text(counterCheese);

    if (getCheese) {
      counterTotal++;
    } else {
      console.log("No");
    }
    $("#total").text(counterTotal);
  });

  // -
  // -
  // -
  // -
});
