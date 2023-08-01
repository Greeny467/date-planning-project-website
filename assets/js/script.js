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
            if (activityObject.key== "9414706"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "8724324"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.key== "8092359"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "5554174"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "6813070"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.key== "8442249"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "4179309"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "8750692"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.key== "9999999"){
                var atHome = "no"
                var twoPerson = "no"
            }
            if (activityObject.key== "1000000"){
                var atHome = "no"
                var twoPerson = "no"
            }
            if (activityObject.key== "8394738"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "4522866"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "3352474"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "4708863"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "1878070"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.key== "1592381"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "6204657"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "3950821"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "6852505"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.key== "9216391"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.key== "5675880"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "1799120"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "2715253"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "2167064"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "8683473"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.key== "2742452"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "6826029"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "8264223"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "4448913"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.key== "3469378"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "8238918"){
                var atHome = "no"
                var twoPerson = "no"
            }
            if (activityObject.key== "3561421"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "4296813"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "3149232"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.key== "3141592"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "4688012"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.key== "5490351"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.key== "3305912"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.key== "4748214"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.key== "4306710"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            if (activityObject.key== "5914292"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "2300257"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "8688620"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "6184514"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "3590127"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "7096020"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "5188388"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            if (activityObject.key== "5534113"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "9324336"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            if (activityObject.key== "9765530"){
                var atHome = "yes"
                var twoPerson = "no"
            }
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