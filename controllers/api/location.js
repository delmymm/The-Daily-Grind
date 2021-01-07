
// location Data
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');


button.addEventListener('click', function (){
    fetch('https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap' + inputValue.value + '&appid=987c73bd1a5fdefe46a4172c1fe33bcf' + '&units=imperial')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        
        name.innerHTML = nameValue;
        
    })

    .catch(err => alert("Wrong City Name!"));

})