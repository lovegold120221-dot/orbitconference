import { getBundleId } from 'react-native-device-info';

/**
 * Bundle IDs for the Orbit Meeting apps.
 */
const ORBIT_MEET_APPS = [

    // iOS app.
    'com.atlassian.OrbitMeet.ios',

    // Android + iOS (testing) app.
    'org.orbit.meet',

    // Android debug app.
    'org.orbit.meet.debug'
];

/**
 * Checks whether we are loaded in iframe. In the mobile case we treat SDK
 * consumers as the web treats iframes.
 *
 * @returns {boolean} Whether the current app is an Orbit Meeting app.
 */
export function isEmbedded(): boolean {
    return !ORBIT_MEET_APPS.includes(getBundleId());
}

/**
 * React Native has no concept of same-domain embedding. SDK consumers are
 * always treated as cross-domain embeddings.
 *
 * @returns {boolean} Always false in React Native.
 */
export function isEmbeddedFromSameDomain(): boolean {
    return false;
}
