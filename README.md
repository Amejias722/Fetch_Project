
Overview
This project automates the process of finding the fake gold bar in the SDET Challenge using Cypress. The challenge involves interacting with a web page to weigh gold bars, identify the fake one, and verify the results.

Challenge:
1. Explore the website and determine the optimal algorithm (minimum number of weighings) to find the fake gold bar.
2. Create an automated test using any preferred language to:
 a. Perform clicks on buttons ("Weigh", "Reset")
 b. Retrieve the measurement results (field between the 'bowls')
 c. Populate the bowls grids with bar numbers (0 to 8)
 d. Get a list of weighings
Click on the gold bar number at the bottom of the website and check the alert message
3. Implement the algorithm from step 1 using the actions from step 2 to find the fake gold bar. 

The algorithm should:
Populate and weigh gold bars until the fake one is found
Click on the fake bar number
Output the alert message, number of weighings, and list of weighings made

Prerequisites
Node.js and npm installed
Cypress installed (npm install cypress)
Cypress plugin steps installed (npm install cypress-plugin-steps)


Setup
Clone the repository:

bash
Copy code
git clone <repository-url>
cd <repository-directory>
Install dependencies:

bash
Copy code
npm install
Open Cypress:

bash
Copy code
npx cypress open
Running the Test
Open Cypress Test Runner with:
bash
Copy code
npx cypress open
Run the test by selecting the test file.


Test Description
The test script performs the following steps:

1. Navigates to the SDET Challenge website.
2. Adds the number 0 to the first box.
3. Iterates through an array of numbers from 1 to 8.
    a. For each number, it:
    b. Clears and enters the number in the right box.
    c. Clicks the "Weigh" button.
    d. Waits for the result.
4. Checks the result text.
    a. If the result is not equal (=), it logs the last entered number.
    b. Clicks the coin corresponding to the number found.
    c. Checks the alert message to confirm if the fake bar is found.
5. Verifies that an ordered list of weighings is displayed on the page.

Conclusion
This README provides an overview of the project, setup instructions, and a detailed description of the test script. By following these steps, you can automate the process of finding the fake gold bar in the SDET Challenge.