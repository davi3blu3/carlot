var CarLot = function() {

	// private variable
	var inventory = {};

	// return public methods
	return {
		loadInventory: function(callback, callback2) {
			var loader = new XMLHttpRequest();

			loader.addEventListener("load", function() {
				inventory = JSON.parse(this.responseText).cars;
				callback(inventory, callback2);
			});

			loader.open("GET", "inventory.json");
			loader.send();
		},
		getInventory: function(carsAvailable, callback2) {
			var list = document.getElementById("carList");
			var rowCounter = 0;
			var outputString = "";

			for (var i = 0; i < carsAvailable.length; i++) {
				var currentCar = carsAvailable[i];

				if (i % 3 === 0) {
					outputString += `<div class="row">`;
				}

				outputString +=
				`<div class="col-md-4">
				<div class="car">
				<h3>${currentCar.year + " " + currentCar.make + " " + currentCar.model}</h3>
				<p>${currentCar.description}</p>
				<h2>$${currentCar.price}</h2>
				</div>
				</div>`;

				if (i % 3 === 2 || i === carsAvailable.length - 1) {
					outputString += `</div><!-- / row -->`;
				}
			}

			list.innerHTML = outputString;
			callback2();
		}
	}

}(CarLot || {});