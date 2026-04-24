describe('Dog API', () => {
  it('deve listar todas as raças', () => {
    cy.request('https://dog.ceo/api/breeds/list/all')
      .then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.status).to.eq('success')
      })
  })

  it('deve listar imagens de uma raça', () => {
    cy.request('https://dog.ceo/api/breed/hound/images')
      .then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.message).to.be.an('array')
      })
  })

  it('deve retornar uma imagem aleatória', () => {
    cy.request('https://dog.ceo/api/breeds/image/random')
      .then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.message).to.include('https')
      })
  })
})