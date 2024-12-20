describe('Sign in page', () => {
  beforeEach(() => {
    cy.visit('https://www.kitchenstuffplus.com/')
})
// expect - BDD (Behavioural Driven Development )
// assert - TDD (Test Driven Development)
    it("Explicit assertions",()=> {
      //cy.visit()
      cy.url().should('include','www.kitchenstuffplus.com')
      cy.get('[class="customer-icon customer-menu-toggle"]').click()
      cy.wait(1000)
      cy.get('[class="action sign-in"]').should('be.visible','Sign In')
      cy.get('[class="action sign-in"]').click()
      cy.get('[name="login[username]"]').type("susirayalukadiyala@gmail.com")
      cy.get('[name="login[password]"]').type("susirayalu1K")
      cy.get('[type="checkbox"]').check()
      cy.get('[class="action login primary"]').should('be.visible','Sign In')
      cy.get('[class="action login primary"]').click()
      cy.get('[class="customer-icon customer-menu-toggle"]').click()

      cy.fixture('example.json').then((user) => {
        cy.get('[class="customer-name"]').then ((x) =>
          {
            let Actualusername = x.text()
              expect(Actualusername).to.eq(user.loginusername);
            })
      })

   /*   let expectedusername = "Hi susi";
      cy.get('[class="customer-name"]').then ((x) =>
      {
        let Actualusername = x.text()
        //BDD
        expect(Actualusername).to.equal(expectedusername)
        //expect(Actualusername).to.not.equal(expectedusername)
        //TDD
        assert.equal(Actualusername,expectedusername)
        //assert.not.equal(Actualusername,expectedusername)
    })*/
  }) 

  })

describe('locations Page Validations', () => {
  beforeEach(() => {
  cy.visit('https://www.kitchenstuffplus.com/')
  
  })
  
  // should and and are implicit Assertions
       it("Implict assertions",()=>{
        cy.get('[class="needsclick klaviyo-close-form go721276782 kl-private-reset-css-Xuajs1"]', { timeout: 40000 }).click()
        cy.url().should('include','www.kitchenstuffplus.com')
        .should('eq','https://www.kitchenstuffplus.com/') // we can use direct .should without retypeing cy.url()
        .and('contain','kitchen') // instead of should we can use and
   })
  
  })
  

describe('Load Page validations', () => {
    it('Visits bell.ca page', () => {
      cy.visit('https://www.kitchenstuffplus.com/')
      cy.get('[class="needsclick klaviyo-close-form go721276782 kl-private-reset-css-Xuajs1"]', { timeout: 40000 }).click()
      cy.title().should('eq' ,'Kitchen Stuff Plus | Houseware & Home Decor Retailer') // title validation
     // cy.get('a[href="https://www.kitchenstuffplus.com/"]').should('contain','Home') // absolute xpath
      cy.xpath('//a[text()="Home"]').should('contain','Home')
      cy.get('[href="https://www.kitchenstuffplus.com/store"]').should('contain','Locations') /// check with bhanu
      cy.get('[href="/red-hot-deals"]').should('contain','Red Hot Deals')
      cy.get('[href="https://www.kitchenstuffplus.com/flyers-and-promotions"]').should('contain','Flyers & Promotions')
      cy.get('a[href="/digital-flyers"]').first().should('have.text','Black Friday')
      cy.get('a[href="/gifts"]').first().should('have.text','Gift Guide')
      cy.get('a[href="/new"]').first().should('have.text','New')     
    })
  })

 describe('locations Page Validations', () => {
    beforeEach(() => {
      cy.visit('https://www.kitchenstuffplus.com/')
  })

   it('Validations on Location Menu option' ,()=> {
//cy.wait (40000)
//cy.get('[class="needsclick klaviyo-close-form go721276782 kl-private-reset-css-Xuajs1""]').click()
 // cy.get('[class="needsclick klaviyo-close-form go721276782 kl-private-reset-css-Xuajs1"]').click()
      cy.get('[class="needsclick klaviyo-close-form go721276782 kl-private-reset-css-Xuajs1"]', { timeout: 40000 }).click()
      cy.get('[href="https://www.kitchenstuffplus.com/store"]').click()   
      cy.title().should('eq','Store Locator | Kitchen Stuff Plus')
      cy.get('[class="page-title"]').find('span').should('contain.text','Store Locator') 
  })
 })