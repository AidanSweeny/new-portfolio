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
    location.assign("/about")
})

$.ajax({ method: "GET", url: "/api/education" }).then(function (res) {
    var school = res.school;
    var major = res.major;
    var minor = res.minor;
    console.log(res.school);
    var schoolTit = $(".schoolTit");
    var majorTit = $(".majorTit")
    var minorTit = $(".minorTit")
    schoolTit.text(school);
    majorTit.text(major);
    minorTit.text(minor);
});