document.addEventListener("DOMContentLoaded", function () {
    const itemCounts = {};
  
    const total = {
      total: 0,
      element: document.getElementById("total"),
    };
  
    function addItem(buttonId, counterId, totalCounter, itemName, redirectAt) {
      const button = document.getElementById(buttonId);
      const counter = document.getElementById(counterId);
      let itemCount = 0;
  
      button.addEventListener("click", function () {
        itemCount++;
        totalCounter.total++;
        itemCounts[itemName] = itemCount;
        counter.textContent = itemCount;
        totalCounter.element.textContent = totalCounter.total;

        if (redirectAt && itemCount >= redirectAt.count) {
          window.location.href = redirectAt.url;
        }
      });
    }
  
    addItem("clickAddCarne", "countFrita", total, "Carne Frita");
    addItem("clickAddCarneCuchillo", "countCarne", total, "Carne Cuchillo", { count: 20, url: "deathNote.html" });
    addItem("clickAddPollo", "countChicken", total, "Pollo");
    addItem("clickAddPolloCrema", "countPolloCrema", total, "Pollo a la Crema");
    addItem("clickAddJyQ", "countCheese", total, "Jamon y Queso");
    addItem("clickAddVerdura", "countVerdura", total, "Verdura");
    addItem("clickAddCaprese", "countCaprese", total, "Caprese");
    addItem("clickAddChampi", "countChampiñon", total, "Champi");
    addItem("clickAdd4Quesos", "count4Quesos", total, "4 Quesos");
    addItem("clickAddCalabresa", "countCalabresa", total, "Calabresa");
    addItem("clickAddRoque", "countRoquefort", total, "Roquefort");
    addItem("clickAddPanceta", "countPanceta", total, "Panceta y Ciruela");
    addItem("clickAddRosini", "countRosini", total, "Rosini");
  
    function copyToClipboard() {
      const totalValue = total.element.textContent;
  
      let copyText = "Total: " + totalValue + "\n" + "\n";
  
      Object.keys(itemCounts).forEach((item) => {
        if (itemCounts[item] > 0) {
          copyText += `${item}: ${itemCounts[item]}\n` + "\n";
        }
      });
  
      navigator.clipboard
        .writeText(copyText)
        .then(() => {
          console.log("Copied to clipboard:\n", copyText);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  
    const copyBtn = document.getElementById("copyBtn");
    copyBtn.addEventListener("click", copyToClipboard);
  });
  