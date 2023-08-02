const sideBar = document.querySelector("#sideBar")
const mainForm = document.querySelector("#mainForm")
const userLocation = document.querySelector("#userLocation")
const locationDistance = document.querySelector("#locationDistance")
const cardCount = document.querySelector("#cardCount")
const category = document.querySelector("#setting")
const priceRange = document.querySelector("#priceRange")
const submitButton = document.querySelector("#mainSubmit")
const cardHolder = document.querySelector("#cardHolder")

var keyArray = []
var ideaArray = []
var mapArray = []

mainForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear existing cards
    cardHolder.innerHTML = "";

    // Get the number of cards to generate
    var cardCount = parseInt(document.getElementById("cardCount").value);

    // Generate the specified number of cards
    for (var i = 0; i < cardCount; i++) {
        var createCard = document.createElement("div");
        createCard.className = "card";

        var cardInfo = document.createElement("section");
        cardInfo.className = "activityInfo";
        createCard.appendChild(cardInfo);

        // Create h2 for activity name, p for description, h3 for cost
        var activityName = document.createElement("h2");
        activityName.textContent = "Activity Name";
        cardInfo.appendChild(activityName);

        var activityDescription = document.createElement("p");
        activityDescription.textContent = "Activity Description";
        cardInfo.appendChild(activityDescription);

        var activityCost = document.createElement("h3");
        activityCost.textContent = "Activity Cost";
        cardInfo.appendChild(activityCost);

        var cardMap = document.createElement("section");
        cardMap.className = "mapVisual";
        createCard.appendChild(cardMap);

        // Create h3 for location name, img for map image, and p for any extra info
        var locationName = document.createElement("h3");
        locationName.textContent = "Location Name";
        cardMap.appendChild(locationName);

        var mapImage = document.createElement("img");
        mapImage.src = "https://via.placeholder.com/150";
        cardMap.appendChild(mapImage);

        var extraInfo = document.createElement("p");
        extraInfo.textContent = "Extra Info";
        cardMap.appendChild(extraInfo);

        cardHolder.appendChild(createCard);
    }
});

function getBoredURL(category, price, userRange) {
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
                getBoredURL(category, price, userRange)
            }

            if (twoPerson == "yes") {
                //check if activityObject is within the specified range
                
                if (keyArray.includes(activityObject.key)){
                    getBoredURL(category, price, userRange)
                    console.log("is here")
                }
                else {

                    if(atHome == "yes"){
                        ideaArray.push(activityObject)
                        keyArray.push(activityObject.key)
                    }
                    else if(atHome == "no"){
                        var lat = 40.3057
                        var lon = -111.7495
                        var mapURL = "https://api.mapbox.com/search/searchbox/v1/suggest?q=" + mapDesc + "&access_token=pk.eyJ1IjoibmF0aGFuZzQ1NiIsImEiOiJjbGtqNDg0a2YwMzQ5M2RvOGx6dGgxb3FkIn0.yUbT_dC_9GY3u3-rryFFeA&session_token=UUIDv4&origin=" + lon + "," + lat
                        fetch(mapURL)
                            .then(function (response) {
                                return response.json()
                            })
                            .then(function (data) {
                                console.log(data)
                                var apiResponse = data.suggestions[1]
                                var milesDistance = apiResponse.distance / 1609.34
                                var travelTime = apiResponse.eta 
                                var where = apiResponse.full_address
                                var mapObject = {
                                    distance: milesDistance,
                                    travelTime: travelTime,
                                    location: where
                            }

                                if (apiResponse.feature_type != "poi"){
                                    apiResponse = data.suggestions[2]
                                    milesDistance = apiResponse.distance / 1609
                                    travelTime = apiResponse.eta
                                    where = apiResponse.full_address

                                    if (apiResponse.feature_type!= "poi"){
                                        getBoredURL(category, price, userRange)
                                }
                                    else{
                                        keyArray.push(activityObject.key)
                                        ideaArray.push(activityObject)
                                        mapArray.push(mapObject)
                                }
                            }
                                else {
                                    keyArray.push(activityObject.key)
                                    ideaArray.push(activityObject)
                                    mapArray.push(mapObject)
                                }

                                
                            })
                    }
                }
            }
            
            else {
                getBoredURL(category, price)
            }
        })
}
    //get maplocation and search up the activity on the map api in relation to location.
    //check if the locations shown are within the specified range.

    //if(locationsInRange == 0){
    //      getBoredURL()    
    //}



function submitForm() {
    //get value from all form inputs
    var urlLocation = userLocation.value

    var travelRange = locationDistance.value

    var numOfCard = cardCount.value

    var activityCategory = category.value.toLowerCase()

    var range = priceRange.value

    var rangeModified = range / 100


    //reset all inputs to empty so user can search again
    userLocation.value = ""
    locationDistance.value = ""
    cardCount.value = ""
    category.value = ""
    priceRange.value = ""




    for (i = 0; i < numOfCard; i++) {
        getBoredURL(activityCategory, rangeModified, travelRange)
        // createCard()
    }
    console.log(ideaArray)
console.log(mapArray)
}
// submitButton.addEventListener("click", function (event) {
//     event.preventDefault()
//     elementCount = cardHolder.children.length

//     //from chat gpt 
//     while (cardHolder.firstChild) {
//         cardHolder.firstChild.remove();
//     }
//     submitForm()
// })