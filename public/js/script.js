var open = false;
$(".icon").on("click", function(event){
    event.preventDefault();
    if(open){
        $(".about").animate({"opacity": "0%"})
        $(".projects").animate({"opacity": "0%"})
        $(".triangle").css("width","0px")
        open = false;
    }
    else {
        $(".about").animate({"opacity": "100%"}, speed = 2000)
        $(".projects").animate({"opacity": "100%"}, speed = 2000)
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

$.ajax({ method: "GET", url: "/api/education" }).then(function (res) {
    var response = JSON.parse(res);
    var school = response[0].school;
    var major = response[0].major
    var minor = response[0].minor
    var schoolTit = $(".schoolTit");
    var majorTit = $(".majorTit")
    var minorTit = $(".minorTit")
    schoolTit.text(school);
    majorTit.css("color", "grey")
    minorTit.css("color", "grey")
    majorTit.text(major + " Major");
    minorTit.text(minor + "Minor");
});

$.ajax({ method: "GET", url: "/api/skills" }).then(function (res) {
    var response = JSON.parse(res);
    console.log(response)
    for(element of response) {
        if (element.category === "language"){
            var li = $("<li>");
            li.css("color", "grey")
            li.text(element.title);
            $(".languages").append(li);
        }
        if (element.category === "style"){
            var li = $("<li>");
            li.css("color", "grey")
            li.text(element.title);
            $(".styleLanguages").append(li);
        }
        if (element.category === "library"){
            var li = $("<li>");
            li.css("color", "grey")
            li.text(element.title);
            $(".libraries").append(li);
        }
    }
});