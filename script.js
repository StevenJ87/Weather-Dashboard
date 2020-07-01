$(".btn-primary").click(function(){
    $(".cityList").append("<li>").append($("<button>").html($("searchName").text()))
});