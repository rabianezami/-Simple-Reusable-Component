
import './App.css'
import Badge from './components/Badge'

function App() {

  return (
    <>
     <h1>My Badges</h1>
     <Badge label="course" value="React" />
     <Badge label="Weak" value="1" />
     <Badge label="Topic" value="Props" />
     <Badge label="Practice" value="Reuseable Components" />
    </>
  )
}

export default App
