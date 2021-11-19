import * as React from 'react';
import {AuthContextProvider} from './state/authState'
import Routing from './routing'

export default function App() {
  return(
    <AuthContextProvider>
      <Routing />
    </AuthContextProvider>
  )
}