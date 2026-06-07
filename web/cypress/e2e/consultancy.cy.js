import consultancyData from '../fixtures/consultancy.json'

// Cyopress.Commands.add('fillConsultancyForm', ()=>{

// })

describe('Formulario de Consultoria', ()=>{

    // before(()=>{
    //     cy.log('Isso acontece antes de todos os testes uma unica vez')
    // })

    beforeEach(()=>{
        // cy.start()
        // cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.login()

        cy.goTo ('Formulários', 'Consultoria')

        // cy.fixture('consultancy').as('consultancyData')
    })

    it('Deve Solicitar consultoria individual', ()=>{

        const consultancyForm = consultancyData.personal

    //     const consultancyForm = {
    //         name: 'Fernando Papito',
    //         email: 'papito@teste.com.br',
    //         phone: '11 99999-1000',
    //         consultancyType: 'Individual',
    //         personType: 'cpf',
    //         document: '20730949028',
    //         discoveryChannels : [
    //         'Instagram',
    //         'LinkedIn',
    //         'Udemy',
    //         'YouTube',
    //         'Indicação de Amigo'
    //     ],
    //     file: './cypress/fixtures/document.pdf',
    //     description: 'Lorem ipsum dolor sit amet',
    //     techs : [
    //         'Cypress',
    //         'Selenium',
    //         'WebDriverIO',
    //         'Playwright',
    //         'Robot Framework'
    //     ],
    //     terms: true
    // }

        // cy.goTo('Integração', 'Consulta de CEP')
        // cy.get('#name').type('Fernando Papito')
        cy.get('input[placeholder="Digite seu nome completo"]').type(consultancyForm.name)
        cy.get('input[placeholder="Digite seu email"]').type(consultancyForm.email)
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type(consultancyForm.phone)
            //.should('have.value', '(11) 99999-1000')

        // cy.get('#consultancyType').select('In Company')  (texto)
        // cy.get('#consultancyType').select('inCompany') 
        // X-path: //label[text()="Tipo de Consultoria"]/..//select
        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select(consultancyForm.consultancyType)

            //x-path: //span[text()="Pessoa Física"]/..//input
        //Option 01
        // cy.contains('span', 'Pessoa Física')
        //     .parent()
        //     .find('input')
        //     .click()
       
        //Option 02:
        if(consultancyForm.personType === 'cpf'){
            cy.contains('label', 'Pessoa Física')
            .find('input[type=radio')
            .click()
            .should('be.checked')

            cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')
        }
        if (consultancyForm.personType === 'cnpj'){
            cy.contains('label','Pessoa Jurídica' )            
            .find('input')
            .click()
            .should('be.checked')

            cy.contains('label', 'Pessoa Física')
            .find('input')
            .should('be.not.checked')
        }

        //Option 01
        // cy.get('input[placeholder="000.000.000-00"]')
        //     .type('20730949028')
        //     .should('have.value', '207.309.490-28')
        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type(consultancyForm.document)
            // .should('have.value', '207.309.490-28')

        // const discoveryChannels = [
        //     'Instagram',
        //     'LinkedIn',
        //     'Udemy',
        //     'YouTube',
        //     'Indicação de Amigo'
        // ]

        consultancyForm.discoveryChannels.forEach((channel)=>{
        cy.contains('label', channel)
            .find('input')
            .check()
            .should('be.checked')
        })

        cy.get('input[type="file"]')
            .selectFile(consultancyForm.file, {force: true})

        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type(consultancyForm.description)

        // const techs = [
        //     'Cypress',
        //     'Selenium',
        //     'WebDriverIO',
        //     'Playwright',
        //     'Robot Framework'
        // ]

        consultancyForm.techs.forEach((tech)=>{
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')
        })

        if(consultancyForm.terms === true){
             cy.contains('label', 'termos de uso')
            .find('input')
            .check()
        }


        cy.contains('button', 'Enviar formulário')
            .click()   

        cy.get('.modal', {timeout:7000})
            .should('be.visible')
            .find('.modal-content')
            .should('be.visible')
            .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
            
        // cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
        //     .should('be.visible')


    })

    it('Deve Solicitar consultoria In Company', ()=>{

        const consultancyForm = consultancyData.company

    //     const consultancyForm = {
    //         name: 'Fernando Papito',
    //         email: 'papito@teste.com.br',
    //         phone: '11 99999-1000',
    //         consultancyType: 'In Company',
    //         personType: 'cnpj',
    //         document: '21.193.328/0001-41',
    //         discoveryChannels : [
    //             'LinkedIn'
    //         ],
    //         file: './cypress/fixtures/document.pdf',
    //         description: 'Lorem ipsum dolor sit amet',
    //         techs : [
    //             'Cypress'
    //         ],
    //         terms: true
    // }

        // cy.goTo('Integração', 'Consulta de CEP')
        // cy.get('#name').type('Fernando Papito')
        cy.get('input[placeholder="Digite seu nome completo"]').type(consultancyForm.name)
        cy.get('input[placeholder="Digite seu email"]').type(consultancyForm.email)
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type(consultancyForm.phone)
            //.should('have.value', '(11) 99999-1000')

        // cy.get('#consultancyType').select('In Company')  (texto)
        // cy.get('#consultancyType').select('inCompany') 
        // X-path: //label[text()="Tipo de Consultoria"]/..//select
        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select(consultancyForm.consultancyType)

            //x-path: //span[text()="Pessoa Física"]/..//input
        //Option 01
        // cy.contains('span', 'Pessoa Física')
        //     .parent()
        //     .find('input')
        //     .click()
       
        //Option 02:
        if(consultancyForm.personType === 'cpf'){
            cy.contains('label', 'Pessoa Física')
            .find('input[type=radio')
            .click()
            .should('be.checked')

            cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')
        }
        if (consultancyForm.personType === 'cnpj'){
            cy.contains('label','Pessoa Jurídica' )            
            .find('input')
            .click()
            .should('be.checked')

            cy.contains('label', 'Pessoa Física')
            .find('input')
            .should('be.not.checked')
        }

        //Option 01
        // cy.get('input[placeholder="000.000.000-00"]')
        //     .type('20730949028')
        //     .should('have.value', '207.309.490-28')
        cy.contains('label', 'CNPJ')
            .parent()
            .find('input')
            .type(consultancyForm.document)
            // .should('have.value', '207.309.490-28')

        // const discoveryChannels = [
        //     'Instagram',
        //     'LinkedIn',
        //     'Udemy',
        //     'YouTube',
        //     'Indicação de Amigo'
        // ]

        consultancyForm.discoveryChannels.forEach((channel)=>{
        cy.contains('label', channel)
            .find('input')
            .check()
            .should('be.checked')
        })

        cy.get('input[type="file"]')
            .selectFile(consultancyForm.file, {force: true})

        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type(consultancyForm.description)

        // const techs = [
        //     'Cypress',
        //     'Selenium',
        //     'WebDriverIO',
        //     'Playwright',
        //     'Robot Framework'
        // ]

        consultancyForm.techs.forEach((tech)=>{
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')
        })

        if(consultancyForm.terms === true){
             cy.contains('label', 'termos de uso')
            .find('input')
            .check()
        }

        cy.contains('button', 'Enviar formulário')
            .click()   

        cy.get('.modal', {timeout:7000})
            .should('be.visible')
            .find('.modal-content')
            .should('be.visible')
            .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
            
        // cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
        //     .should('be.visible')


    })

    it('Deve verificar os campos obrigatório', ()=>{
        // cy.start()
        // cy.submitLoginForm('papito@webdojo.com', 'katana123')

        // cy.goTo ('Formulários', 'Consultoria')

        cy.contains('button', 'Enviar formulário')
            .click()

        //label[text()="Nome Completo *"]/../

        cy.contains('label', 'Nome Completo')
            .parent()
            .find('p')
            .should('be.visible')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')

        cy.contains('label', 'Email')
            .parent()
            .find('p')
            .should('be.visible')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')

        cy.contains('label', 'termos de uso')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Você precisa aceitar os termos de uso')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')

    })

    // afterEach(()=>{
    //     cy.log('Isso acontece depois de cada teste')
    // })

    // after(()=>{
    //     cy.log('Isso acontece depois de todos os testes uma unica vez')
    // })
})

