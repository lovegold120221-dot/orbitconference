# Orbit Meeting (Orbit Meet)

Orbit Meeting is a secure, open-source video conferencing platform built on top of Jitsi Meet. It supports web browsers, mobile applications (iOS/Android), and offers both web and native SDKs.

## Architecture & Technologies

- **Frontend Framework:** React (Web) and React Native (Mobile).
- **State Management:** Redux with a decentralized registry pattern (`react/features/base/redux`).
- **Communication:** WebRTC for media, XMPP for signaling.
- **Styling:** Sass (CSS-in-JS used in some React Native components).
- **Type System:** TypeScript.
- **Internationalization:** i18next (`lang/` directory).

## Project Structure

- `react/features/`: The heart of the application. Logic is modularized into "features" (e.g., `chat`, `conference`, `video-layout`).
- `modules/`: Legacy JavaScript modules used by the core application.
- `css/`: Global stylesheets and Sass variables.
- `android/` & `ios/`: Native project folders for the mobile application.
- `tests/`: End-to-end and integration tests using WebdriverIO.
- `lang/`: JSON files for internationalization.
- `resources/`: Static assets like images, sounds, and documentation.

## Development Workflow

### Prerequisites

- Node.js >= 24.0.0
- npm >= 11.0.0
- GNU Make

### Building and Running

- **Development Mode (Web):**
  ```bash
  npm start
  ```
  This command executes `make dev`, which compiles assets (wasm, models, CSS) and starts the Webpack dev server.

- **Production Build (Web):**
  ```bash
  make compile deploy
  ```
  This builds the application and moves the assets to the `libs` and `build` directories.

- **Linting & Type Checking:**
  ```bash
  npm run lint       # Runs ESLint and tsc
  npm run tsc:web    # Type check web code
  npm run tsc:native # Type check mobile code
  ```

- **Testing:**
  ```bash
  npm test           # Runs all WebdriverIO tests
  ```

### Development Conventions

- **Modular Features:** When adding new functionality, create a new directory in `react/features/`. Each feature typically contains:
  - `actions.ts`: Redux actions.
  - `reducer.ts`: Redux reducer (registered via `ReducerRegistry`).
  - `middleware.ts`: Redux middleware (registered via `MiddlewareRegistry`).
  - `components/`: React components.
  - `functions.ts`: Utility functions and selectors.
- **Cross-Platform:** Shared logic should be placed in the feature root, while platform-specific components or logic should use `.web.js` or `.native.js` suffixes.
- **State Listeners:** Use `StateListenerRegistry` to react to state changes instead of putting complex logic in reducers or components.
- **Style:** Adhere to the existing ESLint configuration (`.eslintrc.js`). Use Sass for web styling and `react-native` styles for mobile.

## Configuration

- `config.js`: Main application configuration (XMPP hosts, WebRTC settings, feature flags).
- `interface_config.js`: (Deprecated) UI-specific configuration. Options are gradually moving to `config.js`.
