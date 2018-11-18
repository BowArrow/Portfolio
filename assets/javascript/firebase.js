
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBpp-1xUmIpRooF0BATmAvxIB7tQ1ZP8I",
    authDomain: "portfolio-e7a81.firebaseapp.com",
    databaseURL: "https://portfolio-e7a81.firebaseio.com",
    projectId: "portfolio-e7a81",
    storageBucket: "portfolio-e7a81.appspot.com",
    messagingSenderId: "437511427092"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var portfolio = database.ref("/portfolio/")
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var iconsRef = storage.ref("/icons/")

  portfolio.on("child_added", function(snap){
    var key = snap.val();
    var imgSrc;
    var portDiv = $("#porfolioLinks");
    var col = $("<div>").addClass("col-md-4 mt-4 image");
    var link = $("<a>").attr("href", key.link);
    iconsRef.child(key.icon).getDownloadURL().then(function(url){
      imgSrc = url;
      var img = $("<img>").addClass("img-fluid web").attr("src", imgSrc);
      link.append(img);
    });
    var text = $("<div>").addClass("box-text").text(key.title);
    link.append(text);
    col.append(link);
    portDiv.append(col);
  })

  