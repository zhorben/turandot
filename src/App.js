import React from "react"
import { Root, Routes, addPrefetchExcludes } from "react-static"

import { Router } from 'components/Router'
import "./app.css"

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"])

function App() {
  return (
    <Root>
      <header>

      </header>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
      <footer>
        
      </footer>
    </Root>
  );
}

export default App
