/**
 * AreYouReady
 * =============================================================================
 */

export interface IAyrArguments {
  port?: number;
}

export default class AreYouReady {
  constructor (args?: IAyrArguments);
  signalLive (state: boolean): this;
  signalReady (state: boolean): this;
}