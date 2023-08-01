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
            //5
            if (activityObject.key == "5881028"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //6
            if (activityObject.key == "3136036"){
                var atHome = "yes"
                var twoPerson = "yes"

            }
            //7
            if (activityObject.key == "4981819"){
                var atHome = "yes"
                var twoPerson = "yes"

            }
            //8
            if (activityObject.key == "2095681"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //9
            if (activityObject.key == "1382389"){
                var atHome = "no"
                var twoPerson = "yes"

            }
            //10
            if (activityObject.key == "1408058"){
                var atHome = "yes"
                var twoPerson = "yes"

            }
            //11
            if (activityObject.key == "8125168"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //12
            if (activityObject.key == "5665663"){
                var atHome = "yes"
                var twoPerson = "yes"

            }
            //13
            if (activityObject.key == "9318514"){
                var atHome = "no"
                var twoPerson = "yes"

            }
            //14
            if (activityObject.key == "3699502"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //15
            if (activityObject.key == "7114122"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //16
            if (activityObject.key == "5092652"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //17
            if (activityObject.key == "2581372"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //18
            if (activityObject.key == "7526324"){
                var atHome = "no"
                var twoPerson = "yes"

            }
            //19
            if (activityObject.key == "3136729"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //20
            if (activityObject.key == "3192099"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //21
            if (activityObject.key == "1668223"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //22
            if (activityObject.key == "5920481"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //23
            if (activityObject.key == "1505028"){
                var atHome = "no"
                var twoPerson = "yes"

            }
            //24
            if (activityObject.key == "4290333"){
                var atHome = "no"
                var twoPerson = "yes"

            }
            //25
            if (activityObject.key == "9212950"){
                var atHome = "yes"
                var twoPerson = "yes"

            }
            //26
            if (activityObject.key == "5262759"){
                var atHome = "no"
                var twoPerson = "yes"

            }
            //27
            if (activityObject.key == "4614092"){
                var atHome = "yes"
                var twoPerson = "yes"

            }
            //28
            if (activityObject.key == "6197243"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //29
            if (activityObject.key == "6613330"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //30
            if (activityObject.key == "7265395"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //31
            if (activityObject.key == "5940465"){
                var atHome = "no"
                var twoPerson = "yes"

            }
            //32
            if (activityObject.key == "1638604"){
                var atHome = "no"
                var twoPerson = "no"

            }
            //33
            if (activityObject.key == "7806284"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //34
            if (activityObject.key == "1093640"){
                var atHome = "no"
                var twoPerson = "yes"

            }
            //35
            if (activityObject.key == "5590133"){
                var atHome = "no"
                var twoPerson = "yes"

            }
            //36
            if (activityObject.key == "5947957"){
                var atHome = "no"
                var twoPerson = "yes"

            }
            //37
            if (activityObject.key == "2211716"){
                var atHome = "no"
                var twoPerson = "yes"

            }
            //38
            if (activityObject.key == "2237769"){
                var atHome = "no"
                var twoPerson = "yes"

            }
            //39
            if (activityObject.key == "6925988"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //40
            if (activityObject.key == "1017771"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //41
            if (activityObject.key == "1488053"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //42
            if (activityObject.key == "1432113"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //43
            if (activityObject.key == "6509779"){
                var atHome = "no"
                var twoPerson = "no"

            }
            //44
            if (activityObject.key == "3920096"){
                var atHome = "no"
                var twoPerson = "no"

            }
            //45
            if (activityObject.key == "8979931"){
                var atHome = "no"
                var twoPerson = "yes"

            }
            //46
            if (activityObject.key == "6553978"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //47
            if (activityObject.key == "1947449"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //48
            if (activityObject.key == "8631548"){
                var atHome = "yes"
                var twoPerson = "no"

            }
            //49
            if (activityObject.key == "2055368"){
                var atHome = "no"
                var twoPerson = "no"

            }
        
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