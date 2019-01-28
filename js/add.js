$(document).ready(function() {
  // **************************************
  // ----------------- TOTAL
  // **************************************

  var sum = 0;
  var total = $("#total");

  console.log(total);

  // **************************************
  // ----------------- CARNE
  // **************************************
  var clickAddMeat = $("#clickAddMeat");
  var countMeat = $("#countMeat");
  var counterMeat = 0;

  clickAddMeat.click(function() {
    counterMeat++;
    sum++;

    countMeat.html(counterMeat);
    total.html(sum);
  });

  // **************************************
  // ----------------- POLLO
  // **************************************

  var clickAddChicken = $("#clickAddChicken");
  var countChicken = $("#countChicken");
  var counterChicken = 0;

  clickAddChicken.click(function() {
    counterChicken++;
    sum++;

    countChicken.html(counterChicken);
    total.html(sum);
  });

  // **************************************
  // ----------------- JAMÓN Y QUESO
  // **************************************

  var clickAddCheese = $("#clickAddCheese");
  var countCheese = $("#countCheese");
  var counterCheese = 0;

  clickAddCheese.click(function() {
    counterCheese++;
    sum++;

    countCheese.html(counterCheese);
    total.html(sum);
  });

  // **************************************
  // ----------------- VERDURA
  // **************************************

  var clickAddVeg = $("#clickAddVeg");
  var countVeg = $("#countVeg");
  var counterVeg = 0;

  clickAddVeg.click(function() {
    counterVeg++;
    sum++;

    countVeg.html(counterVeg);
    total.html(sum);
  });

  // *****************************************
});
