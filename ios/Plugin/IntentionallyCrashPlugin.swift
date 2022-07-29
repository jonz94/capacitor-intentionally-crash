import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(IntentionallyCrashPlugin)
public class IntentionallyCrashPlugin: CAPPlugin {
    @objc public func crash() {
        fatalError()
    }
}
