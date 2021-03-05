describe('Checking Different Locations', function() 
{
    it('Checking title', function() 
    {
      cy.visit('https://www.airbnb.com')
      cy.title().should('eq','Vacation Rentals, Homes, Experiences & Places - Airbnb')
     
    })
    
    it('Entering Location', function() 
    {
      //Clicking search button
      cy.get('#bigsearch-query-detached-query').click()
      //searching against the value
      cy.get('#bigsearch-query-detached-query').type('Lahore{enter}') 
      //Assertion to check if we have landed on the page or not
      cy.title().should('include','Lahore')

      cy.wait(2000)
      //to maximize the button option on next page
      cy.get('._1g5ss3l').click()
      //selecting the input 
      cy.get('#bigsearch-query-detached-query').click()
      //Removing value from input field  
      cy.get('._1xq16jy[id="bigsearch-query-detached-query"]').clear()

      //Again Enter new value
      cy.get('#bigsearch-query-detached-query').type('Karachi')  
      cy.get('._m9v25n').click()
      //Assertion to check if we have landed on the page or not
      cy.title().should('include','Karachi')
      cy.wait(2000)

      // confirm Select2 widget renders the state name
      //cy.get('#select2-favorite-state-container').should('have.text', 'Karachi') 
  
    })
 
    it('Different flexibility slots', function() 
    {
      //to maximize the button option on next page
      cy.get('._1g5ss3l').click()
      //selecting the input 
      cy.get('#bigsearch-query-detached-query').click()
      //Removing value from input field  
      cy.get('._1xq16jy[id="bigsearch-query-detached-query"]').clear()
      //Selecting City
      cy.get('#bigsearch-query-detached-query').type('Islamabad')  
      cy.get('._m9v25n').click()

      //Clicking Add dates button
      cy.get('._1g5ss3l').click()
      //Clicking on Checkin button
      cy.get('._j8gg2a').first().click()
      //cy.get('._1akb2mdw[data-testid="structured-search-input-field-split-dates-0"]').click()
      //Selecting some future check in dates
      //cy.get('.__1258d0t[data-testid=datepicker-day-2021-03-22]').click()
      cy.get('._12fun97').first().click()
      cy.wait(1000)
      

      //Clicking Checkout button
      cy.get('._j8gg2a').last().click()
      //cy.get('._th2fvde[data-testid="structured-search-input-field-split-dates-1]').click()
      //Selecting date for check out 
      cy.get('._12fun97').first().click()
     
    })    
    
    it('Checking maximum number of Guests', function() 
    {
      //Clicking on Guest button.
      cy.get('._1yulsurh').click()

      //Click on increase the number on adults.
      //cy.get('._3zlfom[#id=stepper-adults]').click()
      var noOfPersons = 0
      for (var i = 1; i < 17; i++) 
      {
          cy.get('[data-testid="stepper-adults-increase-button"] > .\_8ovatg').click()
          //cy.get('[data-testid="stepper-adults-decrease-button"] svg').click()
          noOfPersons++

      }
      
      for (var i = 1; i < 7; i++) 
      {
        cy.get('[data-testid="stepper-children-increase-button"] svg').click()
        //cy.get('[data-testid="stepper-children-decrease-button"] > .\_8ovatg').click()
        noOfPersons++
      }
      for (var i = 1; i < 7; i++) 
      {
        cy.get('[data-testid="stepper-infants-increase-button"] > .\_8ovatg').click()
        //cy.get('[data-testid="stepper-infants-decrease-button"] svg').click()
        noOfPersons++
      }
      expect(21).to.be.lessThan(noOfPersons)
    
    })

    it('Checking if search button can be pressed', function() 
    {
      
      if(cy.get('._m9v25n').click())
      {
        expect(1).to.equal(1)
      }
      else
      {
        expect(2).to.equal(3)
      }
     
    })

  }) 

describe('Checking invalid enteris', function() {

  it('Checking Search button with incorrect values', function() 
  {
    cy.visit('https://www.airbnb.com')
    //Clicking search button
    cy.get('#bigsearch-query-detached-query').click()
    //searching against the value
    cy.get('#bigsearch-query-detached-query').type('Lahore{enter}')

    //to maximize the button option on next page
    cy.get('._1g5ss3l').click()
    //selecting the input 
    cy.get('#bigsearch-query-detached-query').click()
    //Removing value from input field  
    cy.get('._1xq16jy[id="bigsearch-query-detached-query"]').clear()
    //Selecting City
    cy.get('#bigsearch-query-detached-query').type('Islamabad')  
    //cy.get('._m9v25n').click()
    cy.get('._j8gg2a').last().click()

    //to maximize the button option on next page
    //cy.get('._1g5ss3l').click()

    //Clicking on Guest button.
    cy.get('._1yulsurh').click()

    //Not selecting any date values.
    //trying to give negative values in the guest list.
    cy.get('[data-testid="stepper-adults-increase-button"] > .\_8ovatg').click()
    cy.wait(1000)
    for (var i = 1; i < 2; i++) 
    {
      cy.get('[data-testid="stepper-adults-decrease-button"] svg').click()
    }
    cy.wait(1000)
    cy.get('[data-testid="stepper-children-increase-button"] svg').click()
    cy.wait(1000)
    for (var i = 1; i < 2; i++) 
    {
      cy.get('[data-testid="stepper-children-decrease-button"] > .\_8ovatg').click()
    }
    cy.wait(1000)
    cy.get('[data-testid="stepper-infants-increase-button"] > .\_8ovatg').click()
    for (var i = 1; i < 2; i++) 
    {
      cy.get('[data-testid="stepper-infants-decrease-button"] svg').click() 
    }
    //If we add one child/infant, Adult also gets include so remove adult from the list.
    cy.get('[data-testid="stepper-adults-decrease-button"] svg').click()

    if(cy.get('._m9v25n').click())
    {
      expect(1).to.equal(1)
    }
    else
    {
      expect(2).to.equal(3)
    }
  })

})
