/* eslint linebreak-style: ["error", "windows"] */
const micro = document.getElementById('micro');
const searchButton = document.getElementById('search-button');
const background = document.getElementById('background');
const searchInput = document.getElementById('search-input');
const buttonTemperatureC = document.getElementById('button-temperatureC');
const buttonTemperatureF = document.getElementById('button-temperatureF');
const body = document.getElementById('body');
const reload = document.getElementById('reload');


let cityName = 'Minsk';
searchButton.onclick = function searchGlobal() {
  cityName = searchInput.value;
  const elem1 = document.querySelector('#one');
  const elem2 = document.querySelector('#two');
  const elem3 = document.querySelector('#three');
  const elem4 = document.querySelector('#four');
  const elem5 = document.querySelector('#five');
  const elem6 = document.querySelector('#six');
  const elem7 = document.querySelector('#seven');
  const elem8 = document.querySelector('#eight');
  const elem9 = document.querySelector('#nine');
  const elem10 = document.querySelector('#ten');
  const elem11 = document.querySelector('.ymaps-2-1-75-map');
  elem1.remove();
  elem2.remove();
  elem3.remove();
  elem4.remove();
  elem5.remove();
  elem6.remove();
  elem7.remove();
  elem8.remove();
  elem9.remove();
  elem10.remove();
  elem11.remove();
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cb5e853d1ba5c84f8dd05893c436834c`)
    .then(function (resp) { return resp.json()}) // convert to json
    .then(function (data) { 
      const country = data.sys.country;
      const city = data.name;
      const feelLike = data.main.feels_like;
      const wind = data.wind.speed;
      const humidity = data.main.humidity;
      let temperature = data.main.temp;
      temperature = Math.round(temperature);
      temperature -= 273;
      const iconn = data.weather[0]['icon'];
      const mainWeather = data.weather[0]['main'];
      window.onload = function restart() {
        const url = `https://api.unsplash.com/photos/random?query=${mainWeather}&client_id=b2d8a5b6caa01bbfe55a1c1b179ffc56dd90e40b1a0c2dbc15142085767a5d4b`;
        fetch(url)
          .then(res => res.json())
          .then(data => { 
  	let resultLink = data.urls.small;
            body.background = resultLink;
            body.style.background = `url(${resultLink}) no-repeat`;
            body.style.backgroundSize = '100%';
  });
};
      reload.onclick = function getLinkToImage() {
        const url = `https://api.unsplash.com/photos/random?query=${mainWeather}&client_id=b2d8a5b6caa01bbfe55a1c1b179ffc56dd90e40b1a0c2dbc15142085767a5d4b`;
        fetch(url)
        .then(res => res.json())
        .then(data => { 
  	var resultLink = data.urls.small;
            body.background = resultLink;
            body.style.background = `url(${resultLink}) no-repeat`;
            body.style.backgroundSize = '100%';
         });
      };
      var date = new Date();
      var str = date.toString();
      str = str.slice(0, -40);
      var lat = data.coord.lat;
      var lon = data.coord.lon;


