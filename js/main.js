//hamburger menu
var hamburgerIcon = document.getElementById('hamburger-icon');
var hamburgerMenu = document.getElementById('hamburger-menu');

function toggleMenu() {
    hamburgerMenu.classList.toggle('show');
}

hamburgerIcon.addEventListener('click', toggleMenu);

var upcomingPrograms = document.getElementById('up-prog');
var progContent = document.getElementById('program-content')

function togglePrograms() {
    progContent.classList.toggle('show');
}

upcomingPrograms.addEventListener('click', togglePrograms);



//api
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);
        

        //Code Dealing With The API Data Goes Here

        // var cityNameContainer = document.getElementById('city-name');
        // cityNameContainer.innerHTML = apiResult.name;

        // var weatherDescriptionContainer = document.getElementById('weather-description');
        // weatherDescriptionContainer.innerHTML = apiResult.weather[0].description;

        console.log(apiResult.heights[1].height);

        var heightButtonOne = document.getElementById('height-morning');
        var heightButtonTwo = document.getElementById('height-mid-day');
        var heightButtonTwo = document.getElementById('height-evening');
        var heightContainer = document.getElementById('height-container');

        function showHeight() {
            heightContainer.innerHTML = apiResult.heights[0].height;
        }

        heightButtonOne.addEventListener('click', showHeight);
        
        

        


    }
};
xmlhttp.open('GET', 'https://www.worldtides.info/api?heights&lat=33.768321&lon=-118.195617&key=fc3990db-3425-40fb-8450-97ad3c2cf8be', true);
xmlhttp.send();