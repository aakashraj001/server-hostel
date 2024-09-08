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

describe('Room e2e test', () => {
  const roomPageUrl = '/hostelmgmt/room';
  const roomPageUrlPattern = new RegExp('/hostelmgmt/room(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const roomSample = {};

  let room;

  beforeEach(() => {
    cy.login(username, password);
  });

  beforeEach(() => {
    cy.intercept('GET', '/services/hostelmgmt/api/rooms+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/services/hostelmgmt/api/rooms').as('postEntityRequest');
    cy.intercept('DELETE', '/services/hostelmgmt/api/rooms/*').as('deleteEntityRequest');
  });

  afterEach(() => {
    if (room) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/services/hostelmgmt/api/rooms/${room.id}`,
      }).then(() => {
        room = undefined;
      });
    }
  });

  it('Rooms menu should load Rooms page', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('hostelmgmt/room');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('Room').should('exist');
    cy.url().should('match', roomPageUrlPattern);
  });

  describe('Room page', () => {
    describe('create button click', () => {
      beforeEach(() => {
        cy.visit(roomPageUrl);
        cy.wait('@entitiesRequest');
      });

      it('should load create Room page', () => {
        cy.get(entityCreateButtonSelector).click();
        cy.url().should('match', new RegExp('/hostelmgmt/room/new$'));
        cy.getEntityCreateUpdateHeading('Room');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', roomPageUrlPattern);
      });
    });

    describe('with existing value', () => {
      beforeEach(() => {
        cy.authenticatedRequest({
          method: 'POST',
          url: '/services/hostelmgmt/api/rooms',
          body: roomSample,
        }).then(({ body }) => {
          room = body;

          cy.intercept(
            {
              method: 'GET',
              url: '/services/hostelmgmt/api/rooms+(?*|)',
              times: 1,
            },
            {
              statusCode: 200,
              body: [room],
            },
          ).as('entitiesRequestInternal');
        });

        cy.visit(roomPageUrl);

        cy.wait('@entitiesRequestInternal');
      });

      it('detail button click should load details Room page', () => {
        cy.get(entityDetailsButtonSelector).first().click();
        cy.getEntityDetailsHeading('room');
        cy.get(entityDetailsBackButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', roomPageUrlPattern);
      });

      it('edit button click should load edit Room page and go back', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Room');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', roomPageUrlPattern);
      });

      it('edit button click should load edit Room page and save', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('Room');
        cy.get(entityCreateSaveButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', roomPageUrlPattern);
      });

      it('last delete button click should delete instance of Room', () => {
        cy.get(entityDeleteButtonSelector).last().click();
        cy.getEntityDeleteDialogHeading('room').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click();
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', roomPageUrlPattern);

        room = undefined;
      });
    });
  });

  describe('new Room page', () => {
    beforeEach(() => {
      cy.visit(`${roomPageUrl}`);
      cy.get(entityCreateButtonSelector).click();
      cy.getEntityCreateUpdateHeading('Room');
    });

    it('should create an instance of Room', () => {
      cy.get(`[data-cy="roomNo"]`).type('than');
      cy.get(`[data-cy="roomNo"]`).should('have.value', 'than');

      cy.get(`[data-cy="type"]`).select('AC');

      cy.get(`[data-cy="cost"]`).type('16648.19');
      cy.get(`[data-cy="cost"]`).should('have.value', '16648.19');

      cy.get(`[data-cy="beds"]`).type('29209');
      cy.get(`[data-cy="beds"]`).should('have.value', '29209');

      cy.get(`[data-cy="floor"]`).type('26609');
      cy.get(`[data-cy="floor"]`).should('have.value', '26609');

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@postEntityRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(201);
        room = response.body;
      });
      cy.wait('@entitiesRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(200);
      });
      cy.url().should('match', roomPageUrlPattern);
    });
  });
});
