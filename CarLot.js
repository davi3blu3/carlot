var CarLot = function() {

	// private variable
	var inventory = [];

	// return public methods
	return {
		loadInventory: function() {
			var loader = new XMLHttpRequest();

			loader.addEventListener("load", function() {
				inventory = JSON.parse(this.responseText).cars;
				console.log(inventory);

				var list = document.getElementById("carList");
				var outputString = "";

				for (var i = 0; i < inventory.length; i++) {
					var currentCar = inventory[i];

					outputString += `<h2>${currentCar.year}</h2>`;
					outputString += `<h3>${currentCar.make + " " + currentCar.model}</h3>`;
				}

				list.innerHTML = outputString;
			});

			loader.open("GET", "inventory.json");
			loader.send();

		},
		getInventory: function() {

		}
	}

}(CarLot || {});