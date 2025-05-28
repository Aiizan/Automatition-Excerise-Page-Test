
// create a pom for login 
class Login {

selector={
    LoginMenu: ()=> cy.get('.shop-menu > .nav > :nth-child(4) > a'),
    Logo: ()=> cy.get('img'),
    //register
    RegisterName: ()=> cy.get('[data-qa="signup-name"]'),
    RegisterEmail:()=> cy.get('[data-qa="signup-email"]'),
    RegisterButton: ()=> cy.get('[data-qa="signup-button"]'),
    form: {
        TitleRadio: ()=> cy.get('#id_gender1'),
        Password: ()=> cy.get('[data-qa="password"]'),
        Day: ()=> cy.get('[data-qa="days"]'),
        Month: ()=> cy.get('[data-qa="months"]'),
        Year: ()=> cy.get('[data-qa="years"]'),
        Newsletter: ()=> cy.get('#newsletter'),
        Optin: ()=> cy.get('#optin'),
        //address infomation
        FirstName: ()=> cy.get('[data-qa="first_name"]'),
        LastName: ()=> cy.get('[data-qa="last_name"]'),
        Company: ()=> cy.get('[data-qa="company"]'),
        Address1: ()=> cy.get('[data-qa="address"]'),
        Address2: ()=> cy.get('[data-qa="address2"]'),
        Country:()=> cy.get('[data-qa="country"]'),
        State: ()=> cy.get('[data-qa="state"]'),
        City: ()=> cy.get('[data-qa="city"]'),
        ZipCode: ()=> cy.get('[data-qa="zipcode"]'),
        MovilNumber: ()=> cy.get('[data-qa="mobile_number"]'),
        CreateAccount: ()=> cy.get ('[data-qa="create-account"]')
    },
    //login
    LoginEmail:()=> cy.get('[data-qa="login-email"]'),
    LoginPassword: ()=> cy.get('[data-qa="login-password"]'),
    LoginButton: ()=> cy.get('[data-qa="login-button"]'),

};


commands = {
    login: (email, password) => {
        if (email) this.selector.LoginEmail().type(email);
        if (password) this.selector.LoginPassword().type(password); 
        this.selector.LoginButton().click();
    },
    register: (username, email) => {
        if(username) this.selector.RegisterName().type(username);
        if(email) this.selector.RegisterEmail().type(email);
        this.selector.RegisterButton().click()

    },
  
    error: (msg) => {
       cy.get('.login-form > form > p').should('be.visible').and('have.text', msg)
    },
    signerror: (msg) => {
       cy.get('.signup-form > form > p').should('be.visible').and('have.text', msg)
    }

}



}
export default new Login()