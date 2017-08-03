$.ajax({
  url: 'https://randomuser.me/api/',
  method: "GET",
  dataType: 'json',
}).done(function(data) {
    listData(data);
});

var listData = function(data) {
    var firstname = data.results[0].name.first;
    var lastname = data.results[0].name.last;
    var gender = data.results[0].gender;
    var email = data.results[0].email;
    var location = data.results[0].nat;
    $('body').append("<br>" + firstname + " " + lastname + " " + gender + " " + email + "</br>");
    console.log(data.results[0]);

    country(location);
}

var country = function(nat) {
    $.ajax({
        url: "https://restcountries.eu/rest/v2/alpha/" + nat,
    }).done (function(data){
        console.log(data);
        var place = data.name;
    $('body').append(" " + place)
    })
}