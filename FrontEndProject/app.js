let gameSearch
let index = ""
let userSearch = ""
let images = document.querySelector(".image")
function grab() {
    $.get(`https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games${index}${userSearch}`, (data) => {
        gameSearch = data
    })
}
grab()
// Important code up top

//buttons
let submitButton = document.querySelector("#submit")


//listeners

submitButton.addEventListener("click", () => {
    $(".searchview").empty()
    grab()
    $("<div class=info data-aos=flip-left data-aos-duration=3000>Click on a game to get more information</div>").appendTo(".searchview")
    for (var i = 1; i <= 120; i++) {
        $(`<a class=imglink${[i]} href=${gameSearch[i]["game_url"]}></a>`).appendTo(".searchview")
        $(`<img data-aos=fade-up data-aos-duration=1000 class=image src=${gameSearch[i]["thumbnail"]} width=130 height=100>`).appendTo(`.imglink${[i]}`)


        

    }

    
})


//
AOS.init();