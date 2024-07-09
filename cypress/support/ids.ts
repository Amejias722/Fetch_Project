import { error } from "cypress/types/jquery";

export enum ids {

leftBox0 = '[id="left_0"]',
leftBox1 = '[id="left_1"]',
leftBox2 = '[id="left_2"]',
rightBox0 = '[id="right_0"]',
rightBox1 = '[id="right_1"]',
rightBox2 = '[id="right_2"]',
reset = '[id="reset"]',
weigh = '[id="weigh"]',

}

export function clickEachButton() {
    const popUp = 'Yay! You find it!';
    const buttonIds = ['coin_0', 'coin_1', 'coin_2', 'coin_3', 'coin_4', 'coin_5', 'coin_6', 'coin_7', 'coin_8'];
  
    let foundYay = false;
  
    cy.wrap(buttonIds).each((buttonId) => {
      if (!foundYay) {
        cy.get(`#${buttonId}`).click(); // Use correct selector for your buttons
        cy.contains(popUp).then(($popup) => {
          if ($popup.length > 0) {
            foundYay = true; // Set flag to true once found
          }
        });
      }
    });
  }
  



