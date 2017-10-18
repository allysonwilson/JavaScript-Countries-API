var url = "https://restcountries.eu/rest/v2/all"

var makeRequest = function( url ) {
  var request = new XMLHttpRequest()
  request.open( "GET", url );
  request.addEventListener( "load", function() {
    var countries = JSON.parse( this.responseText )
    addCountriesToList( countries )
  })
  request.send()
}

var addCountriesToList = function( countries ) {
  var select = document.getElementById("selectCountry")
  countries.forEach( function(country, index) {
    var option = document.createElement("option")
    option.innerText = country.name
    option.value = index
    select.appendChild(option)

  })
  select.addEventListener("change", function () {
    var country = countries[this.value]
    var countryName = document.getElementById("countryName")
    countryName.innerText = "Name: " + country.name
    var countryPop = document.getElementById("countryPop")
    countryPop.innerText = "Population: " + country.population
    var countryCapital = document.getElementById("countryCapital")
    countryCapital.innerText = "Capital: " + country.capital
  })
}


makeRequest( url )


// var handleSelectChange = function () {
//   console.log(countries);
//   var countryName = document.getElementById("countryName")
//   console.log(this)
//   countryName.innerText = (this.name)
// }

// var button = document.getElementById("btn")
// button.addEventListener("click", function () {
//   makeRequest( url )
// })

// var buttonClear = document.getElementById("clear")
// buttonClear.addEventListener("click", function () {
//   var ul = document.getElementById("countries")
//   ul.innerHTML = " "
// })
