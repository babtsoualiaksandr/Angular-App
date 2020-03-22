import { Injectable } from '@angular/core';
import { IConfig } from '../store/models/iconfig';
import { Observable, of } from 'rxjs';

const config: IConfig = {
  adminName: 'Sasha',
  permissions: 'Yes'
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
 public  getConfig(): Observable<IConfig> {
   console.log('configServises');
   return of(config);
  }
}
