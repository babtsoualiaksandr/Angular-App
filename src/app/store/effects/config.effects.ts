import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ConfigService } from 'src/app/services/config.service';
import { GetConfig, EConfigActions, GetConfigSuccess } from '../actions/config.actions';
import { switchMap } from 'rxjs/operators';
import { IConfig } from '../models/iconfig';
import { of, Observable } from 'rxjs';

@Injectable()
export class ConfigEffects {

  @Effect()
  public getConfig$: Observable<GetConfigSuccess> = this.actions$.pipe(
    ofType<GetConfig>(EConfigActions.GetConfig),
    switchMap(() => this.configService.getConfig()),
    switchMap((config: IConfig) => of(new GetConfigSuccess(config))),
  );
  constructor(private actions$: Actions, private configService: ConfigService) {}
}
