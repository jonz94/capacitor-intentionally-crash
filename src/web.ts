import { WebPlugin } from '@capacitor/core';

import type { IntentionallyCrashPlugin } from './definitions';

export class IntentionallyCrashWeb extends WebPlugin implements IntentionallyCrashPlugin {
  async crash(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
}
