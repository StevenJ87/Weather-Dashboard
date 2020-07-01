var cities = [];
var saved = JSON.parse(localStorage.getItem('ListNames'));
if(saved === null){

}else{
    cities=saved;
    buttons();
};

    function buttons(){
    for(var i=0;i<cities.length;i++){
    $(".cityList").append("<li>").append($("<button>").text(cities[i]));
}};


$(".btn-primary").click(function(){

    $(".cityList").empty();
    var APIKey = "4759b868e6e8cc03f5fdb881f043cd77";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + $(".searchName").val() + "&appid=" + APIKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        console.log(response)

        cities.push(response.name)

        localStorage.setItem(response.name, JSON.stringify(response));

        localStorage.setItem("ListNames", JSON.stringify(cities));

        buttons();

        $("#city").text(response.name);
        $("#wind").text(" "+response.wind.speed+" MPH");
        $("#humidity").text(" "+response.main.humidity+"%");
        $("#temp").text(" "+(((response.main.temp)-273.15)*1.80+32).toFixed(2)+ " F");
    });
});

$(".cityList").click(function(){
    event.target(
        console.log(this)
    )
})