<h1>Cypress test automation</h1>

<h3>Description</h3>
<p>This test automation has been developed using Cypress framework. It contain two test cases.<b> The hCaptcha verfication will work in testing mode. </b></p>
<p><b>Used Plugins: </b>cypress-xpath and cypress-file-upload </p>

<h3>How to use</h3>
<p>Please make sure that you have node package manager or yarn package manager and node.js - 10 above in your machine</p>

<pre><code>git clone https://github.com/UshaLokanathan/SampleCypressTestAutomation.git</code></pre>
<pre><code>cd SampleCypressTestAutomation</code></pre>
<pre><code>npx cypress open</code></pre>

<h3>Tese Cases </h3>
  <h4> Test Case: 1</h4>  
<p>Check Career page and check for Test Engineer openings</p>
<p>Note: Since the Cypress framework doesn't support visting different domains, So the second test case is developed</p>
 <h4> Test Case: 2</h4>  
<p>Visit the jobs domain (jobs.lever.co) from the Userlane Career page and after submit it checks the response (Return to mainpage button)</p>

 <h3>hCaptcha command - Custom Cypress method</h3>  
<p>This method will be useful when they have many captcha's in the website. </p>
<pre><code>Cypress.Commands.add("clickhcaptcha", () => {
    cy.wait(5000);
    
    //wait 5 seconds to load the iframe
    cy.get('.h-captcha > iframe')
      .then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('#checkbox')
          .should('be.visible')
          .click();
      });
      
      //wait 9seconds to load images
      cy.wait(9000);
  });</code></pre>
