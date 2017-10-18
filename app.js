var url = "https://restcountries.eu/rest/v2/all"

var makeRequest = function( url ) {
  var request = new XMLHttpRequest()
  request.open( "GET", url );
  request.addEventListener( "load", function() {
    var countries = JSON.parse( this.responseText )
    addCountriesToList(countries)
  })
  request.send()
}

var render = function(country){
  var countryName = document.getElementById("countryName")
  countryName.innerText = "Name: " + country.name
  var countryPop = document.getElementById("countryPop")
  countryPop.innerText = "Population: " + country.population
  var countryCapital = document.getElementById("countryCapital")
  countryCapital.innerText = "Capital: " + country.capital
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
    var borders = []
    var country = countries[this.value]
    save(country)
    render(country)
      for (alphaCode of country.borders) {
        for (country of countries) {
          if (country.alpha3Code === alphaCode) {
              borders.push(country)
          }
        }
      }
      for (bordering of borders) {
        renderBordering(bordering)
      }
  })
}

var restore = function () {
  var jsonString = localStorage.getItem("country")
  var savedCountry = JSON.parse(jsonString)
  return savedCountry
}

var save = function (country) {
  var jsonString = JSON.stringify(country)
  localStorage.setItem("country", jsonString)
}

var renderBordering = function(country){
  var ul = document.createElement("ul")
  var countryNameLi = document.createElement("li")
  countryNameLi.innerText = "Name: " + country.name
  ul.appendChild(countryNameLi)
  var countryPopLi = document.createElement("li")
  countryPopLi.innerText = "Population: " + country.population
  ul.appendChild(countryPopLi)
  var countryCapitalLi = document.createElement("li")
  countryCapitalLi.innerText = "Capital: " + country.capital
  ul.appendChild(countryCapitalLi)
  var div = document.getElementById('bordering')
  div.appendChild(ul)

}

makeRequest( url )

window.addEventListener("load", function() {
  render(restore())
})




// var handleSelectChange = function () {
//   var country = countries[this.value]
//   save(country)
//   var countryName = document.getElementById("countryName")
//   countryName.innerText = "Name: " + country.name
//   var countryPop = document.getElementById("countryPop")
//   countryPop.innerText = "Population: " + country.population
//   var countryCapital = document.getElementById("countryCapital")
//   countryCapital.innerText = "Capital: " + country.capital
// }

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
