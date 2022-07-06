import { registerPlugin } from '@capacitor/core';

import type { IntentionallyCrashPlugin } from './definitions';

const IntentionallyCrash = registerPlugin<IntentionallyCrashPlugin>('IntentionallyCrash', {
  web: () => import('./web').then((m) => new m.IntentionallyCrashWeb()),
});

export * from './definitions';
export { IntentionallyCrash };
