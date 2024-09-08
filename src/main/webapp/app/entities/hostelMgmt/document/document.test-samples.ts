import { IDocument, NewDocument } from './document.model';

export const sampleWithRequiredData: IDocument = {
  id: 13692,
};

export const sampleWithPartialData: IDocument = {
  id: 17659,
  type: 'so to notwithstanding',
  content: '../fake-data/blob/hipster.png',
  contentContentType: 'unknown',
};

export const sampleWithFullData: IDocument = {
  id: 11762,
  type: 'hotel carry',
  content: '../fake-data/blob/hipster.png',
  contentContentType: 'unknown',
};

export const sampleWithNewData: NewDocument = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
