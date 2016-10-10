var CarLot = function() {

	// private variable
	var inventory = {};

	// return public methods
	return {
		loadInventory: function(callback) {
			var loader = new XMLHttpRequest();

			loader.addEventListener("load", function() {
				inventory = JSON.parse(this.responseText).cars;
				callback(inventory);
			});

			loader.open("GET", "inventory.json");
			loader.send();
		},
		getInventory: function(carsAvailable) {
			var list = document.getElementById("carList");
			var outputString = "";

			for (var i = 0; i < carsAvailable.length; i++) {
				var currentCar = carsAvailable[i];

				outputString += `<div class="car">
				<h3>${currentCar.year + " " + currentCar.make + " " + currentCar.model}</h3>
				<p>${currentCar.description}</p>
				<h2>$${currentCar.price}</h2>
				</div>`;
			}

			list.innerHTML = outputString;
		}
	}

}(CarLot || {});