
import 'cypress-plugin-steps'

describe('Array Number Input Test', () => {
  beforeEach(() => {
    cy.visit('http://sdetchallenge.fetch.com/');
  });

  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const ids = {
    leftBox0: '[id="left_0"]',
    rightBox0: '[id="right_0"]',
    weigh: '[id="weigh"]',
    reset: '[id="reset"]'
  };

  it('should enter numbers, check button symbol, and find the fake weight', () => {
    cy.step('add 0 to first box')
    cy.get(ids.leftBox0).clear().type('0');

    cy.step('Iterate through each number in array')
    cy.wrap(numbersArray).each((number) => {
      cy.get(ids.rightBox0)
        .clear()
        .type(number.toString());
      cy.get(ids.weigh)
        .click()
        .wait(3000);

      cy.get(ids.reset).eq(0)
        .invoke('text')
        .then((text) => {
          if (text !== '=') {
            const lastNumberEntered = `${number}`;
            cy.log(`You found it! It's either 0 or ${lastNumberEntered}`)
            cy.get('[id="coin_0"]').click()
            cy.on('window:alert', (alertText) => {
              if (alertText === 'Yay! You find it!'){
                expect(alertText).to.equal('Yay! You find it!');
                
              } else {
                cy.get(`button[id="coin_${lastNumberEntered}"]`).click();
              
              }
            });
        
          }
        });
        
    });
    cy.step('verify there is an ordered list')
  
    cy.get('ol').find('li').should('have.length', 8).should('be.visible');
  });
});