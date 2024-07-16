## _Fake Weight Project_

[![N|Solid](https://www.shareicon.net/data/128x128/2015/12/28/694395_scale_512x512.png)]()


## Overview 👩🏻‍💻
This project automates the process of finding the fake gold bar in the SDET Challenge using Cypress. The challenge involves interacting with a web page to weigh gold bars, identify the fake one, and verify the results.


## Challenge  ✨
- Explore the website and determine the optimal algorithm (minimum number of weighings) to find the fake gold bar.
- Create an automated test using any preferred language to:
    - a. Perform clicks on buttons ("Weigh", "Reset")
    - b. Retrieve the measurement results (field between the 'bowls')
    - c. Populate the bowls grids with bar numbers (0 to 8)
    - d. Get a list of weighings
    - e. Click on the gold bar number at the bottom of the website and check the alert message
- Implement the algorithm from step 1 using the actions from step 2 to find the fake gold bar.

## The Algorithm Should 🧠
- Populate and weigh gold bars 
- Click on the fake bar number
- Output the alert message, number of weighings, and list of weighings made

## Test Description 📝 
The test script performs the following steps:

1. Navigates to the SDET Challenge website.
2. Adds the number 0 to the first box.
3. Iterates through an array of numbers from 1 to 8.
    - a. For each number, it:
    - b. Clears and enters the number in the right box.
    - c. Clicks the "Weigh" button.
    - d. Waits for the result.
4. Checks the result text.
    - a. If the result is not equal (=), it logs the last entered number.
    - b. Clicks the coin corresponding to the number found.
    - c. Checks the alert message to confirm if the fake bar is found.
5. Verifies that an ordered list of weighings is displayed on the page.
 

## Installation ⚙️

This project requires [Cypress](https://www.cypress.io/) to run.
```sh
npx install cypress
// or
yarn add cypress
```
Install dependencies
```sh
yarn install
```

Running the test

```sh
npx cypress open
// or
yarn cypress open
```

## Plugins

This project utilizes a Cypress plugin called Cy.Step, which assists users in understanding the current step of their test and identifying the last point of failure.

Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Cy.Step | [https://github.com/filiphric/cypress-plugin-steps] |


