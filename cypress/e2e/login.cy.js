const VALID_EMAIL = 'test@example.com';
const VALID_PASSWORD = 'Test123!';

describe('Login Formu E2E Testleri', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  // SENARYO A: Başarılı giriş
  describe('Başarılı form doldurulduğunda submit edebiliyorum', () => {
    it('success sayfasını açabiliyorum', () => {
      cy.get('#email').type(VALID_EMAIL);
      cy.get('#password').type(VALID_PASSWORD);
      cy.get('#terms').check();
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/success');
    });
  });

  // SENARYO B: Hatalı durumlar
  describe('Hatalı durumlarda hata mesajları görünüyor ve buton disabled kalıyor', () => {

    it('email yanlış girildiğinde: 1 hata mesajı var, doğru mesaj gösteriliyor, buton disabled', () => {
      cy.get('#email').type('yanlis-email');
      cy.get('#password').type(VALID_PASSWORD);

      cy.get('[data-testid="email-error"]').should('have.length', 1);
      cy.get('[data-testid="email-error"]').should('contain', 'Geçerli bir email adresi giriniz.');
      cy.get('button[type="submit"]').should('be.disabled');
    });

    it('email ve password yanlış girildiğinde: 2 hata mesajı var, password hata mesajı görünüyor', () => {
      cy.get('#email').type('yanlis-email');
      cy.get('#password').type('zayif');

      cy.get('[data-testid="email-error"]').should('have.length', 1);
      cy.get('[data-testid="password-error"]').should('have.length', 1);
      cy.get('[data-testid="password-error"]').should('contain', 'Şifre en az 8 karakter');
    });

    it('email ve password doğru ama şartlar kabul edilmediğinde: buton disabled', () => {
      cy.get('#email').type(VALID_EMAIL);
      cy.get('#password').type(VALID_PASSWORD);

      cy.get('button[type="submit"]').should('be.disabled');
    });

  });

});
