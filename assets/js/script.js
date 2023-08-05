const sideBar = document.querySelector("#sideBar")
const mainForm = document.querySelector("#mainForm")
const userLocation = document.querySelector("#userLocation")
const locationDistance = document.querySelector("#locationDistance")
const cardCount = document.querySelector("#cardCount")
const category = document.querySelector("#setting")
const priceRange = document.querySelector("#priceRange")
const submitButton = document.querySelector("#mainSubmit")
const cardHolder = document.querySelector("#cardHolder")
const locationInput = document.querySelector("#locationInput")
const countryInput = document.querySelector("#countryChoice")


var keyArray = []
var ideaArray = []

function usSelect(){
    if (countryInput.value == "US" && locationInput.children.length == 1){
        console.log("here")
        var stateSelect = document.createElement("select")
        stateSelect.setAttribute("id", "stateSelect")
        stateSelect.setAttribute("name", "stateSelect")
       
            var stateNames = [
                "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
            ]
        //From chat gpt
        var stateCodesList = stateNames.map(function(stateName) {
            return stateName.slice(0, 2).toUpperCase();
        })

        

        var stateAmount = stateNames.length
        for (i = 0; i < stateAmount; i++){
            var optionCreate = document.createElement("option")
            optionCreate.textContent=stateNames[i]
            optionCreate.value = stateCodesList[i]
            stateSelect.append(optionCreate)
        }
        locationInput.append(stateSelect)
    }
    else if(countryInput.value == "US" && locationInput.children.length == 2){
        return
    }
    else if (countryInput.value !="US" && locationInput.children.length > 1){
        locationInput.lastChild.remove()
    }
    else {
        return
    }
}
countryInput.addEventListener("change", (event)=>{
    usSelect()
})

if (countryInput.value == "None"){
    if (localStorage.getItem("location") != null){
        locationObject = JSON.parse(localStorage.getItem("location"))
        countryInput.value = locationObject.country
        userLocation.value = locationObject.address
        usSelect()
        if (locationObject.country == "US"){
            var stateSelectElement = document.querySelector("#stateSelect")
            stateSelectElement.value = locationObject.state
        }
    }
}



function createCard(object){
    

    var createCard = document.createElement("div");
    createCard.className = "card";

    var cardInfo = document.createElement("section");
    cardInfo.className = "activityInfo";
    createCard.appendChild(cardInfo);

    // Create h2 for activity name, h3 for cost
    var activityName = document.createElement("h2");
    activityName.textContent = object.activity;
    cardInfo.appendChild(activityName);
    
    //price section
    console.log(object.price)
    console.log(object)
    if (object.price == 0){
        var costText = "This activity is free"
    }
    else if (object.price > 0 && object.price < 0.3){
        var costText = "Should cost less than 40$"
    }
    else if (object.price > 0.3 && object.price < 0.5){
        var costText = "Should cost less than 60-80$"
    }
    else if (object.price > 0.5 && object.price < 0.8){
        var costText = "Could cost up to around 120$"
    }
    else if (object.price > 0.8){
        var costText = "Could cost up to 150$ or higher."
    }

    
    var activityCost = document.createElement("h3");
    activityCost.textContent = costText;
    cardInfo.appendChild(activityCost);

    //map section
    var cardMap = document.createElement("section");
    cardMap.className = "mapVisual";
    createCard.appendChild(cardMap);
    if (object.mapInfo != null){
         // Create h3 for location name, img for map image, and p for any extra info
        var locationName = document.createElement("h3");
        locationName.textContent = object.mapInfo.name;
        cardMap.appendChild(locationName);

        var addressText = document.createElement("h4")
        addressText.textContent = object.mapInfo.location
        cardMap.appendChild(addressText)

        // var mapImage = document.createElement("img");
        // mapImage.src = "https://via.placeholder.com/150";
        // cardMap.appendChild(mapImage);
        
        var extraInfo = document.createElement("p");
        extraInfo.textContent = object.mapInfo.distance.toString().slice(0, 4) + " Miles Away";
        cardMap.appendChild(extraInfo);
    }
    else{
        var noMapText = document.createElement("h2")
        noMapText.textContent = "This is something you can do at home!"
        cardMap.appendChild(noMapText)
    }

   

    cardHolder.appendChild(createCard);
}


