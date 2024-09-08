import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'champ',
    data: { pageTitle: 'hostelMgmtApp.hostelMgmtChamp.home.title' },
    loadChildren: () => import('./hostelMgmt/champ/champ.routes'),
  },
  {
    path: 'room',
    data: { pageTitle: 'hostelMgmtApp.hostelMgmtRoom.home.title' },
    loadChildren: () => import('./hostelMgmt/room/room.routes'),
  },
  {
    path: 'inventory',
    data: { pageTitle: 'hostelMgmtApp.hostelMgmtInventory.home.title' },
    loadChildren: () => import('./hostelMgmt/inventory/inventory.routes'),
  },
  {
    path: 'payment',
    data: { pageTitle: 'hostelMgmtApp.hostelMgmtPayment.home.title' },
    loadChildren: () => import('./hostelMgmt/payment/payment.routes'),
  },
  {
    path: 'document',
    data: { pageTitle: 'hostelMgmtApp.hostelMgmtDocument.home.title' },
    loadChildren: () => import('./hostelMgmt/document/document.routes'),
  },
  {
    path: 'hostel',
    data: { pageTitle: 'hostelMgmtApp.hostelMgmtHostel.home.title' },
    loadChildren: () => import('./hostelMgmt/hostel/hostel.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
