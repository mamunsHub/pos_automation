import CategoryPage from "../pages/CategoryPage"

const categorypage = new CategoryPage()


describe('Category Page Tests', () => {

    beforeEach(() => {
        cy.visit('/baseUrl')
    })

    it('Verify if Category page is displayed successfully', () => {

        //Using cypress custom login command
        cy.login()

        //Navigate to Categories page
        categorypage.navigateToCategory()
    
    
        // Title and Page verification
        cy.title().should("eq", "Categories")
        categorypage.verifyCategoryText().should("contain.text", "Product Category")
        categorypage.verifyCategoryHeaderText().should("contain.text", "Manage Your Products Categories")

    })

    it('Verify if a new category can be added', () => {

        cy.fixture('categories.json').then((categories) => {

            const category = categories[0] 

            //Using cypress custom login command
            cy.login()

            //Navigate to Categories page
            categorypage.navigateToCategory()
            cy.wait(1000)

            // Click to add new product
            categorypage.clickAddCategoryButton()
            cy.wait(1000)

            //Fill up all the fields and submit
            categorypage.enterCategoryName(category.name)
            categorypage.enterCategoryCode(category.code)
            categorypage.enterCategoryDetails(category.details)
            categorypage.clickSubmitButton()

            // Verify that confirmation messge is displayed
            cy.contains('Category created successfully!').should('be.visible')            

        })
        

        
    })



    it('Verify if a category can be searched by its name from the list', () => {
        
        cy.fixture('categories.json').then((categories) => {

            const categoryName = categories[0].name


            //Using cypress custom login command
            cy.login()

            //Navigate to Categories page
            categorypage.navigateToCategory()
            cy.wait(1000)

            // Verify if category can be searched by its name
            categorypage.searchCategory(categoryName)
            cy.contains(categoryName).should('be.visible')


        })
        
    })

    it('Verify if a newly added category can be updated', () => {

        /* 
            - Go to category page
            - Search the category by its name
            - Update the category name, code and details and the verify
        */
        
        cy.fixture('categories.json').then((categories) => {

            const categoryName = categories[0].name
            const updateCategory = categories[1]


            //Using cypress custom login command
            cy.login()

            //Navigate to Categories page
            categorypage.navigateToCategory()
            cy.wait(1000)

            // Search the category by its name
            categorypage.searchCategory(categoryName)

            // Update and verify
            categorypage.editCategory()
            categorypage.enterCategoryName(updateCategory.name)
            categorypage.enterCategoryCode(updateCategory.code)
            categorypage.enterCategoryDetails(updateCategory.details)
            categorypage.clickUpdateButton()

            categorypage.searchCategory(categoryName)
            cy.contains(updateCategory.name).should('be.visible')

            // Verify that confirmation messge is displayed
            cy.contains('Category updated successfully!').should('be.visible')            
        


        })
    })


    it('Verify if category list table can be updated', () => {

        /* 
        - Go to category page
        - Select Show - 5 items
        - Check if 5 items are displayed in the list
        */
        
        // Using cypress custom login command
        cy.login()

        //Navigate to Categories page
        categorypage.navigateToCategory()
        cy.wait(1000)

        // Select and verify if 5 items are displayed now
        categorypage.clickShowItemsButton()
        categorypage.verifyShowingCount().contains('1 ~ 5')


        
    })

    it('Verify if pagination of category list page works properly', () => {

        /* 
        - Go to category page
        - Select Show - 5 items
        - Go to next page and verify
        - Get back to previous page and verify
        */
        
        //Using cypress custom login command
        cy.login()

        //Navigate to Categories page
       categorypage.navigateToCategory()
       cy.wait(1000)

        // Select and verify if 5 items are displayed now
        categorypage.clickShowItemsButton()
        categorypage.verifyShowingCount().contains('1 ~ 5')

       // Navigate to next page and verify the list
       categorypage.clickForwardPagination()
       categorypage.verifyShowingCount().contains('6 ~ 10')


       // Get back to previous page and verify the list
       categorypage.clickBackwardPagination()
       categorypage.verifyShowingCount().contains('1 ~ 5')

        
    })


})