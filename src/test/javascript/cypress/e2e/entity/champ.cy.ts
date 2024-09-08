import {
  entityTableSelector,
  entityDetailsButtonSelector,
  entityDetailsBackButtonSelector,
  entityCreateButtonSelector,
  entityCreateSaveButtonSelector,
  entityCreateCancelButtonSelector,
  entityEditButtonSelector,
  entityDeleteButtonSelector,
  entityConfirmDeleteButtonSelector,
} from '../../support/entity';

describe('Champ e2e test', () => {
  const champPageUrl = '/hostelmgmt/champ';
  const champPageUrlPattern = new RegExp('/hostelmgmt/champ(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const champSample = {};

  let champ;

  beforeEach(() => {
    cy.login(username, password);
  });

  beforeEach(() => {
    cy.intercept('GET', '/services/hostelmgmt/api/champs+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/services/hostelmgmt/api/champs').as('postEntityRequest');
    cy.intercept('DELETE', '/services/hostelmgmt/api/champs/*').as('deleteEntityRequest');
  });

  afterEach(() => {
    if (champ) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/services/hostelmgmt/api/champs/${champ.id}`,
      }).then(() => {
        champ = undefined;
      });
    }
  });

  it('Champs menu should load Champs page', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('hostelmgmt/champ');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('Champ').should('exist');
    cy.url().should('match', champPageUrlPattern);
  });

  describe('Champ page', () => {
    describe('create button click', () => {
      beforeEach(() => {
        cy.visit(champPageUrl);
        cy.wait('@entitiesRequest');
      });

      it('should load create Champ page', () => {
        cy.get(entityCreateButtonSelector).click();
        cy.url().should('match', new RegExp('/hostelmgmt/champ/new$'));
        cy.getEntityCreateUpdateHeading('Champ');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', champPageUrlPattern);
      });
    });

    describe('with existing value', () => {
      beforeEach(() => {
        cy.authenticatedRequest({
          method: 'POST',
          url: '/services/hostelmgmt/api/champs',
          body: champSample,
        }).then(({ body }) => {
          champ = body;

          cy.intercept(
            {
              method: 'GET',
              url: '/services/hostelmgmt/api/champs+(?*|)',
              times: 1,
            },
            {
              statusCode: 200,
              body: [champ],
            },
          ).as('entitiesRequestInternal');
        });

        cy.visit(champPageUrl);

        cy.wait('@entitiesRequestInternal');
      });

      it('detail button click should load details Champ page', () => {
        cy.get(entityDetailsButtonSelector).first().click();
        cy.getEntityDetailsHeading('champ');
        cy.get(entityDetailsBackButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', champPageUrlPattern);
      });

      it('edit button click should load edit Champ page and go back', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Champ');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', champPageUrlPattern);
      });

      it('edit button click should load edit Champ page and save', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Champ');
        cy.get(entityCreateSaveButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', champPageUrlPattern);
      });

      it('last delete button click should delete instance of Champ', () => {
        cy.get(entityDeleteButtonSelector).last().click();
        cy.getEntityDeleteDialogHeading('champ').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click();
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', champPageUrlPattern);

        champ = undefined;
      });
    });
  });

  describe('new Champ page', () => {
    beforeEach(() => {
      cy.visit(`${champPageUrl}`);
      cy.get(entityCreateButtonSelector).click();
      cy.getEntityCreateUpdateHeading('Champ');
    });

    it('should create an instance of Champ', () => {
      cy.get(`[data-cy="name"]`).type('rationalize');
      cy.get(`[data-cy="name"]`).should('have.value', 'rationalize');

      cy.get(`[data-cy="login"]`).type('stencil once');
      cy.get(`[data-cy="login"]`).should('have.value', 'stencil once');

      cy.get(`[data-cy="password"]`).type('underneath anenst');
      cy.get(`[data-cy="password"]`).should('have.value', 'underneath anenst');

      cy.get(`[data-cy="type"]`).select('WORKING_PROFESSIONAL');

      cy.get(`[data-cy="status"]`).select('FAILED');

      cy.get(`[data-cy="address"]`).type('../fake-data/blob/hipster.txt');
      cy.get(`[data-cy="address"]`).invoke('val').should('match', new RegExp('../fake-data/blob/hipster.txt'));

      cy.get(`[data-cy="mobileNo"]`).type('26271');
      cy.get(`[data-cy="mobileNo"]`).should('have.value', '26271');

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@postEntityRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(201);
        champ = response.body;
      });
      cy.wait('@entitiesRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(200);
      });
      cy.url().should('match', champPageUrlPattern);
    });
  });
});
