var open = false;
var menuVisible = false;
var itemsVisible = false;
var itemFaded = true;
var count = 0;
var skills = [["javascript","Javascript"],["rubyonrails", "Ruby on Rails"], ["python", "Python"], ["java", "Java"], ["aws", "AWS"],["sql", "SQL"], ["vhdl", "VHDL"], ["mongodb", "MongoDB"], ["react", "React"], ["node", "Node.js"], ["jquery", "Jquery.js"], ["css", "CSS"], ["html", "HTML"], ["ruby", "Ruby"], ["bootstrap", "Bootstrap"], ["datadog", "Datadog"], ["rspec", "Rspec"], ["heroku", "Heroku"], ["agile", "Agile"]];
var projects = [["weather","Weather App","Weather application that uses a public API to show weather in a searched area.","https://aidansweeny.github.io/weather-dashboard/", "https://github.com/AidanSweeny/weather-dashboard/"], ["life","L.I.F.E.","Life application","https://aidansweeny.github.io/life/","https://github.com/AidanSweeny/life/"], ["financhill","Financhill","Financial management application.","https://github.com/GabeSucich/BudgetingApp",]];

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var revealDelay = 0;
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 250;
        
        if (elementTop < windowHeight - 100 && reveals[i].classList[0] == "item") {
            $("#"+(reveals[i].id)).delay(revealDelay).animate({"opacity":"100%"});
            revealDelay += 50;
        } 
        else if (elementTop < windowHeight - elementVisible) {
            $("."+(reveals[i].classList[0])).animate({"opacity":"100%"});
        }

        
    }
}

function showUp() {
    var reveals = document.querySelectorAll(".showUp");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            $("."+(reveals[i].classList[0])).animate({"opacity":"100%", "top": "95px"});
        }  
    }
}

function circle() {
    var squares = document.querySelectorAll(".desBlock");

    for (var i = 0; i < squares.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = squares[i].getBoundingClientRect().top;
        var elementVisible = 300;
        console.log();
        if (elementTop < windowHeight - elementVisible){
            squares[i].style.borderRadius = `${((windowHeight - elementVisible) - elementTop)/10}px`;
        }
    }
}

$(".parallax").on('scroll', function(){
    if (!menuVisible) {
        $(".menu").animate({"opacity":"100%"});
        $(".name").animate({"opacity":"100%"});
        $(".bigName").animate({"opacity":"0%"});
        $(".bigName").css("pointer-events","none");
        $(".nav").animate({"width": "95px"});

        menuVisible = true;
    }

    reveal();
    showUp();
    circle()
});

$(".listFade").on('click', function(event){
    event.preventDefault();
    if (itemFaded){
        $(".listFade" + event.target.id).css("color", "white");
        $(".listFade" + event.target.id).css("text-shadow", "none");
        itemFaded = false;
    }
    else{
        $(".listFade" + event.target.id).css("color", "transparent");
        $(".listFade" + event.target.id).css("text-shadow", "0 0 5px rgba(255, 255, 255, 0.5)");
        itemFaded = true;
    }
});

window.onload = function() {
    displaySkills(skills);
    displayProjects(projects);
}

function displaySkills(skills){
    for (var item of skills){
        var div = document.createElement("img");
        var elem = document.getElementById("cI");
        div.setAttribute("class", "item reveal ");
        div.setAttribute("id", item[0]);
        div.setAttribute("title", item[1]);
        div.setAttribute("src", item[0] + ".png");
        elem.appendChild(div);
    }
}

function displayProjects(projects){
    everyOther = 0;
    for (var project of projects){
        var div = document.createElement("div");
        var img = document.createElement("img");
        var blurb = document.createElement("p");
        var repo = document.createElement("a");
        var projName = document.createElement("h3");
        div.setAttribute("class", "projectContainer")
        blurb.innerHTML = project[2];
        repo.innerHTML = "Repository";
        projName.innerHTML = project[1];
        projName.setAttribute("class", "projectName");
        repo.setAttribute("href", project[3]);
        var elem = document.getElementById("projectBlock");
        img.setAttribute("class", "projectImg reveal");
        blurb.setAttribute("class", "projectBlurb reveal");
        repo.setAttribute("class", "repo reveal");
        img.setAttribute("src", project[0] + ".jpg");
        if (everyOther%2 == 0) {
            img.setAttribute("style", "float: right;");
        }
        else {
            img.setAttribute("style", "float: left;");
        }
        div.appendChild(img);
        div.appendChild(projName);
        div.appendChild(blurb);
        if (project.length > 4){
            var deployed = document.createElement("a");
            deployed.innerHTML = "Deployed Website";
            deployed.setAttribute("href", project[4]);
            deployed.setAttribute("class", "deployed reveal");
            div.appendChild(deployed);
        }
        div.appendChild(repo);
        elem.appendChild(div);
        everyOther++;
    }
}

$(document).on("mouseenter", ".item",function(event){
    event.preventDefault();
    $(".skillName").text(event.target.title);
    $(".skillIcon").attr("src", event.target.id + ".png");
    $(".skillIcon").attr("style","border: 5px solid rgb(98, 110, 143);");
    $(".skillIcon").attr("class", "skillIcon desBlock");
})

$(".nav").hover(function(event){
    event.preventDefault();
    if(open){
        $(".menu").animate({"transform": "rotate(45deg)"});
        $(".about").animate({"opacity": "0%", "left": "-20px"});
        $(".projects").animate({"opacity": "0%", "left": "-20px"});
        $(".experience").animate({"opacity": "0%", "left": "-20px"});
        open = false;
    }
    else {
        $(".menu").animate({"transform": "rotate(45deg)"});
        $(".about").animate({"opacity": "100%", "left": "10px"});
        $(".projects").animate({"opacity": "100%", "left": "10px"});
        $(".experience").animate({"opacity": "100%", "left": "10px"});
        open = true;
    }
})

$('.projects').on("click", function(event) {
    event.preventDefault();
    $('.parallax').animate({
        scrollTop: 2200},
        1500);
})

$('.about').on("click", function(event) {
    event.preventDefault()
    $('.parallax').animate({
        scrollTop: 550},
        1500);
})

$('.experience').on("click", function(event) {
    event.preventDefault()
    $('.parallax').animate({
        scrollTop: 1270},
        1500);
})


// $.ajax({ method: "GET", url: "/api/education" }).then(function (res) {
//     var response = JSON.parse(res);
//     var school = response[0].school;
//     var major = response[0].major
//     var minor = response[0].minor
//     var schoolTit = $(".schoolTit");
//     var majorTit = $(".majorTit")
//     var minorTit = $(".minorTit")
//     schoolTit.text(school);
//     majorTit.css("color", "grey")
//     minorTit.css("color", "grey")
//     majorTit.text(major + " Major");
//     minorTit.text(minor + "Minor");
// });

// $.ajax({ method: "GET", url: "/api/skills" }).then(function (res) {
//     var response = JSON.parse(res);
//     console.log(response)
//     for(element of response) {
//         if (element.category === "language"){
//             var li = $("<li>");
//             li.css("color", "grey")
//             li.text(element.title);
//             $(".languages").append(li);
//         }
//         if (element.category === "style"){
//             var li = $("<li>");
//             li.css("color", "grey")
//             li.text(element.title);
//             $(".styleLanguages").append(li);
//         }
//         if (element.category === "library"){
//             var li = $("<li>");
//             li.css("color", "grey")
//             li.text(element.title);
//             $(".libraries").append(li);
//         }
//     }
// });