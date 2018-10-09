$("button").on("click", function () {
  var food = $(this).attr("data-food");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    food + "&api_key=vuQHizujrp9lC4WAhOu72vL7OIvIQjH7&limit=10";
  console.log(queryURL.replace("", "+"));

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);

    var results = response.data;

    for (var i = 0; i < results.length; i++) {

      var foodDiv = $("<div>");

      var p = $("<p>").text("Rating: " + results[i].rating);

      var foodImage = $("<img>");

      foodImage.attr("src", results[i].images.fixed_height.url);

      foodDiv.append(p);
      foodDiv.append(foodImage);

      $("#gifs-appear-here").prepend(foodDiv);
    }
  });
});
