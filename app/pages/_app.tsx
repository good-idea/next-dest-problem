import * as React from 'react'

interface AppProps {
  Component: React.ComponentType
  pageProps: any
}

const App = (props: AppProps) => {
  const { Component, pageProps } = props
  return <Component {...pageProps} />
}

export default App
