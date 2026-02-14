// Increase Counter by 1
function tickUp() {
    let counter = parseInt(document.getElementById("counter").innerText);
    counter++;
    // Test Case console.log(counter);
    document.getElementById("counter").innerText = counter;
}
// Decrease Counter by 1
function tickDown() {
    let counter = parseInt(document.getElementById("counter").innerText);
    counter--;
    // Test case console.log(counter);
    document.getElementById("counter").innerText = counter;
}

// For Loop: Prints 0 - Current Counter Value
function runForLoop() 
{
    let counter = parseInt(document.getElementById("counter").innerText);
    let resultString = ""; // Holds Results and Resets Results
    
    for(let i = 0; i <= counter; i++) 
    {
        // Test Case console.log(i);
        resultString += i + " ";
    }
    document.getElementById("forLoopResult").innerText = resultString;
}

// Loop: Prints odd # 1 - Current Counter Value
function showOddNumbers()
{
    let counter = parseInt(document.getElementById("counter").innerText);
    let resultString = ""; // Holds Results and Resets Results
    for(let i = 1; i <= counter; i += 2) // Loop through odd numbers and add to string
    {
        // Test Case console.log(i);
        resultString += i + " ";
    }
    document.getElementById("oddNumberResult").innerText = resultString;
}

// Array: Print to console multiples of 5 under counter value in reverse order, if < 5 return empty array
function addMultiplesToArray()
{
    let counter = parseInt(document.getElementById("counter").innerText); // Collect Counter Value
    let multiplesOfFive = []; // Create empty array to hold multiples of 5, make const?
    if(counter < 5)
    {
        console.log(multiplesOfFive);
    }
    else
    {
        for(let i = counter; i >= 5; i--) // Loop backwards from counter
        {
            if(i % 5 === 0)
            {
                multiplesOfFive.push(i);
            }
        }
        console.log(multiplesOfFive);
    }
}

// Objects and Form Fields: Accept/Load input from form then print to console.
function printCarObject()
{
    //carType, carMPG, carColor
    // Collect field Values
    let carType = document.getElementById("carType").value;
    let carMPG = document.getElementById("carMPG").value;
    let carColor = document.getElementById("carColor").value;

    // Ask Professor Data Persistence: If so then need array to hold objects

    // Set Object Values
    let carObjectTemp = {
        type: carType,
        mpg: carMPG,
        color: carColor
    };
    console.log(carObjectTemp); // Print Object to Console
}
// Objects and Form Fields: Upon button click, load car data found in footer of html into the form
function loadCar(carNum)
{
    // Choose which car to load based on button click
    switch(carNum)
    {
        // Each Case will print to console and load corresponding car data into form fields
        case 1:
            console.log(carObject1);
            document.getElementById("carType").value = carObject1.cType;
            (document.getElementById("carMPG").value) = carObject1.cMPG;
            document.getElementById("carColor").value = carObject1.cColor;
            break;
        case 2:
            console.log(carObject2);
            document.getElementById("carType").value = carObject2.cType;
            document.getElementById("carMPG").value = carObject2.cMPG;
            document.getElementById("carColor").value = carObject2.cColor;
            break;
        case 3:
            console.log(carObject3);
            document.getElementById("carType").value = carObject3.cType;
            document.getElementById("carMPG").value = carObject3.cMPG;
            document.getElementById("carColor").value = carObject3.cColor;
            break;
    }
}
// Changing Styles: Upon button click, change text color of paragraph to corresponding color, (red,green,blue)
function changeColor(color)
{
    switch(color)
    {
        case 1:
            document.getElementById("styleParagraph").style.color = "red";
            break;
        case 2:
            document.getElementById("styleParagraph").style.color = "green";
            break;
        case 3:
            document.getElementById("styleParagraph").style.color = "blue";
            break;
    }
}