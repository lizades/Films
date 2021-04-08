let generalCollection = [];

class Movie{
    constructor(){
        
        if(JSON.parse(localStorage.getItem('generalCollection')) != null){
            generalCollection = JSON.parse(localStorage.getItem('generalCollection'));
            this.id = generalCollection[generalCollection.length-1].id + 1;
        }
        else this.id = 0;
        this.titleMovie = document.getElementById("iTitleMovie").value.trim(),
        this.country = document.getElementById("iCountry").value.trim(),
        this.genre = document.getElementById("iGenre").value.trim(),
        this.director1 = document.getElementById("iDirector1").value.trim(),
        this.director2 = document.getElementById("iDirector2").value.trim(),
        this.director3 = document.getElementById("iDirector3").value.trim(),
        this.movieScript = document.getElementById("iMovieScript").value.trim(),
        this.producer = document.getElementById("iProducer").value.trim(),
        this.operator = document.getElementById("iOperator").value.trim(), 
        this.composer = document.getElementById("iComposer").value.trim(), 
        this.budget = document.getElementById("iBudget").value.trim(), 
        this.budgetCurrency = document.getElementById("iBudgetCurrency").value.trim(), 
        this.movieBoxOffice = document.getElementById("iMovieBoxOffice").value.trim(),
        this.movieBoxOfficeCurrency = document.getElementById("iMovieBoxOfficeCurrency").value.trim(),
        this.age = document.getElementById("iAge").value,
        this.hours = document.getElementById("iHours").value.trim(),
        this.minutes = document.getElementById("iMinutes").value.trim(), 
        this.seconds = document.getElementById("iSeconds").value.trim(), 
        this.photo = document.getElementById("iPhoto").value.trim(),
        this.date = new Date(document.getElementById("iYear").value.trim(), document.getElementById("iMonth").value.trim(), document.getElementById("iDay").value.trim()),
        this.yearF = document.getElementById("iYear").value.trim()
    }
}


formMovie.addEventListener("submit", sumbitForm);

function sumbitForm(){
    clearDivMessageError();
    if(checkEmptyInput() == false){
        createMovie();
        addMessageSuccess("Фильм добавлен");
    }
    event.preventDefault();
}

function createMovie(){
    let movie = new Movie();

    if(JSON.parse(localStorage.getItem('generalCollection')) != null){
        generalCollection = JSON.parse(localStorage.getItem('generalCollection'));
    }

    generalCollection.push(movie);
    localStorage.setItem('generalCollection', JSON.stringify(generalCollection));
}


function checkEmptyInput(){
    let res = false;

    if(document.getElementById("iTitleMovie").value.trim() == ""){
        addMessageError("Зполните поле Название");
        res = true;
    }
    if(document.getElementById("iCountry").value.trim() == ""){
        addMessageError("Зполните поле Страна");
        res = true;
    }
    if(document.getElementById("iGenre").value.trim() == ""){
        addMessageError("Зполните поле Жанр");
        res = true;
    }
    if(document.getElementById("iDirector1").value.trim() == ""){
        addMessageError("Зполните первое поле Режиссер");
        res = true;
    }
    if(document.getElementById("iMovieScript").value.trim() == ""){
        addMessageError("Зполните поле Сценарий");
        res = true;
    }
    if(document.getElementById("iProducer").value.trim() == ""){
        addMessageError("Зполните поле Продюсер");
        res = true;
    }
    if(document.getElementById("iOperator").value.trim() == ""){
        addMessageError("Зполните поле Оператор");
        res = true;
    }
    if(document.getElementById("iComposer").value.trim() == ""){
        addMessageError("Зполните поле Композитор");
        res = true;
    }
    return res;
}

function addMessageError(strMessage){
    let p = document.createElement('p');
    p.setAttribute("class", "p-mes-error");
    p.textContent = strMessage;
    let div = document.getElementById('message');
    div.appendChild(p); 
}

function addMessageSuccess(strMessage){
    let p = document.createElement('p');
    p.setAttribute("class", "p-mes-success");
    p.textContent = strMessage;
    let div = document.getElementById('message');
    div.appendChild(p); 
}

function clearDivMessageError(){
    let div = document.getElementById('message');

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}