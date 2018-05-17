import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services/lessons.service';
import { Observable } from 'rxjs/Observable';
import { Lesson } from '../model/lesson';
import { SwPush } from '@angular/service-worker';
import { NewsletterService } from '../services/newsletter.service';

@Component({
  selector: 'lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  lessons$: Observable<Lesson[]>;
  isLoggedIn$: Observable<boolean>;
  sub: PushSubscription;

  readonly VAPID_PUBLIC_KEY = 'BJmV_yaWGnalYao1-KbbyUat9l7919V-gidTjVj4z8OhtZqCh3RcpAJRakhbN8U4FKD2eqlnc8F-caR3XNzmeWc';

  constructor(
    private lessonsService: LessonsService,
    private swPush: SwPush,
    private newsletterService: NewsletterService
  ) {}

  ngOnInit() {
    this.loadLessons();
  }

  loadLessons() {
    this.lessons$ = this.lessonsService
      .loadAllLessons()
      .catch(err => Observable.of([]));
  }

  subscribeToNotifications() {
    this.swPush
      .requestSubscription({ serverPublicKey: this.VAPID_PUBLIC_KEY })
      .then(sub => {
        console.log('Notification subscription:', sub);

        this.sub = sub;

        this.newsletterService
          .addPushSubscriber(sub)
          .subscribe(
            response =>
              console.log(
                'Sent push subscription object to server. Response:',
                response
              ),
            error =>
              console.log(
                'Could not send subsription object to server. Error:',
                error
              )
          );
      })
      .catch(err => console.log('Could not subscribe to notifications.', err));
  }

  sendNewsletter() {
    console.log('Sending Newsletter to all subscribers.');
    this.newsletterService.send().subscribe();
  }
}
