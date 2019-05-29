
var linkStations = [[0, 0, 10], [20, 20, 5], [10, 0, 12]];

function solveLinkStation(x, y) {
	var distances = [];
	var power = [];

	//alert("x =" + x + ", y =" + y);

	//Analysing input data to discard errors
	//if (x == null || y == null) {
	//    alert("Error: Both coordinates must have a value");
	//    throw new Error("Error: Both coordinates must have a value");
	//}

	document.getElementById("distances").innerHTML = "";
	document.getElementById("power").innerHTML = "";

	if (isNaN(Number(x)) || isNaN(Number(y))) {
		//alert("x =" + Number(x) + ", y =" + Number(y));
		alert("Error: Both coordinates must be a number");
		throw new Error("Error: Both coordinates must have a value");
	}
	if (x == "" || y == "") {
		alert("Error: Coordinates can't be empty, please insert valid coordinates");
		throw new Error("Error: Input coordinates can't be empty");
	}
	//x = parseFloat();
	//y = parseFloat();

	//document.getElementById("distances").innerHTML = "Distances between input coordinates and Link Stations (respectively):";
	document.getElementById("distances").innerHTML = "<h3>Calculation of the Distance between the input point and the Link Stations<h3/>";
	document.getElementById("power").innerHTML = "<h3>Calculation of the Power based on the Distance between both <h3/>";
	document.getElementById("results").style.display = "flex";

	for (var i = 0; i < linkStations.length; i++) {

		/*** GET THE DISTANCES WITH LINK STATIONS: ***/
		//Given that the distance between two points in 2D space is derived from the Pythagorean theorem as follows
		distances[i] = Math.sqrt(Math.pow(linkStations[i][0] - x, 2) + Math.pow(linkStations[i][1] - y, 2));
		document.getElementById("distances").innerHTML = document.getElementById("distances").innerHTML +
			"* Distance between Link Station: (" + linkStations[i][0] + "," + linkStations[i][1] + ") and point (" + x + "," + y +
			") is = " + Math.round(distances[i]) + "<br/><br/>";
			   
		/*** GET THE POWER RESULT FROM THE PREVIOUS DISTANCES: ***/
		//We know that the biggest power between the input point (device point) and the link station would
		//make for the most suitable one, therefore, we'll calculate the power between it and every link station
		//and compare their results.
		//the formula for power is: power = (reach - distance)^2, like this:
		power[i] = Math.pow(linkStations[i][2] - distances[i], 2);

		document.getElementById("power").innerHTML = document.getElementById("power").innerHTML +
			"* Power of Link Station: (" + linkStations[i][0] + "," + linkStations[i][1] + ") with point (" + x + "," + y + ") is = " + Math.round(power[i]);

		//If the ditance is bigger than the reach, power is 0
		if (distances[i] > linkStations[i][2]) {
			power[i] = 0;
			document.getElementById("power").innerHTML = document.getElementById("power").innerHTML +
				"<i>. Distance (" + Math.round(distances[i]) + ") > Reach (" + linkStations[i][2] + ") -> then Power = 0!<i/>" + "<br/><br/>";
		} else {
			//If it isn't, we continue
			document.getElementById("power").innerHTML = document.getElementById("power").innerHTML + "<br/><br/>";
		}
	}

	//The most suitable link station is the one with more power regarding the distance of the device. Therefore, we must obtain the
	//the biggest of the calculated powers
	switch (Math.max.apply(null, power)) {
		case 0:
			//If the case is 0, it means that no suitable link stations have been found
			document.getElementById("best").innerHTML = "No link station within reach for point (" + x + "," + y + ")";
			break;
		case power[0]:
			document.getElementById("best").innerHTML = "Best Link Station for point (" + x + "," + y + ") is (" + linkStations[0][0] + ", " + linkStations[0][1] + ") with power= " + Math.round(power[0]) + "!!!";
			break;
		case power[1]:
			document.getElementById("best").innerHTML = "Best Link Station for point (" + x + "," + y + ") is (" + linkStations[1][0] + ", " + linkStations[1][1] + ") with power= " + Math.round(power[1]) + "!!!";
			break;
		case power[2]:
			document.getElementById("best").innerHTML =	"Best Link Station for point (" + x + "," + y + ") is (" + linkStations[2][0] + ", " + linkStations[2][1] + ") with power= " + Math.round(power[2]) + "!!!";
			break;
		default:
			console.log("An error has ocurred in the switch");
	}
	////We select in each case
	//if (Math.max.appl.apply(null, power) == power[0]) {//Math.max(5, 10, 13)
	//	document.getElementById("power").innerHTML = document.getElementById("power").innerHTML +
	//		" Best Link Station for point (" + x + "," + y + ") is (" + linkStations[0][0] + "," + linkStations[0][1] + ") with power= " + power[0] + "<br/><br/>";
	//}
	//if (Math.max.appl.apply(null, power) == power[1]) {//Math.max(5, 10, 13)
	//	document.getElementById("power").innerHTML = document.getElementById("power").innerHTML +
	//		" Best Link Station for point (" + x + "," + y + ") is (" + linkStations[1][0] + "," + linkStations[1][1] + ") with power= " + power[1] + "<br/><br/>";
	//}
	//if (Math.max.appl.apply(null, power) == power[2]) {//Math.max(5, 10, 13) ==
	//	document.getElementById("power").innerHTML = document.getElementById("power").innerHTML +
	//		" Best Link Station for point (" + x + "," + y + ") is (" + linkStations[2][0] + "," + linkStations[2][1] + ") with power= " + power[2] + "<br/><br/>";
	//}
}