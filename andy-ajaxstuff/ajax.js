var yourID = "1f8b080830a1f4580003636974792e6c";
var yourKey = "93f41efc74972939e15924ec1d912c0f";
var theURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=' + yourID +'{APIKEY}=' + yourKey;
$.ajax({
    url: theURL,
    success: function(data) {
    }
})


















// var yourID = '9dc018a5';
// var yourKey = '73ce4c562b1de290effc96ab82ba15b1';
// var theURL = 'https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=' + yourID + '&appKey=' + yourKey;
// $.ajax({
//     url: theURL,
//     success: function(data) {
//         var food = data.hits[1];
//         var name = food.fields.item_name;
//         var cals = food.fields.nf_calories;
//         $('body').append("<h2> This " + name + " has " + cals + "kcals !!!</h2>")
//     }
// })