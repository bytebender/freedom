import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirebaseAppModule, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService, AnalyticsModule } from '@angular/fire/analytics';
import { provideAuth,getAuth, AuthModule } from '@angular/fire/auth';
import { provideFirestore,getFirestore, FirestoreModule } from '@angular/fire/firestore';
import { provideFunctions,getFunctions, FunctionsModule } from '@angular/fire/functions';
import { provideMessaging,getMessaging, MessagingModule } from '@angular/fire/messaging';
import { provideRemoteConfig,getRemoteConfig, RemoteConfigModule } from '@angular/fire/remote-config';
import { provideStorage,getStorage, StorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
  ],
  exports: [
    FirebaseAppModule,
    AnalyticsModule,
    AuthModule,
    FirestoreModule,
    FunctionsModule,
    MessagingModule,
    RemoteConfigModule,
    StorageModule,
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
  ],
})
export class FirebaseModule { }
