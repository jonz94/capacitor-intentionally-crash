package dev.jonz94.capacitorjs.plugins.intentionallycrash;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "IntentionallyCrash")
public class IntentionallyCrashPlugin extends Plugin {

    @PluginMethod
    public void crash(PluginCall call) {
        call.resolve();
    }
}
