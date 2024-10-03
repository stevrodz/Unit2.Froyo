// Function to prompt for froyo flavors and display the counts
function orderFroyoFlavors() {
  // Prompt the user for froyo flavors
  const userInput = prompt("Enter your Froyo flavors, separated by commas:");

  // Check if the user provided input
  if (userInput) {
    // Split the input string into an array
    const flavorsArray = userInput.split(",").map((flavor) => flavor.trim());

    // Object to track flavor counts
    const flavorCounts = {};

    // Iterate through the array to count each flavor
    flavorsArray.forEach((flavor) => {
      // If the flavor already exists in the object, increment its count
      if (flavorCounts[flavor]) {
        flavorCounts[flavor]++;
      } else {
        // Otherwise, initialize the count to 1
        flavorCounts[flavor] = 1;
      }
    });

    // Log the results in a table format in the console
    console.table(flavorCounts);
  } else {
    console.log("No flavors entered.");
  }
}

// Call the function to execute the code
orderFroyoFlavors();
