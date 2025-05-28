import LoginPom from "./pom/LoginPom"

describe('login test', () => {
  
  beforeEach (()=> {
    //url in cypress.config.js
    cy.visit ('/')
    LoginPom.selector.LoginMenu().click()
  })

  //first check if all load correctly 
  it ('item completeness', ()=> {

    LoginPom.selector.Logo().should("be.visible")
    //login form
    LoginPom.selector.LoginEmail().should("be.visible").and('have.attr', 'placeholder', 'Email Address')
    LoginPom.selector.LoginPassword().should("be.visible").and('have.attr', 'placeholder', 'Password')
    LoginPom.selector.LoginButton().should('be.visible').and('contain.text', 'Login')
    //register form 
    LoginPom.selector.RegisterEmail().should('be.visible').and('have.attr', 'placeholder', 'Email Address')
    LoginPom.selector.RegisterName().should('be.visible').and('have.attr', 'placeholder', 'Name')
    LoginPom.selector.RegisterButton().should('be.visible').and('contain.text', 'Signup')

  })

  it ('register without credentials ', ()=> {
   
    LoginPom.selector.RegisterButton().click()
    //verify that the fields are required
    LoginPom.selector.RegisterEmail().should('have.attr', 'type', 'email')
    .and('have.attr', 'required');
    LoginPom.selector.RegisterName().should('have.attr', 'required')
  })

  it('register new account ', ()=> {
    LoginPom.commands.register('Luan', 'luan.acevedo89@gmail.com')
    LoginPom.selector.form.TitleRadio().check()
    LoginPom.selector.form.Password().type('Elmaspro123')
    LoginPom.selector.form.Day().select('26')
    LoginPom.selector.form.Month().select('April')
    LoginPom.selector.form.Year().select('2000')
    LoginPom.selector.form.Newsletter().check()
    LoginPom.selector.form.Optin().check()
    LoginPom.selector.form.FirstName().type('Hector Luan')
    LoginPom.selector.form.LastName().type('Acevedo')
    LoginPom.selector.form.Company().type('lalala')
    LoginPom.selector.form.Address1().type('gugu1112')
    LoginPom.selector.form.Address2().type('gagag20202')
    LoginPom.selector.form.Country().select('Australia')
    LoginPom.selector.form.State().type('States')
    LoginPom.selector.form.City().type('Posadas')
    LoginPom.selector.form.ZipCode().type('3304')
    LoginPom.selector.form.MovilNumber().type('491283491')
    LoginPom.selector.form.CreateAccount().click()

    //register complete
    cy.get('b').should('have.text', 'Account Created!')
    cy.get('.col-sm-9 > :nth-child(2)').should('have.text', 'Congratulations! Your new account has been successfully created!')
    cy.get('.col-sm-9 > :nth-child(3)').should('have.text', 'You can now take advantage of member privileges to enhance your online shopping experience with us.')
    cy.get('[data-qa="continue-button"]').should('contain.text', 'Continue')
    .click()
  })

  it('register with email used', ()=> {
    LoginPom.commands.register('Luan', 'luan.acevedo89@gmail.com')
    LoginPom.commands.signerror('Email Address already exist!')
  })


  it('Login without any credentials',()=> {
    LoginPom.selector.LoginEmail().should('have.attr', 'required')
    LoginPom.selector.LoginPassword().should('have.attr', 'required')
    LoginPom.selector.LoginButton().click()
  })

  it('Login with email not registred', ()=> {
    LoginPom.commands.login('asdasdasd@gmail.com', 'Elmaspro123')
    LoginPom.commands.error('Your email or password is incorrect!')
  })

  it.only('Login with email registred',() => {
    LoginPom.commands.login('luan.acevedo89@gmail.com', 'Elmaspro123')
    //verify login properly
    cy.get('.shop-menu > .nav > :nth-child(4) > a').should('have.text', ' Logout')
  })

})