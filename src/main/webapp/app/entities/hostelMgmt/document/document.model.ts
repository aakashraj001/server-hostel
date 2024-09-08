import { IChamp } from 'app/entities/hostelMgmt/champ/champ.model';

export interface IDocument {
  id: number;
  type?: string | null;
  content?: string | null;
  contentContentType?: string | null;
  champ?: IChamp | null;
}

export type NewDocument = Omit<IDocument, 'id'> & { id: null };
