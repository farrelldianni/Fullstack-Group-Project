var getGames = function (genre) {
    var lastMonth = formatDates("last-month");
    var today = formatDates();
    genre = genre.toLowerCase();
    //gets most popular games from the last month
    var apiUrl =
      "https://api.rawg.io/api/games?tags=" +
      genre +
      "&dates=" +
      lastMonth +
      "," +
      today +
      "&ordering=-added&key=d1ca06a37be445e396ab6a2c11ae8516";
    fetch(apiUrl)
      .then(function (response) {
        response.json().then(function (data) {
          //this api has some common genres under "tags" and some under "genres"
          // this checks both before throwing an error
          if (data.count == 0) {
            var apiUrl =
              "https://api.rawg.io/api/games?genres=" +
              genre +
              "&dates=" +
              lastMonth +
              "," +
              today +
              "&ordering=-added&key=d1ca06a37be445e396ab6a2c11ae8516";
            fetch(apiUrl).then(function (response) {
              response.json().then(function (data) {
                if (data.count == 0) {
                  //error message
                  genreValidationModal();
                  return false;
                } else {
                  //getMovies now called here to validate genre
                  getMovies(genre);
                  var results = data.results;
                  displayGames(results);
                  storeItem(genre, "games", results);
                }
              });
            });
          } else {
            //getMovies now called here to validate genre
            getMovies(genre);
            var results = data.results;
            displayGames(results);
            storeItem(genre, "games", results);
          }
        });
      })
      .catch(function () {
        apiModal("Games");
      });
  };
  
  var displayGames = function (results) {
    //check to see if a list element already exists, and of so, delete it before creating another one
    var elementExists = document.getElementById("listOfGames");
    if (elementExists) {
      elementExists.remove();
    }
    var orderedListEl = document.createElement("ul");
    orderedListEl.classList.add("collection", "recom");
    orderedListEl.setAttribute("id", "listOfGames");
    var div = document.getElementById("gameList");
    div.appendChild(orderedListEl);
    var count = 10;
    outer: for (var i = 0; i < count; i++) {
      //checks for nsfw tags before displaying games
      for (var q = 0; q < results[i].tags.length; q++) {
        var nsfwTags = ["nsfw", "sexual content", "nudity", "sexual-content"];
        if (nsfwTags.indexOf(results[i].tags[q].name.toLowerCase()) != -1) {
          count++;
          continue outer;
        }
      }
      var name = results[i].name;
      var platformList = "";
      for (var n = 0; n < results[i].platforms.length; n++) {
        if (results[i].platforms[n]) {
          var newItem = results[i].platforms[n].platform.name;
          platformList += newItem + ", ";
        } else {
          break;
        }
      }
      platformList = platformList.slice(0, -2);
      var listEl = document.createElement("li");
      listEl.classList.add("row", "collection-item", "avatar");
      listEl.style.fontWeight = "bold";
      listEl.innerHTML =
        "<img src='" +
        results[i].background_image +
        "' class = 'circle responsive-img'><span class='col s8 blue-text text-darken-2'>" +
        name +
        "</span><span class='col s12'>" +
        platformList +
        "</span>";
      orderedListEl.appendChild(listEl);
    }
  };