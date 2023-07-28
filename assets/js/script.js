var sideBar = document.querySelector("#sideBar")
var mainForm = document.querySelector("#mainForm")
var userLocation = document.querySelector("#userLocation")
var locationDistance = document.querySelector("#locationDistance")
var cardCount = document.querySelector("#cardCount")
var setting = document.querySelector("#setting")
var submitButton = document.querySelector("#mainSubmit")
var cardHolder = document.querySelector("#cardHolder")

function submitForm(){
    //get value from all form inputs



    //reset all inputs to empty so user can search again


    var cardCountNum = 5

    for(i = 0; i < cardCountNum; i++){
        var requestURL = "URL" + "input values"

        //fetch(requestURL)
        //      .then (function(response){
        //             return JSON.parse(response)    
    //        })
    //       .then (function(data){
        //         var createCard = document.createElement("div")
        //          createCard.className = "card"
                    
        //          var cardInfo = document.createElement("section")
        //          cardInfo.className = "activityInfo"
        //          createCard.appendChild(cardInfo)

        //          Create h2 for activity name, p for description, h3 for cost

        //          var cardMap = document.createElement("section")
        //          cardMap.className = "mapVisual"
        //          createCard.appendChild(cardMap)

        //          create h3 for location name, img for map image, and p for any extra info

        //          cardHolder.appendChild(createCard)
    //})
    }
    
}   
submitButton.addEventListener("click", function(){
    elementCount = cardHolder.children.length
    if (elementCount != 0){
        for(i = 0; i < elementCount; i++){
            cardHolder.firstChild.remove()
        }
    }
    submitForm()
})