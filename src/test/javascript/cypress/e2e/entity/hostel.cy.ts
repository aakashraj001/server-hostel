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

describe('Hostel e2e test', () => {
  const hostelPageUrl = '/hostelmgmt/hostel';
  const hostelPageUrlPattern = new RegExp('/hostelmgmt/hostel(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const hostelSample = {};

  let hostel;

  beforeEach(() => {
    cy.login(username, password);
  });

  beforeEach(() => {
    cy.intercept('GET', '/services/hostelmgmt/api/hostels+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/services/hostelmgmt/api/hostels').as('postEntityRequest');
    cy.intercept('DELETE', '/services/hostelmgmt/api/hostels/*').as('deleteEntityRequest');
  });

  afterEach(() => {
    if (hostel) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/services/hostelmgmt/api/hostels/${hostel.id}`,
      }).then(() => {
        hostel = undefined;
      });
    }
  });

  it('Hostels menu should load Hostels page', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('hostelmgmt/hostel');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('Hostel').should('exist');
    cy.url().should('match', hostelPageUrlPattern);
  });

  describe('Hostel page', () => {
    describe('create button click', () => {
      beforeEach(() => {
        cy.visit(hostelPageUrl);
        cy.wait('@entitiesRequest');
      });

      it('should load create Hostel page', () => {
        cy.get(entityCreateButtonSelector).click();
        cy.url().should('match', new RegExp('/hostelmgmt/hostel/new$'));
        cy.getEntityCreateUpdateHeading('Hostel');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', hostelPageUrlPattern);
      });
    });

    describe('with existing value', () => {
      beforeEach(() => {
        cy.authenticatedRequest({
          method: 'POST',
          url: '/services/hostelmgmt/api/hostels',
          body: hostelSample,
        }).then(({ body }) => {
          hostel = body;

          cy.intercept(
            {
              method: 'GET',
              url: '/services/hostelmgmt/api/hostels+(?*|)',
              times: 1,
            },
            {
              statusCode: 200,
              body: [hostel],
            },
          ).as('entitiesRequestInternal');
        });

        cy.visit(hostelPageUrl);

        cy.wait('@entitiesRequestInternal');
      });

      it('detail button click should load details Hostel page', () => {
        cy.get(entityDetailsButtonSelector).first().click();
        cy.getEntityDetailsHeading('hostel');
        cy.get(entityDetailsBackButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', hostelPageUrlPattern);
      });

      it('edit button click should load edit Hostel page and go back', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Hostel');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', hostelPageUrlPattern);
      });

      it('edit button click should load edit Hostel page and save', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Hostel');
        cy.get(entityCreateSaveButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', hostelPageUrlPattern);
      });

      it('last delete button click should delete instance of Hostel', () => {
        cy.get(entityDeleteButtonSelector).last().click();
        cy.getEntityDeleteDialogHeading('hostel').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click();
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', hostelPageUrlPattern);

        hostel = undefined;
      });
    });
  });

  describe('new Hostel page', () => {
    beforeEach(() => {
      cy.visit(`${hostelPageUrl}`);
      cy.get(entityCreateButtonSelector).click();
      cy.getEntityCreateUpdateHeading('Hostel');
    });

    it('should create an instance of Hostel', () => {
      cy.get(`[data-cy="name"]`).type('why mask bless');
      cy.get(`[data-cy="name"]`).should('have.value', 'why mask bless');

      cy.get(`[data-cy="address"]`).type('../fake-data/blob/hipster.txt');
      cy.get(`[data-cy="address"]`).invoke('val').should('match', new RegExp('../fake-data/blob/hipster.txt'));

      cy.get(`[data-cy="capacity"]`).type('18810');
      cy.get(`[data-cy="capacity"]`).should('have.value', '18810');

      cy.get(`[data-cy="noOfRooms"]`).type('23179');
      cy.get(`[data-cy="noOfRooms"]`).should('have.value', '23179');

      cy.get(`[data-cy="floors"]`).type('29217');
      cy.get(`[data-cy="floors"]`).should('have.value', '29217');

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@postEntityRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(201);
        hostel = response.body;
      });
      cy.wait('@entitiesRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(200);
      });
      cy.url().should('match', hostelPageUrlPattern);
    });
  });
});
