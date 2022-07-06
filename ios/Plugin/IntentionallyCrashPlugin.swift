import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(IntentionallyCrashPlugin)
public class IntentionallyCrashPlugin: CAPPlugin {
    @objc func crash(_ call: CAPPluginCall) {
        let a = [0]
        var _ = a[1]
        call.resolve()
    }
}
