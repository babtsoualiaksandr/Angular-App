import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { selectConfig } from './store/selectors/config.selectors';
import { IConfig } from './store/models/iconfig';
import { Observable } from 'rxjs';
import { GetConfig } from './store/actions/config.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'appRedux';

  public config$: Observable<IConfig> = this.store.pipe(select(selectConfig));

  constructor(private store: Store<IAppState>) {

  }

  public ngOnInit(): void {
    this.store.dispatch(new GetConfig());
  }
}
