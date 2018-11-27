/**
 * AreYouReady
 * =============================================================================
 */

export interface IAyrArguments {
  port?: number;
}

export default class AreYouReady {
  constructor (args?: IAyrArguments);
  signalLive (state: boolean): void;
  signalReady (state: boolean): void;
}