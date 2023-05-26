class CategoryPage {

    navigateToCategory(){

        cy.contains('Category').click({force : true})
    }

    verifyCategoryText(){
        return cy.get(".text-lg.leading-8.font-normal.tracking-tight.text-gray-900")
    }

    verifyCategoryHeaderText(){
        return cy.get('.font-medium > .text-gray-500')
    }

    clickAddCategoryButton(){
        cy.get('.font-medium > .font-bold').click()
    }

    verifyAddNewCategoryText(){
        return cy.get('.leading-8')
    }

    enterCategoryName(text){
        cy.get('[name="name"]').clear().type(text)
    }

    enterCategoryCode(text){
        cy.get('[name="code"]').clear().type(text)
    }

    enterCategoryDetails(text){
        cy.get('[name="details"]').clear().type(text)
    }

    clickSubmitButton(){
        cy.get('.py-1 > .py-2').click()
    }

    searchCategory(text){
        cy.get('.global-filter > .flex > .rounded-md').clear().type(text)
    }

    editCategory(){
        cy.get('.bg-gray-50 > :nth-child(4)').first().click() 
    }

    clickUpdateButton(){
        cy.get('.py-1 > .py-2').click()
    }

    clickShowItemsButton(){
        cy.get('.items-center > :nth-child(1) > .flex > .w-full').select(0)
        
    }

    verifyShowingCount(){
        return cy.get(':nth-child(2) > .px-1')
    }

    clickForwardPagination(){
        cy.get('.z-0 > :nth-child(3)').click()
    }

    clickBackwardPagination(){
        cy.get('.z-0 > :nth-child(2)').click()
    }


  
}

module.exports = CategoryPage