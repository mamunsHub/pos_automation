class CategoryPage {

    getCategory(){

        //return cy.get('.p-5 > .p-2 > :nth-child(1) > :nth-child(1) > .px-3 > :nth-child(3) > .flex').click()
        return cy.contains('Category').click({force : true})
    }

    getCategoryText(){
        return cy.get(".text-lg.leading-8.font-normal.tracking-tight.text-gray-900")
    }

    getCategoryHeaderText(){
        return cy.get('.font-medium > .text-gray-500')
    }

    getAddCategoryButton(){
        return cy.get('.font-medium > .font-bold').click()
    }

    getAddNewCategoryText(){
        return cy.get('.leading-8')
    }

    getCategoryName(text){
        return cy.get('[name="name"]').clear().type(text)
    }

    getCategoryCode(text){
        return cy.get('[name="code"]').clear().type(text)
    }

    getCategoryDetails(text){
        return cy.get('[name="details"]').clear().type(text)
    }

    getSubmitButton(){
        return cy.get('.py-1 > .py-2').click()
    }

    getSearchField(text){
        return cy.get('.global-filter > .flex > .rounded-md').clear().type(text)
    }

    getEditButton(){
        return cy.get('.bg-gray-50 > :nth-child(4)').first().click() 
    }

    getUpdateButton(){
        return cy.get('.py-1 > .py-2').click()
    }

    getShowItemsButton(){
        return cy.get('.items-center > :nth-child(1) > .flex > .w-full')
        
    }

    getShowingCount(){
        return cy.get(':nth-child(2) > .px-1')
    }

    getForwardPagination(){
        return cy.get('.z-0 > :nth-child(3)').click()
    }

    getBackwardPagination(){
        return cy.get('.z-0 > :nth-child(2)').click()
    }


  
}

module.exports = CategoryPage