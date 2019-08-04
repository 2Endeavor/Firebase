$(document).ready(function() {
  // create Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB6bcCVY7JZLr-zjUpOgAGOgdgGs365C4s",
    authDomain: "train-tracker-3c3a7.firebaseapp.com",
    databaseURL: "https://train-tracker-3c3a7.firebaseio.com",
    projectId: "train-tracker-3c3a7",
    storageBucket: "train-tracker-3c3a7.appspot.com",
    messagingSenderId: "829658820080",
    appId: "1:829658820080:web:6a4af65933d011e6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  // Create firebase event listener for adding trains to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    // reduce typing by storing childSnapshot.val() to a variable
    var snap = childSnapshot.val();

    var firstTime = snap.firstArrival;
    // console.log("snap.first arrival " + snap.firstArrival);
    // console.log("firstTime = " + firstTime);

    // create times for the reader board
    var firstArrival = moment.unix(firstTime).format("hh:mm");
    var firstTimeConverted = moment(firstArrival, "HH:mm").subtract(1, "years");
    //calculate difference between times
    console.log("firstArrival " + firstArrival);
    var difference = moment().diff(moment(firstTimeConverted), "minutes");
    console.log ("difference " + difference);

   // time apart remainder
    var trainRemain = difference % snap.freq;
    console.log ("trainRemain " + trainRemain);

    // minutes until arrival
    var minUntil = snap.freq - trainRemain;
    console.log ("minUntil " + minUntil);

    //next arrival time
    var nextArrival = moment()
      .add(minUntil, "minutes")
      .format("hh:mm");
      console.log("nextArrival" + nextArrival)

    // Adding the informaiton to the DOM
    var newRow = $("<tr>").append(
      $("<td>").text(snap.name),
      $("<td>").text(snap.finalStop),
      $("<td>").text(snap.freq),
      $("<td>").text(nextArrival),
      $("<td>").text(minUntil)
    );
    $("tbody").append(newRow);
  });
  
  // Add Button for adding trains
  $("#add-train-btn").on("click", function(event) {
    // prevent automated page reload
    event.preventDefault();

    //Grab user input require for the reader board
    var trainName = $("#train-name-input")
      .val()
      .trim();
    var destination = $("#finalStop-input")
      .val()
      .trim();

    //convert user input into required information
    var firstTrain = moment(
      $("#firstArrival-input")
        .val()
        .trim(),
      "hh:mm"
    )
      .subtract(1, "years")
      .format("X");

    var frequency = $("#frequency-input")
      .val()
      .trim();

    // current time
    var currentTime = moment();
    moment(currentTime).format("hh:mm");

    // Create the new train object that will be stored in the database
    var newTrain = {
      name: trainName,
      finalStop: destination,
      firstArrival: firstTrain,
      freq: frequency
    };

    // Uploads train data to the database
    database.ref().push(newTrain);

    // Clear all text-box inputs
    $("#train-name-input").val("");
    $("#finalStop-input").val("");
    $("#firstArrival-input").val("");
    $("#frequency-input").val("");

  });

  //end document ready function
});
