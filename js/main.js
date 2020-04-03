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

        console.log(apiResult);

        var heightCurrent = document.getElementById('height-current');
        var heightThree = document.getElementById('height-three');
        var heightSix = document.getElementById('height-six');
        var heightContainer = document.getElementById('height-container');

        function showHeightCurrent() {
            heightContainer.innerHTML = apiResult.heights[4].height;
        }

        function showHeightThree() {
            heightContainer.innerHTML = apiResult.heights[10].height;
        }

        function showHeightSix() {
            heightContainer.innerHTML = apiResult.heights[16].height;
        }

        heightCurrent.addEventListener('click', showHeightCurrent);
        heightThree.addEventListener('click', showHeightThree);
        heightSix.addEventListener('click', showHeightSix);
        
        

        


    }
};
xmlhttp.open('GET', 'https://www.worldtides.info/api?heights&lat=41.4921&lon=-71.3113&key=fc3990db-3425-40fb-8450-97ad3c2cf8be', true);
xmlhttp.send();