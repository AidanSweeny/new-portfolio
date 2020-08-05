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