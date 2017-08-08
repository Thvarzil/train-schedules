$(document).ready(function () {



// Initialize Firebase
    var config = {
        apiKey: "AIzaSyBMlIPR0OvT2MGnztd1BjJPyEu9EqoTpFg",
        authDomain: "train-schedules-6817a.firebaseapp.com",
        databaseURL: "https://train-schedules-6817a.firebaseio.com",
        projectId: "train-schedules-6817a",
        storageBucket: "train-schedules-6817a.appspot.com",
        messagingSenderId: "1080788416264"
    };
    firebase.initializeApp(config);

    var trainTimes = firebase.database();

    var trainName;
    var dest;
    var time;
    var frequency;

//Listen for button click
    $("#addTrain").on("click", function(){

        event.preventDefault();

        trainName=$("#trainName-input").val();
        dest=$("#destination-input").val();
        time=$("#timeTrain-input").val();
        frequency=$("#frequency-input").val();

        trainTimes.ref().push({
            trainName: trainName,
            dest: dest,
            time: time,
            frequency: frequency,
            date: firebase.database.ServerValue.TIMESTAMP
        });

        $("#trainName-display").html(trainName);
        $("#destination-display").html(dest);
        $("#timeTrain-display").html(time);
        $("#frequency-display").html(frequency);
    });

    trainTimes.ref().on("value", function(snapshot){
        console.log(snapshot);
        console.log(snapshot.val().trainName);
        console.log(snapshot.val().dest);
        console.log(snapshot.val().frequency);
        console.log(snapshot.val().time);

        $("#trainName-display").html(snapshot.val().trainName);
        $("#destination-display").html(snapshot.val().dest);
        $("#timeTrain-display").html(snapshot.val().time);
        $("#frequency-display").html(snapshot.val().frequency);

        trainName=snapshot.val().trainName;
        dest = snapshot.val().destination;
        time = snapshot.val().trainTime;
        frequency = snapshot.val().frequency;
    }, function(errorObject){
        console.log("Error Code: " + errorObject.code);
    });

    trainTimes.ref().on("child_added", function(childSnapshot){

        var trainTable = $("#tableBody");

        var row = $("<tr>");

        var trainName = childSnapshot.val().trainName;
        var dest = childSnapshot.val().dest;
        var time = childSnapshot.val().time;
        var frequency = childSnapshot.val().frequency;

        var adjustedTime = moment(time, "HH:mm").subract(1, "year");

        var timeHour = moment(time, "HH:mm").hour();

        var now = moment();

        var nowHour = moment(now, "HH:mm").hour();

        var diff = moment.diff(moment(adjustedTime), "minutes");

    })


});
/**
 * Created by Monk on 7/30/2017.
 */
