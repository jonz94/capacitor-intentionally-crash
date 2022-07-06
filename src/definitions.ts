export interface IntentionallyCrashPlugin {
  /**
   * Make app crash
   *
   * @since 0.0.1
   */
  crash(): Promise<void>;
}
