

var number = 50

var intervalId;

var correct = 0 

var incorrect = 0 

function run() {
	intervalId = setInterval(decrement,1000)
}

function stop() {

clearInterval(intervalId)

}



function decrement(){

	number--

	$("#timer").html("<h2>" + number + "</h2>")

	if (number === 0) {
		stop()

		alert("Time Up!")
		update()
	}

}

run()

	
	$("#done").on("click", function() {

	update()	


	stop()
	})


function update() {
			if ($("input[name = q1]:checked").val() === "y") {
			correct ++ 
		}
		else {
			incorrect++
		}
		
		if ($("input[name = q2]:checked").val() === "y") {
			correct ++ 
		}
		else {
			incorrect++
		}

		if ($("input[name = q3]:checked").val() === "y") {
			correct ++ 
		}
		else {
			incorrect++
		}
		
		if ($("input[name = q4]:checked").val() === "y") {
			correct ++ 
		}
		else {
			incorrect++
		}
		
		if ($("input[name = q5]:checked").val() === "y") {
			correct ++ 
		}
		else {
			incorrect++
		}
		


		$("#timer").html("<h4>You finished!")
		$("#main-section").html("<h4> Great")
		$("#main-section").append("<h4> Number Correct: " + correct + "<h4>")
		$("#main-section").append("<h4> Number Incorrect: " + incorrect + "<h4>")
}


