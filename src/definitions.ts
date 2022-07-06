export interface IntentionallyCrashPlugin {
  crash(): Promise<void>;
}