buttonTemperatureC.onclick = function TemperatureC() {
	var elem6 = document.querySelector("#six");
	var elem3 = document.querySelector("#three");
	elem3.remove();
    	    elem6.remove();
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cb5e853d1ba5c84f8dd05893c436834c`)
    .then(function( resp ){return resp.json()}) // convert to json
          .then(function( data ){ 
    	    	var feelLike = data.main.feels_like;
            feelLike = Math.round(feelLike);
            feelLike -= 273;

    	var temperature = data.main.temp;
    temperature = Math.round(temperature);
    temperature -= 273;

    	    var h1 = document.createElement('h1');
            h1.innerHTML = `${temperature}`;
            h1.id = 'six';
            h1.className = 'temperature';
            background.appendChild(h1);


            var h3 = document.createElement('h3');
h3.innerHTML = `FEELS LIKE: ${feelLike}`;
h3.id = 'three';
            h3.className = 'feelLikee';
            background.appendChild(h3);
            })
            }
          buttonTemperatureF.onclick = function TemperatureF() {
		var elem6 = document.querySelector("#six");
	var elem3 = document.querySelector("#three");
	elem3.remove();
    	    elem6.remove();
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cb5e853d1ba5c84f8dd05893c436834c`)
    .then(function(resp){ return resp.json()}) // convert to json
    .then(function(data){ 
    	var feelLike = data.main.feels_like;
    feelLike = Math.round(feelLike);
    feelLike += 273;
    feelLike -= 273;


    	var temperature = data.main.temp;
    temperature = Math.round(temperature);
    temperature += 273;
    temperature -= 273;

    	    var h1 = document.createElement('h1');
            h1.innerHTML = `${temperature}`;
            h1.id = 'six';
            h1.className = 'temperature';
            background.appendChild(h1);


            var h3 = document.createElement('h3');
h3.innerHTML = `FEELS LIKE: ${feelLike}`;
h3.id = 'three';
h3.className = 'feelLikee';
background.appendChild(h3);
})
}

ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [lat, lon],
            zoom: 7
        });
      }
      var h1 = document.createElement('h1');
      h1.innerHTML = `${city}, ${country}`;
      h1.id = 'one';
      h1.className = 'geolocation';
      background.appendChild(h1);

      var h3 = document.createElement('h3');
      h3.innerHTML = 'OVERCAST';
      h3.id = 'two';
      h3.className = 'overcast';
      background.appendChild(h3);

      var h3 = document.createElement('h3');
      h3.innerHTML = `FEELS LIKE: ${feelLike}`;
      h3.id = 'three';
      h3.className = 'feelLike';
      background.appendChild(h3);

      var h3 = document.createElement('h3');
      h3.innerHTML = `WIND: ${wind} m/s`;
      h3.id = 'four';
      h3.className = 'wind';
      background.appendChild(h3);

      var h3 = document.createElement('h3');
      h3.innerHTML = `HUMIDITY: ${humidity}%`;
      h3.id = 'five';
      h3.className = 'humidity';
      background.appendChild(h3);

      var h1 = document.createElement('h1');
      h1.innerHTML = `${temperature}`;
      h1.id = 'six';
      h1.className = 'temperature';
      background.appendChild(h1);

      var img = document.createElement('img');
      img.innerHTML = `${temperature}`;
      img.id = 'seven';
      img.className = 'main-icon';
      img.src = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`;
      background.appendChild(img);

      var h3 = document.createElement('h3');
      h3.innerHTML = `${str}`;
      h3.id = 'eight';
      h3.className = 'date';
      background.appendChild(h3);

      var h1 = document.createElement('h1');
      h1.innerHTML = `Latitude ${lat}`;
      h1.id = 'nine';
      h1.className = 'coords1';
      body.appendChild(h1);

      var h1 = document.createElement('h1');
      h1.innerHTML = `Longitude ${lon}`;
      h1.id = 'ten';
      h1.className = 'coords';
      body.appendChild(h1);
})
}

// Minsk
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cb5e853d1ba5c84f8dd05893c436834c`)
    .then(function(resp){ return resp.json()}) // convert to json
    .then(function(data){ 
    	console.log(data);
    var country = data.sys.country;
    var city = data.name;
    var feelLike = data.main.feels_like;
    feelLike = Math.round(feelLike);
    feelLike -= 273;
    var wind = data.wind.speed;
    var humidity = data.main.humidity;
    var temperature = data.main.temp;
    temperature = Math.round(temperature);
    temperature -= 273;
    var iconn = data.weather[0]['icon'];
    var mainWeather = data.weather[0]['main'];
    restart();
    function restart() {
const url = `https://api.unsplash.com/photos/random?query=${mainWeather}&client_id=b2d8a5b6caa01bbfe55a1c1b179ffc56dd90e40b1a0c2dbc15142085767a5d4b`;
fetch(url)
  .then(res => res.json())
  .then(data => { 
  	var resultLink = data.urls.small;
    body.background = resultLink;
    body.style.background = `url(${resultLink}) no-repeat`;
    body.style.backgroundSize = '100%';
  });
}
		reload.onclick = function getLinkToImage() {
const url = `https://api.unsplash.com/photos/random?query=${mainWeather}&client_id=b2d8a5b6caa01bbfe55a1c1b179ffc56dd90e40b1a0c2dbc15142085767a5d4b`;
fetch(url)
  .then(res => res.json())
  .then(data => { 
  	var resultLink = data.urls.small;
    body.background = resultLink;
    body.style.background = `url(${resultLink}) no-repeat`;
    body.style.backgroundSize = '100%';
  });
}
var date = new Date();
var str = date.toString();
str = str.slice(0, -40);
var lat = data.coord.lat;
var lon = data.coord.lon;


buttonTemperatureC.onclick = function TemperatureC() {
	var elem6 = document.querySelector("#six");
	var elem3 = document.querySelector("#three");
	elem3.remove();
    	    elem6.remove();
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cb5e853d1ba5c84f8dd05893c436834c`)
    .then(function(resp){ return resp.json()}) // convert to json
    .then(function(data){ 
    	var feelLike = data.main.feels_like;
    feelLike = Math.round(feelLike);
    feelLike -= 273;



    	var temperature = data.main.temp;
    temperature = Math.round(temperature);
    temperature -= 273;

    	    var h1 = document.createElement('h1');
            h1.innerHTML = `${temperature}`;
            h1.id = 'six';
            h1.className = 'temperature';
            background.appendChild(h1);


            var h3 = document.createElement('h3');
h3.innerHTML = `FEELS LIKE: ${feelLike}`;
h3.id = 'three';
h3.className = 'feelLikee';
background.appendChild(h3);
})
}
buttonTemperatureF.onclick = function TemperatureF() {
		var elem6 = document.querySelector("#six");
		var elem3 = document.querySelector("#three");
		elem3.remove();
    	    elem6.remove();
    	    
	
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cb5e853d1ba5c84f8dd05893c436834c`)
    .then(function(resp){ return resp.json()}) // convert to json
    .then(function(data){ 
    	var feelLike = data.main.feels_like;
    feelLike = Math.round(feelLike);
    feelLike += 273;
    feelLike -= 273;


    	var temperature = data.main.temp;
    temperature = Math.round(temperature);
    temperature += 273;
    temperature -= 273;

    	    var h1 = document.createElement('h1');
            h1.innerHTML = `${temperature}`;
            h1.id = 'six';
            h1.className = 'temperature';
            background.appendChild(h1);


            var h3 = document.createElement('h3');
h3.innerHTML = `FEELS LIKE: ${feelLike}`;
h3.id = 'three';
h3.className = 'feelLikee';
background.appendChild(h3);
})
}


ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [lat, lon],
            zoom: 7
        });
    }



