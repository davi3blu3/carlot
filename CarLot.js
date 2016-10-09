var CarLot = function() {

	// private variable
	var inventory = {};

	// return public methods
	return {
		loadInventory: function() {
			var loader = new XMLHttpRequest();

			loader.addEventListener("load", function() {
				inventory = JSON.parse(this.responseText).cars;
				CarLot.getInventory();
			});

			loader.open("GET", "inventory.json");
			loader.send();
		},
		getInventory: function() {
			var list = document.getElementById("carList");
			var outputString = "";

			for (var i = 0; i < inventory.length; i++) {
				var currentCar = inventory[i];

				outputString += `<div class="car"><h3>${currentCar.year + " " + currentCar.make + " " + currentCar.model}</h3><p>${currentCar.description}</p><h2>$${currentCar.price}</h2></div>`;
			}

			list.innerHTML = outputString;
		}
	}

}(CarLot || {});