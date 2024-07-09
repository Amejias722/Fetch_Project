

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
    cy.get(ids.leftBox0).clear().type('0');

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
            cy.log(`You found it! It's either 0 or ${lastNumberEntered}`);
            cy.get('[id="coin_0"]').click()
            cy.on('window:alert', (alertText) => {
              if (alertText === 'Yay! You find it!') {
                expect(alertText).to.equal('Yay! You find it!');
                //return false;
              } else {
                cy.get(`button[id="coin_${lastNumberEntered}"]`).click();
                cy.on('window:alert', (alertText) => {
                  expect(alertText).to.equal('Yay! You find it!');
                  // No need for cy.then() here, just return false to stop iterations
                  return false;
                  
                });
                
              }
            });
            
          }
        });
        
    });
    
  });
});




    // //cy.wrap(buttonIds).each((buttonId) => {
    //   cy.get(`${lastNumberEntered}`).click();
    //   cy.on('window:alert', (alertText) => {
    //     if (alertText === 'Yay! You find it!') {
    //       expect(alertText).to.equal('Yay! You find it!');
    //     }
    
  
  //});
//});

//   it.only('Finds out which weight is fake', () => {
//     let shouldStop = false
//     const popUp = 'Yay! You find it!';
//     const buttonIds = ['coin_0', 'coin_1', 'coin_2', 'coin_3', 'coin_4', 'coin_5', 'coin_6', 'coin_7', 'coin_8'];
  
//     cy.wrap(buttonIds).each((buttonId) => {
//       // Click the button with the current buttonId
//       cy.get(`#${buttonId}`).click().then(() =>{


//       })

//   });
// })


// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://sdetchallenge.fetch.com/');

//     cy.get(ids.leftBox0).clear().type('0')
//     cy.get(ids.rightBox0).clear().type('1')
//     cy.get(ids.weigh).click().wait(3000)

 
// });
// })