micro.onclick = function micro() {
window.webkitSpeechRecognition = window.webkitSpeechRecognition || window.webkitSpeechRecognition;

      const recognition = new webkitSpeechRecognition();
	    recognition.interimResults = true;

      recognition.addEventListener('result', e => {
		  const transcript = Array.from(e.results)
		      .map(result => result[0])
		      .map(result => result.transcript)
          .join('');

		    searchInput.value = transcript;
      });

      recognition.start();
    };


    var h1 = document.createElement('h1');
    h1.innerHTML = `${city}, ${country}`;
    h1.id = 'one';
    h1.className = 'geolocation';
    background.appendChild(h1);

    var h3 = document.createElement('h3');
    h3.innerHTML = 'OVERCAST';
    h3.id = 'two';
    h3.className = 'overcast';
    background.appendChild(h3);

    var h3 = document.createElement('h3');
    h3.innerHTML = `FEELS LIKE: ${feelLike}`;
    h3.id = 'three';
    h3.className = 'feelLike';
    background.appendChild(h3);

    var h3 = document.createElement('h3');
    h3.innerHTML = `WIND: ${wind} m/s`;
    h3.id = 'four';
    h3.className = 'wind';
    background.appendChild(h3);

    var h3 = document.createElement('h3');
    h3.innerHTML = `HUMIDITY: ${humidity}%`;
    h3.id = 'five';
    h3.className = 'humidity';
    background.appendChild(h3);

    var h1 = document.createElement('h1');
    h1.innerHTML = `${temperature}`;
    h1.id = 'six';
    h1.className = 'temperature';
    background.appendChild(h1);

    var img = document.createElement('img');
    img.innerHTML = `${temperature}`;
    img.id = 'seven';
    img.className = 'main-icon';
    img.src = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`;
    background.appendChild(img);

    var h3 = document.createElement('h3');
    h3.innerHTML = `${str}`;
    h3.id = 'eight';
    h3.className = 'date';
    background.appendChild(h3);

    var h1 = document.createElement('h1');
    h1.innerHTML = `Latitude ${lat}`;
    h1.id = 'nine';
    h1.className = 'coords1';
    body.appendChild(h1);

    var h1 = document.createElement('h1');
    h1.innerHTML = `Longitude ${lon}`;
    h1.id = 'ten';
    h1.className = 'coords';
    body.appendChild(h1);
  });
