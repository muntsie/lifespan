// this app calculates lifespan (accurate within 1 year)

// type the person's first and last name inside the quotation marks that follow
var person = prompt("Please enter a person's name", "Charles Babbage");
document.getElementById("person").innerHTML = person;
// type the person's birth year inside the quotation marks below
var birthYear = prompt("Please enter the person's birth year", "1791");
document.getElementById("birth").innerHTML = birthYear;
var birthCentury = birthYear.substr(0, 2);
// type the person's deathyear inside the quotation marks below
var deathYear = prompt("Please enter the person's death year", "1871");
document.getElementById("death").innerHTML = deathYear;
var deathCentury = deathYear.substr(0, 2);
if (birthCentury === deathCentury) {
    var yearsLived = (deathYear - birthYear);
    document.getElementById("lifeSpan").innerHTML = person + " lived " + yearsLived + " years.";
} else {
    var nextCentury = deathCentury + "00";
    var yearsLived = (deathYear - nextCentury) + (nextCentury - birthYear);
    document.getElementById("lifeSpan").innerHTML = person + " lived " + yearsLived + " years.";
}


/*
  # Charles Babbage 1791-1871
  # Ada King 1815-1852
  # Alan Turing 1912 to 1954
  # Grace Hopper 1906-1992
  
  # output: Charles Babbage lived 80 years.
  # output: Ada King lived 37 years.
  # output: Alan Turing lived 42 years.
  # output: Grace Hopper lived 86 years. 
  # output: Richard Buckminster Fuller lived 88 years.
  # output: Steven Paul Jobs lived 56 years.
  # output: Buddy Holly lived 23 years. */