    function getHoroscope() {
      var sign = document.getElementById("sign").value;
      var apiKey = "c3b8ec66a6msh0e5f75445eedc67p14c2dcjsnbf5a2c8bedd4";
      var url = `https://aztro.sameerkumar.website?sign=${sign}&day=today`;

      document.getElementById("output").innerHTML = "Loading...";

      axios({
        method: "POST",
        url: url,
        headers: { "x-rapidapi-key": apiKey }
      })
        .then(function(response) {
          document.getElementById("output").innerHTML = response.data.description;
        })
        .catch(function(error) {
          document.getElementById("output").innerHTML = "Error: " + error;
        });
    }