import { IReduxState } from '../../app/types';
import JitsiMeetJS from '../../base/lib-jitsi-meet';

import {
    IConfig,
    IDeeplinkingConfig,
    IDeeplinkingDesktopConfig,
    IDeeplinkingMobileConfig
} from './configType';

export * from './functions.any';

/**
 * Removes all analytics related options from the given configuration, in case of a libre build.
 *
 * @param {*} _config - The configuration which needs to be cleaned up.
 * @returns {void}
 */
export function _cleanupConfig(_config: IConfig) {
    return;
}

/**
 * Returns the replaceParticipant config.
 *
 * @param {Object} state - The state of the app.
 * @returns {boolean}
 */
export function getReplaceParticipant(state: IReduxState): string | undefined {
    return state['features/base/config'].replaceParticipant;
}

/**
 * Returns the configuration value of web-hid feature.
 *
 * @param {Object} state - The state of the app.
 * @returns {boolean} True if web-hid feature should be enabled, otherwise false.
 */
export function getWebHIDFeatureConfig(state: IReduxState): boolean {
    return state['features/base/config'].enableWebHIDFeature || false;
}

/**
 * Returns whether audio level measurement is enabled or not.
 *
 * @param {Object} state - The state of the app.
 * @returns {boolean}
 */
export function areAudioLevelsEnabled(state: IReduxState): boolean {
    return !state['features/base/config'].disableAudioLevels && JitsiMeetJS.isCollectingLocalStats();
}

/**
 * Sets the defaults for deeplinking.
 *
 * @param {IDeeplinkingConfig} deeplinking - The deeplinking config.
 * @returns {void}
 */
export function _setDeeplinkingDefaults(deeplinking: IDeeplinkingConfig) {
    deeplinking.desktop = deeplinking.desktop || {} as IDeeplinkingDesktopConfig;
    deeplinking.android = deeplinking.android || {} as IDeeplinkingMobileConfig;
    deeplinking.ios = deeplinking.ios || {} as IDeeplinkingMobileConfig;

    const { android, desktop, ios } = deeplinking;

    desktop.appName = desktop.appName || 'Orbit Meeting';
    desktop.appScheme = desktop.appScheme || 'orbit-meet';
    desktop.download = desktop.download || {};
    desktop.download.windows = desktop.download.windows
        || 'https://eburon.ai/orbit-meeting';
    desktop.download.macos = desktop.download.macos
        || 'https://eburon.ai/orbit-meeting';
    desktop.download.linux = desktop.download.linux
        || 'https://eburon.ai/orbit-meeting';

    ios.appName = ios.appName || 'Orbit Meeting';
    ios.appScheme = ios.appScheme || 'org.orbit.meet';
    ios.downloadLink = ios.downloadLink
        || 'https://eburon.ai/orbit-meeting';

    android.appName = android.appName || 'Orbit Meeting';
    android.appScheme = android.appScheme || 'org.orbit.meet';
    android.downloadLink = android.downloadLink
        || 'https://play.google.com/store/apps/details?id=org.orbit.meet';
    android.appPackage = android.appPackage || 'org.orbit.meet';
    android.fDroidUrl = android.fDroidUrl || 'https://f-droid.org/packages/org.orbit.meet/';
}
