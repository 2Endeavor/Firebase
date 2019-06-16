
// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed

// 1. Initialize Firebase

  // Your web app's Firebase configuration
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

  // 2. Button for adding trains
  $("#add-train-btn").on("click", function(event) { 

    event.preventDefault();
    
    
    //Grab user input
    var trainName = $("#train-name-input").val();
    var destination =$("#finalStop-input").val();
    var firstTrain=$("#firstArrival-input").val();
    var frequency =$("#frequency-input").val();
    
    var newTrain = {
      name: trainName,
      finalStop: destination,
      firstArrival: firstTrain,
      freq: frequency
    };
    console.log(trainName);
    //debugger;
  // Uploads train data to the database
    database.ref().set(newTrain);
  
    // Clear all text-box inputs
    $("#train-name-input").val("");
    $("#finalStop-input").val("");
    $("#firstArrival-input").val("");
    $("#frequency-input").val("");

  });
  // Create firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added",function(childSnapshot){
    console.log(childSnapshot.val());

    // store everything into a variable
    var tName = ChildSnapshot.val().name;
    var final = ChildSnapshot.val().finalStop;
    var arrive = ChildSnapshot.val().firstArrival;
    var periodicity = ChildSnapshot.val().freq;
    console.log(tName);
    console.log(final);
    console.log(arrive);
    console.log(periodicity);

  })
  