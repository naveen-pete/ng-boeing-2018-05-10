import * as express from 'express';
import { Application } from 'express';
import { readAllLessons } from './read-all-lessons.route';
import { addPushSubscriber } from './add-push-subscriber.route';
import { sendNewsletter } from './send-newsletter.route';
const bodyParser = require('body-parser');

const webpush = require('web-push');

const vapidKeys = {
  publicKey:
    'BJmV_yaWGnalYao1-KbbyUat9l7919V-gidTjVj4z8OhtZqCh3RcpAJRakhbN8U4FKD2eqlnc8F-caR3XNzmeWc',
  privateKey: 'xX8LTPfjKewXQEzQNjQHRW0X9oIS5WNI2AUrZnY0Jyk'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const app: Application = express();

app.use(bodyParser.json());

// REST API
app.route('/api/lessons').get(readAllLessons);

app.route('/api/notifications').post(addPushSubscriber);

app.route('/api/newsletter').post(sendNewsletter);

// launch an HTTP Server
const httpServer = app.listen(9000, () => {
  console.log(
    'HTTP Server running at http://localhost:' + httpServer.address().port
  );
});
