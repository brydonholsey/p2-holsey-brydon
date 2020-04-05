//hamburger menu
var hamburgerIcon = document.getElementById('hamburger-icon');
var hamburgerMenu = document.getElementById('hamburger-menu');
// var laptopSize = window.matchMedia("(min-width:998px)");

// if (window.matchMedia("(min-width: 998px)").matches) {
//     hamburgerMenu.classList.add('show');
//     hamburgerMenu.classList.remove('hidden');
// } else if(window.matchMedia("(max-width: 997px)").matches) {
//     hamburgerMenu.classList.add('hidden');
// }

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

if (window.matchMedia("(min-width: 998px)").matches) {
    progContent.classList.add('show');
}



//api
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);
        

        //Code Dealing With The API Data Goes Here

       
        var heightCurrent = document.getElementById('height-current');
        var heightThree = document.getElementById('height-three');
        var heightSix = document.getElementById('height-six');
        var heightTwelve = document.getElementById('height-twelve');
        var heightContainer = document.getElementById('height-container');
        var height = apiResult.heights.height;
        var heightText = document.getElementById('height-text');

        function showHeightCurrent() {
            heightContainer.innerHTML = apiResult.heights[4].height;
            if (height > 0.3) {
                heightText.innerHTML = 'The tide is high'
              } else if (height < -0.3) {
                heightText.innerHTML = 'The tide is low'
              } else {
                heightText.innerHTML = 'The tide is mid-tide'
              }
        }

        function showHeightThree() {
            heightContainer.innerHTML = apiResult.heights[10].height;
            if (height > 0.3) {
                heightText.innerHTML = 'The tide is high'
              } else if (height < -0.3) {
                heightText.innerHTML = 'The tide is low'
              } else {
                heightText.innerHTML = 'The tide is mid-tide'
              }
        }

        function showHeightSix() {
            heightContainer.innerHTML = apiResult.heights[16].height;
            if (height > 0.3) {
                heightText.innerHTML = 'The tide is high'
              } else if (height < -0.3) {
                heightText.innerHTML = 'The tide is low'
              } else {
                heightText.innerHTML = 'The tide is mid-tide'
              }
        }

        function showHeightTwelve() {
            heightContainer.innerHTML = apiResult.heights[28].height;
            if (height > 0.3) {
                heightText.innerHTML = 'The tide is high'
              } else if (height < -0.3) {
                heightText.innerHTML = 'The tide is low'
              } else {
                heightText.innerHTML = 'The tide is mid-tide'
              }
        }

        heightCurrent.addEventListener('click', showHeightCurrent);
        heightThree.addEventListener('click', showHeightThree);
        heightSix.addEventListener('click', showHeightSix);
        heightTwelve.addEventListener('click', showHeightTwelve);


    }
};
xmlhttp.open('GET', 'https://www.worldtides.info/api?heights&lat=41.4921&lon=-71.3113&key=fc3990db-3425-40fb-8450-97ad3c2cf8be', true);
xmlhttp.send();