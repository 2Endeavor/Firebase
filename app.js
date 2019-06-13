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

  //Grab user input
  var trainName = $("#train-name-input").val().trim();
  var destination =$("#finalStop-input").val().trim();
  var firstTrain=$("#firstArrival-input").val().trim();
  var frequency =$("#frequency-input").val().trin();
  

