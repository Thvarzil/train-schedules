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

trainTimes.ref().on("value", function(snapshot){

});


/**
 * Created by Monk on 7/30/2017.
 */
