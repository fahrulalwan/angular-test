export interface Datasource {
  ticketId: string;
  ticketName: string;
  reporter: string;
  createDate: string;
  status: string;
  activity: string;
  productStream: string;
  action: string;
}

export type Filter = 'ticketName' | 'reporter' | 'createDate' | 'status';

export enum FilterBy {
  TICKET_NAME = 'ticketName',
  REPORTER = 'reporter',
  CREATE_DATE = 'createDate',
  STATUS = 'status',
}
