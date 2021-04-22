export interface User {
  _id:          string;
  id:           string;
  age:          string;
  email:        string;
  phone:        string;
  password:     string;
  messages:     [];
  groups:       [];
  threads:      [];
  address:      string;
  state:        string;
  country:      string;
  username:     string;
  createdAt:    Date;
  createdBy:    any;
  updatedAt:    Date;
  updatedBy:    Date;
  isActivated:  boolean;
  profileImage: string;
  isFollowing:  [];
  isFollowed:   [];
}

export class User {
  _id:          string;
  id:           string;
  age:          string;
  email:        string;
  phone:        string;
  password:     string;
  messages:     [];
  groups:       [];
  threads:      [];
  address:      string;
  state:        string;
  country:      string;
  username:     string;
  createdAt:    Date;
  createdBy:    any;
  updatedAt:    Date;
  updatedBy:    Date;
  isActivated:  boolean;
  profileImage: string;
  isFollowing:  [];
  isFollowed:   [];

  constructor(fields: any){
    for ( const f of fields){
      this[f] = fields[f];
    }
  }
}
