# vGrid's AreYouReady Module

This is a *very* simple module to include in your node projects to provide HTTP Readiness/Liveness checks to clusters (such as Kubernetes) or load-balancers (nginx/haproxy/etc)

We found other great projects that provided similar functionality, but way too much bloat for our use case - so we wrote this!

## Install
```shell
npm install --save @vgrid/areyouready
```

## Usage

```typescript
import AreYouReady from '@vgrid/areyouready';
const ayr = new AreYouReady({ port: 9999 }); // 9999 is default if none supplied

// Do your application logic
// .....

ayr.signalReady(true); // Signal that the app is ready
ayr.signalLive(true); // Signal that the app is now live

// Some while later
// .....
ayr.signalLive(false); // Signal that the app is NOT live
ayr.signalReady(false); // Signal that the app is NOT ready
```

Set up your cluster / load-balancers to check the following URLs:

`http://service:9999/live` and `http://service:9999/ready`

## API

Only two methods exist, `signalLive` and `signalReady` which independently toggle the ready and live states:

```typescript
signalLive (state: boolean): void;
signalReady (state: boolean): void;
```

The app will respond with one of the following response codes:

* live/ready: 200 - 'OK'
* not live / not ready: 500 - 'NOT_LIVE' / 'NOT_READY'
* other url: 404 - 'UNKNOWN'

## Contributing

Any contributions are more than welcome!