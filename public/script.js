var input = document.querySelector('#textBox');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
let locationIcon = document.querySelector('.icon')
let locationIcon1 = document.querySelector('.icon1')

var button= document.querySelector('#submitButton');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=8af34d1c8862f8b9f2dfc50330384d80')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  let icon = data.weather[0].icon
    const img = document.querySelector('.icon');
    img.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)
    const img1 = document.querySelector('.icon1');
    img1.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)
    main.innerHTML = nameValue;
    temp.innerHTML = "Temp - "+tempValue;

})

.catch(err => alert("Wrong city name!"));
})