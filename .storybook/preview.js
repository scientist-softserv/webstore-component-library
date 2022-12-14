import '../src/assets/theme/global.scss'
import '../src/assets/theme/bootstrap-preview.scss'
import '../src/assets/fontawesome'
import { RouterContext } from 'next/dist/shared/lib/router-context'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}
