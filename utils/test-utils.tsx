import {render} from '@testing-library/react-native'
import React from 'react'

import {MoviesProvider} from './movies-context'

const AllTheProviders = ({children}: {children: any}) => {
  return <MoviesProvider>{children}</MoviesProvider>
}

const customRender = (ui: any, options?: any) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react-native'

// override render method
export {customRender as render}
