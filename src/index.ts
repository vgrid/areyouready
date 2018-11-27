import { createServer, Server, IncomingMessage, ServerResponse } from 'http';

const DEFAULT_PORT: number = 9999;
const LIVE_URL: string = '/live';
const READY_URL: string = '/ready';

export interface IAyrArguments {
  port?: number;
}

export default class AreYouReady {

  // Feel free to override these as you please
  liveUrl: string = LIVE_URL;
  readyUrl: string = READY_URL;

  private server: Server;
  private live: boolean = false;
  private ready: boolean = false;

  /**
   *
   * @param args
   */
  constructor (args?: IAyrArguments) {
    this.server = createServer(this.requestHandler.bind(this));

    args = args || {};

    this.server.listen(args.port || DEFAULT_PORT);
  }

  signalLive (state: boolean): void {
    this.live = !!state;
  }

  signalReady (state: boolean): void {
    this.ready = !!state;
  }

  /**
   *
   * @param req
   * @param res
   */
  private requestHandler (req: IncomingMessage, res: ServerResponse): void {
    let url = req.url || '';

    if (url.includes(this.liveUrl)) {
      res.statusCode = this.live ? 200 : 500;
      return res.end(this.live ? 'OK' : 'NOT_LIVE');
    }
    
    if (url.includes(this.readyUrl)) {
      res.statusCode = this.ready ? 200 : 500;
      return res.end(this.ready ? 'OK' : 'NOT_READY');
    }

    res.statusCode = 404;
    return res.end('UNKNOWN');

  }
}
