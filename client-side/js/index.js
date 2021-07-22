import crud from "./crud/crud.js"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Planet from "./components/Planet";
import Planets from "./components/Planets";
import About from "./components/About";
import Contact from "./components/Contact";
import apiActions from './api-actions/api-actions';
import Quiz from './components/Quiz';
import FavoriteFact from './components/FavoriteFact'

buildPage();

function buildPage() {
  header();
  footer();
  HomePage();
  navPlanets();
  navAbout();
  navContact();
  quizPage();
  navFacts();

}

function header() {
  const headerElem = document.querySelector(".header");
  headerElem.innerHTML = Header();
}
function footer() {
  const footerElem = document.querySelector(".footer");
  footerElem.innerHTML = Footer();
}

function HomePage() {
  const homeElem = document.querySelector(".nav-list__home");
  homeElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Home();
  });
}

function quizPage() {
  const quizElem = document.querySelector(".nav-list__quiz");
  quizElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Quiz();
  });
}

function navAbout() {
  const aboutElem = document.querySelector(".nav-list__about");
  aboutElem.addEventListener("click", () => {
    app.innerHTML = About();
  });
}
function navContact() {
  const contactElem = document.querySelector(".nav-list__contact");
  contactElem.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = Contact();
  });
}

function navPlanets() {
    const planetsElem = document.querySelector(".nav-list__planets");
    planetsElem.addEventListener("click", () => {
        const app = document.querySelector('#app');
        apiActions.getRequest('http://localhost:8080/api/planets/', planets => {
        // console.log(planets);
        app.innerHTML = Planets(planets);
          });
          renderPlanetInfo();
        });
      }


      function navFacts() {
        const factsElem = document.querySelector(".nav-list__favorite");
        factsElem.addEventListener("click", () => {
            const app = document.querySelector('#app');
            apiActions.getRequest('http://localhost:8080/api/favoritefact/', (favorite) => {
            console.log(favorite);
            app.innerHTML = FavoriteFact(favorite);
              });
            });
          }

function renderPlanetInfo() {
  app.addEventListener('click', () => {
    if (event.target.classList.contains('planets-list__name')) {
      const planetId = event.target.querySelector('#planetId').value;
      apiActions.getRequest(`http://localhost:8080/api/planets/${planetId}`, planet => {
        app.innerHTML = Planet(planet);
      })
    }
  })
}

          app.addEventListener('click', () =>{
            if (event.target.classList.contains('add-favorite-fact__submit')) {
              const favoriteFact = event.target.parentElement.querySelector('.add-favorite-fact').value;
              console.log(favoriteFact);
              apiActions.postRequest('http://localhost:8080/api/favoritefact/add', {
                  favoriteFact: favoriteFact
              }, (planet) => app.innerHTML = Planet(planet));
          }
      })

      var numQues = 15;

      var numChoi = 3;
      var i = i;
      var scorePer = scorePer;
      getScore = false && getScore();
      var answers = new Array(15);
      
      answers[0] = "doesn't like";
      
      answers[1] = "don't come";
      
      answers[2] = "come";
      
      answers[3] = "don't";
      
      answers[4] = "doesn't make";
      
      answers[5] = "seem";
      
      answers[6] = "don't have";
      
      answers[7] = "doesn't have";
      
      answers[8] = "takes";
      
      answers[9] = "want";
      
      answers[10] = "comes";
      
      answers[11] = "doesn't know";
      
      answers[12] = "tries";
      
      answers[13] = "play";
      
      answers[14] = "lasts";
      
      function getScore(form) {
      
      var score = 0;
      
      var currElt;
      
      var currSelection;
      
      for (i=0; i<numQues; i++) {
      
      currElt = i*numChoi;
      
      answered=false;
      
      for (j=0; j<numChoi; j++) {
      
      currSelection = form.elements[currElt + j];
      
      if (currSelection.checked) {
      
      answered=true;
      
      if (currSelection.value == answers[i]) {
      
      score++;
      
      break;
      
      }
      
      }
      
      }
      
      if (answered ===false){alert("Do answer all the questions, Please") ;return false;}
      
      }
      
      var scorePer = Math.round(score/numQues*100);
      
      form.percentage.value = scorePer + "%";
      
      form.mark.value=score;
      
      }