function getBoredURL(category, price, userRange, locationObject, i) {
    var requestURL = "https://www.boredapi.com/api/activity?participants=1&type=" + category + "&maxprice=" + price
    fetch(requestURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var activityObject = data


            //Response filter, due to limited api versatility
            if (activityObject.key == "3943506") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4704256") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "5808228") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "sports complex"
            }
            else if (activityObject.key == "6081071") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "5881028") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "3136036") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4981819") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2095681") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1382389") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "animal shelter"
            }
            else if (activityObject.key == "1408058") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8125168") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "5665663") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "9318514") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "dog park"
            }
            else if (activityObject.key == "3699502") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "7114122") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "5092652") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "2581372") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "7526324") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "nail salon"
            }
            else if (activityObject.key == "3136729") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "3192099") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1668223") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "5920481") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1505028") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "swimming pool"
            }
            else if (activityObject.key == "4290333") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "scenic drive"
            }
            else if (activityObject.key == "9212950") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "5262759") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "Movie theater"
            }
            else if (activityObject.key == "4614092") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "6197243") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6613330") {
                var atHome = "yes"
                var twoPerson = "no"

            }
            else if (activityObject.key == "7265395") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "5940465") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "park"
            }
            else if (activityObject.key == "1638604") {
                var atHome = "no"
                var twoPerson = "no"
            }
            else if (activityObject.key == "7806284") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1093640") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "tennis court"
            }
            else if (activityObject.key == "5590133") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "cafe, restaurant"
            }
            else if (activityObject.key == "5947957") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "ice rink"
            }
            else if (activityObject.key == "2211716") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "concert hall"
            }
            else if (activityObject.key == "2237769") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "bar, nightclub"
            }
            else if (activityObject.key == "6925988") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1017771") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1488053") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1432113") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6509779") {
                var atHome = "no"
                var twoPerson = "no"
            }
            else if (activityObject.key == "3920096") {
                var atHome = "no"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8979931") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "farmers market"
            }
            else if (activityObject.key == "6553978") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1947449") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8631548") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "2055368") {
                var atHome = "no"
                var twoPerson = "no"

            }
            else if (activityObject.key == "9364041") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1162360") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8364626") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1934228") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "garden store"
            }
            else if (activityObject.key == "9026787") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "6596257") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "3141417") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "4124860") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8557562") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4565537") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "1718657") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8503795") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "thrift shop"
            }
            else if (activityObject.key == "2352669") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4894697") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "park, trail"
            }
            else if (activityObject.key == "3456114") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "home decor store"
            }
            else if (activityObject.key == "4101229") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "2896176") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6301585") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8321894") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6808057") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "7023703") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8731971") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8926492") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2790297") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "1645485") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "4809815") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4379552") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6778219") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "7091374") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4387026") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "gym"
            }
            else if (activityObject.key == "6693574") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "restaurant"
            }
            else if (activityObject.key == "8344539") {
                var atHome = "no"
                var twoPerson = "no"
            }
            else if (activityObject.key == "4558850") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "concert venue"
            }
            else if (activityObject.key == "8253550") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "library"
            }
            else if (activityObject.key == "5585829") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "escape room"
            }
            else if (activityObject.key == "9072906") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "karaoke bar"
            }
            else if (activityObject.key == "4877086") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "1288934") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8832605") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "6613428") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "3818400") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8779876") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6482790") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "music festival"
            }
            else if (activityObject.key == "2735499") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "5881647") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "9924423") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "9366464") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8081693") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "5554727") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "9414706") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8724324") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "hiking trail"
            }
            else if (activityObject.key == "8092359") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "5554174") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "6813070") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "park, picnic area"
            }
            else if (activityObject.key == "8442249") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4179309") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8750692") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "community center"
            }
            else if (activityObject.key == "9999999") {
                var atHome = "no"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1000000") {
                var atHome = "no"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8394738") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4522866") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "3352474") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "4708863") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "1878070") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "food pantry"
            }
            else if (activityObject.key == "1592381") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6204657") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "3950821") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6852505") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "running trail"
            }
            else if (activityObject.key == "9216391") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "hardware store"
            }
            else if (activityObject.key == "5675880") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "1799120") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2715253") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2167064") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8683473") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "basketball court"
            }
            else if (activityObject.key == "2742452") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6826029") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8264223") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "4448913") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "Broadway production"
            }
            else if (activityObject.key == "3469378") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8238918") {
                var atHome = "no"
                var twoPerson = "no"
            }
            else if (activityObject.key == "3561421") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4296813") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "3149232") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "fishing lake"
            }
            else if (activityObject.key == "3141592") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4688012") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "yoga"
            }
            else if (activityObject.key == "5490351") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "museum"
            }
            else if (activityObject.key == "3305912") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "fun pictures"
            }
            else if (activityObject.key == "4748214") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "sunrise spots"
            }
            else if (activityObject.key == "4306710") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "volleyball courts"
            }
            else if (activityObject.key == "5914292") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2300257") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8688620") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6184514") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "3590127") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "7096020") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "5188388") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "5534113") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "9324336") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "9765530") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "6706598") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "4151544") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1129748") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1942393") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "tree nursery"
            }
            else if (activityObject.key == "7687030") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2850593") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8061754") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "5319204") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "restaurant"
            }
            else if (activityObject.key == "9937387") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8159356") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "park"
            }
            else if (activityObject.key == "1572120") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "3491470") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "7154873") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2430066") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "9303608") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "1770521") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8033599") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "9660022") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2062010") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "6098037") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "9714586") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "3151646") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "6378359") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "3646173") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "4286250") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "1303906") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "9149470") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2360432") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "4266522") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "5322987") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "3954882") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "9081214") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "9008639") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "8827573") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8203595") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "9908721") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "8550768") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2565076") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2277801") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "4940907") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "6825484") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "5977626") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "7556665") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "3621244") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else if (activityObject.key == "2526437") {
                var atHome = "yes"
                var twoPerson = "no"
            }
            else if (activityObject.key == "4150284") {
                var atHome = "no"
                var twoPerson = "yes"
                var mapDesc = "food bank"
            }
            else if (activityObject.key == "8731710") {
                var atHome = "yes"
                var twoPerson = "yes"
            }
            else {
                getBoredURL(category, price, userRange, locationObject, i)
            }
           
            if (twoPerson == "yes") {
                //check if activityObject is within the specified range
                
                if (keyArray.includes(activityObject.key)){
                    getBoredURL(category, price, userRange, locationObject, i)
                    return
                }
                else {
                    if(atHome == "yes"){
                        keyArray.push(activityObject.key)
                        createCard(activityObject)
                        return
                    }
                    else if(atHome == "no"){
                        var country = locationObject.country
                        if (country != "US"){
                            var geoURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + locationObject.address + " " + locationObject.country + ".json?access_token=pk.eyJ1IjoibmF0aGFuZzQ1NiIsImEiOiJjbGtqNDg0a2YwMzQ5M2RvOGx6dGgxb3FkIn0.yUbT_dC_9GY3u3-rryFFeA"
                        }
                        else {
                            var geoURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + locationObject.address + " " + locationObject.state + " " + locationObject.state + ".json?access_token=pk.eyJ1IjoibmF0aGFuZzQ1NiIsImEiOiJjbGtqNDg0a2YwMzQ5M2RvOGx6dGgxb3FkIn0.yUbT_dC_9GY3u3-rryFFeA"
                        }
                        fetch(geoURL)
                            .then(function(response){
                                return response.json()
                            })
                            .then(function(data){
                                var lat = data.features[0].center[1]
                                var lon = data.features[0].center[0]
                                var mapURL = "https://api.mapbox.com/search/searchbox/v1/suggest?q=" + mapDesc + "&access_token=pk.eyJ1IjoibmF0aGFuZzQ1NiIsImEiOiJjbGtqNDg0a2YwMzQ5M2RvOGx6dGgxb3FkIn0.yUbT_dC_9GY3u3-rryFFeA&session_token=UUIDv4&origin=" + lon + "," + lat
                                fetch(mapURL)
                                    .then(function (response) {
                                        return response.json()
                                    })
                                    .then(function (data) {
                                        var apiResponse = data.suggestions[1]
                                        var name = apiResponse.name
                                        var milesDistance = apiResponse.distance / 1609.34
                                        var travelTime = apiResponse.eta 
                                        var where = apiResponse.full_address
                        
                                        var mapObject = {
                                            name: name,
                                            distance: milesDistance,
                                            travelTime: travelTime,
                                            location: where
                                        }
                                        
                                        if (apiResponse.feature_type != "poi"){
                                            apiResponse = data.suggestions[2]
                                            milesDistance = apiResponse.distance / 1609
                                            travelTime = apiResponse.eta
                                            where = apiResponse.full_address

                                            mapObject = {
                                                name: name,
                                                distance: milesDistance,
                                                travelTime: travelTime,
                                                location: where
                                            }

                                            if (apiResponse.feature_type!= "poi"){
                                                apiResponse = data.suggestions[3]
                                                milesDistance = apiResponse.distance / 1609
                                                travelTime = apiResponse.eta
                                                where = apiResponse.full_address

                                                mapObject = {
                                                    name: name,
                                                    distance: milesDistance,
                                                    travelTime: travelTime,
                                                    location: where
                                                }

                                                if(apiResponse.feature_type!="poi"){
                                                    console.log("try again")
                                                    activityObject = ""
                                                    getBoredURL(category, price, userRange, locationObject, i)
                                                    return
                                                }    
                                            }
                                            else{
                                                if(milesDistance > userRange){
                                                    getBoredURL(category, price, userRange, locationObject, i)
                                                    return
                                                }
                                                else{
                                                    keyArray.push(activityObject.key)
                                                    activityObject.mapInfo = mapObject
                                                    createCard(activityObject)
                                                    return
                                                }
                                            }
                                        }
                                        if(milesDistance > userRange){
                                            getBoredURL(category, price, userRange, locationObject, i)
                                            return
                                        }
                                        else{
                                            keyArray.push(activityObject.key)
                                            activityObject.mapInfo = mapObject
                                            createCard(activityObject)
                                            return
                                        }

                                        
                                    })
                            })
                    }
                }
            }
            
            else {
                getBoredURL(category, price, userRange, locationObject, i)
            }
            
        })
}



