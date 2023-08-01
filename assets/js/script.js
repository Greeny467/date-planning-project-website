var sideBar = document.querySelector("#sideBar")
var mainForm = document.querySelector("#mainForm")
var userLocation = document.querySelector("#userLocation")
var locationDistance = document.querySelector("#locationDistance")
var cardCount = document.querySelector("#cardCount")
var category = document.querySelector("#setting")
var priceRange = document.querySelector("#priceRange")
var submitButton = document.querySelector("#mainSubmit")
var cardHolder = document.querySelector("#cardHolder")


//function createCard(requestURL)

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
//}

function getBoredURL(category, price){
    var requestURL = "https://www.boredapi.com/api/activity?participants=1&type=" + category + "&maxprice=" + price
    fetch(requestURL)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            var activityObject = data
            console.log(activityObject)


            //Response filter, due to limited api versatility
            if (activityObject.activity == "Learn Express.js"){
                var atHome = "yes"
                var twoPerson = "yes"
                
            }
            if (activityObject.activity == "Learn to greet someone in a new language"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.activity == "Learn how to play a new sport"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.activity == "Text a friend you haven't talked to in a long time"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            // 5-49

            //50-99

            //100-149

            //149-196
        })
    
    //get maplocation and search up the activity on the map api in relation to location.
    //check if the locations shown are within the specified range.
    
    //if(locationsInRange == 0){
    //      getBoredURL()    
    //}

}

function submitForm(){
    //get value from all form inputs
    var urlLocation = userLocation.value
    console.log(urlLocation)

    var travelRange = locationDistance.value
    console.log(travelRange)

    var numOfCard = cardCount.value
    console.log(numOfCard)

    var activityCategory = category.value.toLowerCase()
    console.log(activityCategory)

    var range = priceRange.value
    console.log(range)
    
    var rangeModified = range / 100


    //reset all inputs to empty so user can search again
    userLocation.value=""
    locationDistance.value = ""
    cardCount.value = ""
    category.value = ""
    priceRange.value = ""


    

    for(i = 0; i < numOfCard; i++){
        getBoredURL(activityCategory, rangeModified)

        // createCard()
    }
    
}   
submitButton.addEventListener("click", function(event){
    event.preventDefault()
    elementCount = cardHolder.children.length

    //from chat gpt 
    while (cardHolder.firstChild) {
        cardHolder.firstChild.remove();
        console.log("removed");
    }
    submitForm()
})