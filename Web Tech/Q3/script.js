const hideEmail = () => {
  
	document.getElementById("inputTxt").style.display = "block";
	document.getElementById("outputTxt").style.display = "block";

	var user_email = document.getElementById("Txt").value
	var avg, splitted, part1, part2;
	splitted = user_email.split("@");
	part1 = splitted[0];
	part1 = part1.substring(0, 3);
	part2 = splitted[1];
	var protectedEmail =  part1 + ".....@" + part2;
    

	document.getElementById("inputTxt").innerHTML = "<b>Input Email => </b>" + user_email;
	document.getElementById("outputTxt").innerHTML = "<b>Hidden Email => </b>" + protectedEmail;
  
}