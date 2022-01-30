var open = false;
var menuVisible = false;
var itemsVisible = false;

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        $("."+(reveals[i].classList[0])).animate({"opacity":"100%"});
      } 
    }
}

$(".parallax").on('scroll', function(){
    if (!menuVisible) {
        $(".menu").animate({"opacity":"100%"});
        $(".name").animate({"opacity":"100%"});
        $(".bigName").animate({"opacity":"0%"});
        menuVisible = true;
    }
    reveal();
});


window.onload = function() {
    var skills = ["javascript","rubyonrails", "python", "java", "aws","sql", "vhdl", "mongodb", "react", "node", "jquery", "css", "html", "ruby", "bootstrap", "datadog", "rspec", "heroku", "agile"];
    displaySkills(skills);
}

function displaySkills(skills){
    for (var item of skills){
        var div = document.createElement("img");
        var elem = document.getElementById("cI");
        div.setAttribute("class", "item reveal");
        div.setAttribute("src", item+".png");
        elem.appendChild(div);

    }
}

// $('*').click(function(event){
//     event.preventDefault();
//     mvmt(event, 1)
//     mvmt(event, 11)
//     mvmt(event, 21)
// })

// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }
// var id = null;

// function mvmt(event, size){
//     var interval = size;
//     var xpos = event.clientX - size/2;
//     var ypos = event.clientY - size/2;
//     var elem = document.getElementById("parent");
//     id = setInterval(frame, 20);
//     var div = document.createElement("div");
//     div.style.position = "fixed";
//     // div.style.border = "1px, solid, linear-gradient(to right, blue, white)";
//     div.setAttribute("id", "gradient");
//     div.style.borderRadius = "50%";
//     elem.appendChild(div);
//     function frame() {
//         interval += 2;        
//         xpos--;
//         ypos--;
//         div.style.left = xpos + 'px';
//         div.style.top = ypos + 'px';
//         div.style.height = interval + 'px';
//         div.style.width = interval + 'px';
//     }
// }

$(".icon").on("click", function(event){
    event.preventDefault();
    if(open){
        $(".about").animate({"opacity": "0%"})
        $(".projects").animate({"opacity": "0%"})
        $(".experience").animate({"opacity": "0%"})
        $(".triangle").css("width","0px")
        open = false;
    }
    else {
        $(".about").animate({"opacity": "100%"}, speed = 2000)
        $(".projects").animate({"opacity": "100%"}, speed = 2000)
        $(".experience").animate({"opacity": "100%"}, speed = 2000)
        $(".triangle").css("width","1500px")
        open = true;
    }
})

$('.projects').on("click", function(event) {
    event.preventDefault()
    location.assign("/projects")
})

$('.about').on("click", function(event) {
    event.preventDefault()
    location.assign("/")
})

$('.experience').on("click", function(event) {
    event.preventDefault()
    location.assign("/experience")
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