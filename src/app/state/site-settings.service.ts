import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface SiteSettings {
  title: string;
  favicon: string;
  logo?: string;
  phone?: string;
  email?: string;
  address?: string;
  facebook?: string;
  twitter?: string;
  copyright?: string;
}

@Injectable({ providedIn: 'root' })
export class SiteSettingsService {
  private settingsSubject = new BehaviorSubject<SiteSettings>({
    title: 'Nac Tax Center',
    favicon: 'favicon.ico',
  });
  settings$ = this.settingsSubject.asObservable();

  constructor(private http: HttpClient) {}

  updateSettings(settings: Partial<SiteSettings>) {
    this.settingsSubject.next({ ...this.settingsSubject.value, ...settings });
  }

  fetchSettings() {
    this.http
      .get<any>('http://202.10.41.215/api/site-settings')
      .subscribe((res) => {
        if (res.success && res.data) {
          this.settingsSubject.next({
            ...this.settingsSubject.value,
            ...res.data,
          });
        }
      });
  }
}
