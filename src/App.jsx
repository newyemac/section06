import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'

function App() {
    return (
      // 이렇게 해주어야만 App.css안의 내용이 적용된다
     <div className="App"> 
      <h1>Simple counter</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller />
      </section>
    </div>
  )
}

export default App
