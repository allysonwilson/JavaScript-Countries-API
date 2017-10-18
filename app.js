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
  countries.forEach( function(country) {
    var option = document.createElement("option")
    option.innerText = country.name
    select.appendChild(option)

  })
  select.addEventListener("change", handleSelectChange())


}

var handleSelectChange = function () {
  var countryName = document.getElementById("countryName")
  console.log(this)
  countryName.innerText = (this.name)
}

makeRequest( url )

// var button = document.getElementById("btn")
// button.addEventListener("click", function () {
//   makeRequest( url )
// })

// var buttonClear = document.getElementById("clear")
// buttonClear.addEventListener("click", function () {
//   var ul = document.getElementById("countries")
//   ul.innerHTML = " "
// })
