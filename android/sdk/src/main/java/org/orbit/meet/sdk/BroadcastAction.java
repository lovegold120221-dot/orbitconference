package org.orbit.meet.sdk;

import android.content.Intent;
import android.os.Bundle;

/**
 * Wraps the name and extra data for events that were broadcasted locally.
 */
public class BroadcastAction {
    private static final String TAG = BroadcastAction.class.getSimpleName();

    private final Type type;
    private final Bundle data;

    public BroadcastAction(Intent intent) {
        this.type = Type.buildTypeFromAction(intent.getAction());
        this.data = intent.getExtras();
    }

    public Type getType() {
        return this.type;
    }

    public Bundle getData() {
        return this.data;
    }

    enum Type {
        SET_AUDIO_MUTED("org.orbit.meet.SET_AUDIO_MUTED"),
        HANG_UP("org.orbit.meet.HANG_UP"),
        SEND_ENDPOINT_TEXT_MESSAGE("org.orbit.meet.SEND_ENDPOINT_TEXT_MESSAGE"),
        TOGGLE_SCREEN_SHARE("org.orbit.meet.TOGGLE_SCREEN_SHARE"),
        RETRIEVE_PARTICIPANTS_INFO("org.orbit.meet.RETRIEVE_PARTICIPANTS_INFO"),
        OPEN_CHAT("org.orbit.meet.OPEN_CHAT"),
        CLOSE_CHAT("org.orbit.meet.CLOSE_CHAT"),
        SEND_CHAT_MESSAGE("org.orbit.meet.SEND_CHAT_MESSAGE"),
        SET_VIDEO_MUTED("org.orbit.meet.SET_VIDEO_MUTED"),
        SET_CLOSED_CAPTIONS_ENABLED("org.orbit.meet.SET_CLOSED_CAPTIONS_ENABLED"),
        TOGGLE_CAMERA("org.orbit.meet.TOGGLE_CAMERA"),
        SHOW_NOTIFICATION("org.orbit.meet.SHOW_NOTIFICATION"),
        HIDE_NOTIFICATION("org.orbit.meet.HIDE_NOTIFICATION"),
        START_RECORDING("org.orbit.meet.START_RECORDING"),
        STOP_RECORDING("org.orbit.meet.STOP_RECORDING"),
        OVERWRITE_CONFIG("org.orbit.meet.OVERWRITE_CONFIG"),
        SEND_CAMERA_FACING_MODE_MESSAGE("org.orbit.meet.SEND_CAMERA_FACING_MODE_MESSAGE");

        private final String action;

        Type(String action) {
            this.action = action;
        }

        public String getAction() {
            return action;
        }

        private static Type buildTypeFromAction(String action) {
            for (Type type : Type.values()) {
                if (type.action.equalsIgnoreCase(action)) {
                    return type;
                }
            }
            return null;
        }
    }
}
