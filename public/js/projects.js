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

$.ajax({ method: "GET", url: "/api/projects" }).then(function (res) {
    var response = JSON.parse(res);
    console.log(response)
    for(element of response) {
        var imgE = element.url;
        var deployedE = element.deployed;
        var repoE = element.repo;
        var titleE = element.title;
        var img = $("<img>");
        var deployed = $("<a>");
        var repo = $("<a>");
        var title = $("<h4>");
        img.attr("src", imgE);
        img.attr("alt", titleE)
        deployed.attr("href", deployedE)
        deployed.text("Deployed Link")
        repo.attr("href", repoE)
        repo.text("Repository Link")
        title.text(titleE);
        var div = $("<div>")
        div.addClass("onePro");
        div.append(title, img, deployed, repo)
        $(".projects").append(div);
    }
});