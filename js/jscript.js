 

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAYGdRvwcDh-MMliBt_ytc7J3kxcmm6Zpc",
    authDomain: "rajisthanhack.firebaseapp.com",
    databaseURL: "https://rajisthanhack.firebaseio.com",
    projectId: "rajisthanhack",
    storageBucket: "rajisthanhack.appspot.com",
    messagingSenderId: "66943130589"
  };
  firebase.initializeApp(config);


	$("#read").on('click', function(){
	    place = $(".query").val();

	    alert(place);
	    db.ref('dev/').on('value', function(snap){
	        console.log(snap.val()[place]);
	    })
	})

	$("#write").on('click', function () { 
  		// body...
  		console.log("thanks for submission");
  		var data = {
  			name: $(".name").val(),
  			contact: $(".contact").val(),
  			option: $(".place").val(),
  			option: $(".safety").val(),  			
  			problem: $(".report").val()
  		}
  		console.log(data)
  		db.ref('dev/').ref(data.place).set(data);
  		console.log('saved');
  	})



			  	 // Show alert
  /*document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);*/