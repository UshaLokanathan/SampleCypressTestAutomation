/// <reference types="cypress" />

it('user lane',  function(){

    cy.visit('https://www.userlane.com')
    cy.get('#menu-item-7533 > a').click()
    cy.get('.mt-5 > .cta-button').click()
   // cy.get('.FullTimeorPartTime > .job-title > .job-item__title').click()
    
})
it('apply from redirected domain',  function(){

    cy.visit('https://jobs.lever.co/userlane/19b969e3-e406-486c-82e6-483f62fe597f')
    cy.get('.postings-btn-wrapper > .postings-btn').click()
    cy.get('#resume-upload-input').attachFile('CV_Usha_Lokanathan.pdf');
    cy.get(':nth-child(1) > ul > :nth-child(2) > label > .application-field > input').type('Usha Lokanathan')
    cy.get(':nth-child(1) > ul > :nth-child(3) > label > .application-field > input').type('er.usha.lokanathan@gmail.com')
    cy.get(':nth-child(1) > ul > :nth-child(4) > label > .application-field > input').type('+49-17643619156')
    cy.get(':nth-child(1) > ul > :nth-child(5) > label > .application-field > input').type('Muster')
    cy.get(':nth-child(3) > ul > .application-question > label > .application-field > .card-field-input').type('01.11.2021')
    cy.get(':nth-child(4) > :nth-child(3) > .application-question > :nth-child(1) > .application-field').click()
    cy.get(':nth-child(5) > ul > .application-question > label > .application-field > .card-field-input').type('70000')
    cy.get('#additional-information').type('Test Cover letter')
    cy.get('[type="checkbox"]').click()
    cy.get('.last-section-apply > .postings-btn').click()



    })
