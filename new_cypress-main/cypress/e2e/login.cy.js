describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru'); // Ввести верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввести верный пароль
         cy.get('#loginButton').click(); // Нажать Войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка, что вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик, и он виден  пользователю 
     })  
  })   

 it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru'); // Ввести верный логин
    cy.get('#pass').type('iLoveqastudio11'); // Ввести неверный пароль
    cy.get('#loginButton').click(); // Нажать Войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка, что вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик, и он виден  пользователю 
}) 

it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikovv.ru'); // Ввести неверный логин
    cy.get('#pass').type('iLoveqastudio1'); // Ввести верный пароль
    cy.get('#loginButton').click(); // Нажать Войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка, что вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик, и он виден  пользователю 
})

it('Проверка, что в логине есть @', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru'); // Ввести логин без @
    cy.get('#pass').type('iLoveqastudio1'); // Ввести верный пароль
    cy.get('#loginButton').click(); // Нажать Войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка, что вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик, и он виден  пользователю 
}) 

it('Проверка на воостановление пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click(); // Нажать Забыли пароль
    cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввести почту для восстановления
    cy.get('#restoreEmailButton').click(); // Нажать Отправить код
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка, что вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик, и он виден  пользователю 
}) 

it('Приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввести логин с заглавными буквами
    cy.get('#pass').type('iLoveqastudio1'); // Ввести верный пароль
    cy.get('#loginButton').click(); // Нажать Войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка, что вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик, и он виден  пользователю 
})   