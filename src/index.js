/**
 * JSX is not standard js so it's recommended that an app's entry point be a .js file
 * https://stackoverflow.com/a/60234368/8079848
*/
import { Integrations } from "@sentry/tracing";
import * as Sentry from "@sentry/react";

import './assets/theme/global.scss'
import './assets/fontawesome.js'

export * from './components'
export * from './compounds'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});