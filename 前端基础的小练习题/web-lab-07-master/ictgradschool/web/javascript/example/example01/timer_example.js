window.addEventListener("load", function() {
    // This stores a reference to the timer, the variable needs to be declared here
    // so that it can be retrieved to be reset
    // Note that the timer reference is only a reference to the timer and NOT the actual timer
    let countdownTimerReference = undefined;
    // The countdown variable is set here so it can be in scope for different functions to reset
    let countdownCount = 0;

    // You should only have variables that need to be accessed by all functions at this level

    // Add event listeners to the buttons to call functions when clicked
    document.querySelector("#start").addEventListener("click", startClicked);
    document.querySelector("#reset").addEventListener("click", resetCountdown);

    function startClicked() {
        // Store the text from the user input
        let countdownTimeInputText = document.querySelector("#countdown_time_input").value;

        // Check that the text can be converted to an integer
        if (Number.isInteger(parseInt(countdownTimeInputText))) {
            // Convert the user input to an integer
            let countdownTimeInputInt = parseInt(countdownTimeInputText);

            // Check that the countdownTimerReference is undefined before starting a timer
            // If you do not check the reference is undefined, it will create multiple timers
            // when the button is clicked twice
            if (countdownTimerReference === undefined) {
                // Set the countdownCount variable so that 'countdownTick()' can decrease it
                countdownCount = countdownTimeInputInt;
                // Set the timer interval to call countdownTick every second
                countdownTimerReference = setInterval(countdownTick, 1000);
            }

        } else {
            alert("Please input an integer");
        }
    }

    function countdownTick() {
        // Decrease the countdownCount variable
        countdownCount -= 1;
        // Get a reference to the div with the id '#count_down_display'
        let countdownDisplay = document.querySelector("#count_down_display");
        // Set the innerText of countdownDisplay to countdownCount
        countdownDisplay.innerText = countdownCount;
    }

    function resetCountdown() {
        // Check that the countdownTimer is not undefined before clearing it
        if (countdownTimerReference !== undefined) {
            // Use the global reference to the countdownTimer to clear the timer
            clearInterval(countdownTimerReference);
            // Reset the reference to undefined so that it can be run again
            countdownTimerReference = undefined;
            // Reset the countdown variable to 0
            countdownCount = 0;
            // Call the clear timer display function to reset the display
            clearTimerDisplay();
        }
    }

    function clearTimerDisplay() {
        // Get a reference to the DOM element
        let countdownDisplay = document.querySelector("#count_down_display");
        // Set the innerText of the DOM element
        countdownDisplay.innerText = "ENTER A TIME AND CLICK START COUNTDOWN";

        // Get a reference to the input element
        let inputValues = document.querySelector("#countdown_time_input");
        // Set the value of the input element so that it is empty again so that
        // the user doesn't need to reset it again
        inputValues.value = "";
    }
});