import { User } from './index';

export interface Message {
  _id:          string;
  id:           string;
  sender:       User;
  recipient:    User;
  isDelivered:  boolean;
  sent:         boolean;
  body:         string;
  isRead:       boolean;
  createdAt:    Date;
  createdBy:    User;
  updatedAt:    Date;
  updatedBy:    User;
}

export class Message {
  _id: string;
  id: string;
  sender: User;
  recipient: User;
  isDelivered: boolean;
  sent: boolean;
  body: string;
  isRead: boolean;
  createdAt: Date;
  createdBy: User;
  updatedAt: Date;
  updatedBy: User;

  constructor(fields: any){
    for ( const f of fields ) {
      this[f] = fields[f];
    }
  }
}
