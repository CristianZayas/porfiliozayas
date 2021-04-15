import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Interfaces from models
import {IExperience} from '../models/experience';
import {IProject} from '../models/project';
import {ISkillset} from '../models/skillset';
import {IJsonToken } from '../models/jsontoken';
import {IUser} from '../models/user';

import {tap} from 'rxjs/operators';
import {Observable , BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  AUTH_SERVER: string = 'http://localhost:3001';
  private token : string;
  constructor(private httpClient: HttpClient) {}

  register(user: IUser): Observable<IJsonToken> {
     return  // this.httpClient.post<IUser>()
  }
}

