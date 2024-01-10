describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rocketseat.com.br')
    cy.contains('Quero assinar agora', {
      matchCase: false,
    }).click()
  })
})
