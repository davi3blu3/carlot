var CarLot = function(objToAugment) {

	objToAugment.removeClickedClass = function() {
		var clickdEl = document.getElementsByClassName("clicked");
		if (clickdEl != undefined) {
			for (j = 0; j < clickdEl.length; j++) {
					clickdEl[j].classList.remove("clicked");
			}
		}
	};

	objToAugment.activateEvents = function() {
		var carEl = document.getElementsByClassName("car");

		for (i = 0; i < carEl.length; i++) {

			carEl[i].addEventListener("click", function(e) {
				CarLot.removeClickedClass();
				this.classList.add("clicked");
			});
		}
	};

	return objToAugment;

}(CarLot || {});

CarLot.loadInventory(CarLot.getInventory, CarLot.activateEvents);