function submitForm() {
    //reset idea array
    keyArray = []
    ideaArray = []

    //get value from all form inputs

    var travelRange = locationDistance.value

    var numOfCard = cardCount.value

    var activityCategory = category.value.toLowerCase()

    var range = priceRange.value

    var rangeModified = range / 100

    var locationObject = {
        country: countryInput.value,
        address: userLocation.value
    }
    

    if(locationObject.country == "US"){
        var stateSelectElement = document.querySelector("#stateSelect")
        var stateSelected = stateSelectElement.value

        locationObject.state = stateSelected
    }
    localStorage.setItem("location", JSON.stringify(locationObject))





    for (i = 0; i < numOfCard; i++) {
        getBoredURL(activityCategory, rangeModified, travelRange, locationObject, i)
    }

}


submitButton.addEventListener("click", function (event) {
    event.preventDefault()
    mainForm.classList.remove("center");
    elementCount = cardHolder.children.length
    
    //from chat gpt 
    while (cardHolder.firstChild) {
        cardHolder.firstChild.remove();
    }

    if(countryInput.value != "None" && userLocation.value != ""){
        submitForm()
    }
    else{
        var createError = document.createElement("h1")
        createError.textContent = "Uh Oh, it looks like you didn't select a country or failed to enter an address, please try again"
        cardHolder.appendChild(createError)
    }
    
})

