/// <reference types="cypress" />

/**
 * Test case 1: check Userlane Career page and check for Test Engineer openings
 */
it('Userlane Career',  function(){
    cy.visit('https://www.userlane.com/careers/')
    cy.get('.job-item__title').contains('QA/Test Engineer')
})

/**
 * Since the Cypress framework doesn't support visting different domains, So the second test case is developed
 * 
 * Test case 2: Visit the jobs domain (jobs.lever.co) from the Userlane Career page and after submit it checks the response (Return to mainpage button)
 *  
 */

it('apply from redirected domain',  function(){

    cy.visit('https://jobs.lever.co/userlane/19b969e3-e406-486c-82e6-483f62fe597f')
    cy.get('.postings-btn-wrapper > .postings-btn').click()
    
    cy.get('#resume-upload-input').attachFile('CV_Usha_Lokanathan.pdf')
    cy.wait(4000)//wait 4 seconds to upload document

    cy.get(':nth-child(1) > ul > :nth-child(2) > label > .application-field > input').type('Test Person')
    cy.get(':nth-child(1) > ul > :nth-child(3) > label > .application-field > input').type('testmail@mail.com')
    cy.get(':nth-child(1) > ul > :nth-child(4) > label > .application-field > input').type('+49-5361659875')
    cy.get(':nth-child(1) > ul > :nth-child(5) > label > .application-field > input').type('Test company')

    cy.get(':nth-child(2) > ul > :nth-child(1) > label > .application-field > input').type('https://www.linkedin.com/testprofile')
    cy.get(':nth-child(2) > ul > :nth-child(2) > label > .application-field > input').type('https://twitter.com/testprofile')
    cy.get(':nth-child(2) > ul > :nth-child(3) > label > .application-field > input').type('https://github.com/testprofile')
    cy.get(':nth-child(2) > ul > :nth-child(4) > label > .application-field > input').type('https://mywork.com/testprofile')
    cy.get(':nth-child(2) > ul > :nth-child(5) > label > .application-field > input').type('https://userlane.com/aboutme')

    cy.get(':nth-child(3) > ul > .application-question > label > .application-field > .card-field-input').type('01.12.2021')
    cy.get(':nth-child(4) > :nth-child(3) > .application-question > :nth-child(1) > .application-field').click()
    cy.get(':nth-child(5) > ul > .application-question > label > .application-field > .card-field-input').type('50000')
    cy.get('#additional-information').type('Test Cover letter')
    cy.get('[type="checkbox"]').click()
    
    //This method had been implemented in command.js 
    cy.clickhcaptcha();   
    
    cy.get('.last-section-apply > .postings-btn').click()

    cy.wait(5000)
    cy.get('.template-btn-submit').contains('Return to the main page')
  



    })
