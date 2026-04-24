describe('Blog do Agi - Busca', () => {
  it('deve buscar por cartão e abrir um artigo', () => {
    cy.visit('https://blog.agibank.com.br/?s=cart%C3%A3o')

    cy.get('article, .post, .ast-article-post')
      .first()
      .should('be.visible')
      .click()

    cy.get('h1')
      .should('be.visible')
  })

  it('deve exibir página de busca para termo inexistente', () => {
    cy.visit('https://blog.agibank.com.br/?s=xyz123teste')

    cy.get('body')
      .should('contain.text', 'xyz123teste')
  })
})