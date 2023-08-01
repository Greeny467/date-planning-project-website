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
            if (activityObject.key == "3943506"){
                var atHome = "yes"
                var twoPerson = "yes"
                
            }
            else if (activityObject.key == "4704256"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "5808228"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "6081071"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            // 5-49

            //50-99
            else if (activityObject.key == "9364041"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1162360"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8364626"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1934228"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "9026787"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "6596257"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "3141417"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "4124860"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8557562"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4565537"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "1718657"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8503795"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2352669"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4894697"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "3456114"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4101229"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "2896176"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6301585"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8321894"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6808057"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "7023703"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8731971"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8926492"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2790297"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "1645485"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "4809815"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4379552"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6778219"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "7091374"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4387026"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "6693574"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8344539"){
                var atHome = "no"
                var twoPerson = "no"
            }
            else if (activityObject.key == "4558850"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8253550"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "5585829"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "9072906"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4877086"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "1288934"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8832605"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "6613428"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "3818400"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8779876"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6482790"){
                var atHome = "no"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2735499"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "5881647"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "9924423"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "9366464"){
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8081693"){
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "5554727"){
                var atHome = "yes"
                var twoPerson = "yes"
            }

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