$("button").on("click", function () {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=vuQHizujrp9lC4WAhOu72vL7OIvIQjH7";
    console.log(queryURL.replace("", "+"));

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);

      var results = response.data;

      for (var i = 0; i < results.length; i++) {

        var animalDiv = $("<div>");

        var p = $("<p>").text("Rating: " + results[i].rating);

        var animalImage = $("<img>");

        animalImage.attr("src", results[i].images.fixed_height.url);

        animalDiv.append(p);
        animalDiv.append(animalImage);

        $("#gifs-appear-here").prepend(animalDiv);
      }
    });
  });