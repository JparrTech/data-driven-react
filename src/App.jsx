import Header from "./components/Header"
import Entry from './components/Entry'
import data from './data.js'


function App() {

  const entryComponents = data.map(entry => (
    <Entry 
    id = {entry.id}
    image = {entry.img}
    location = {entry.title}
    country = {entry.country}
    gMapsLink = {entry.googleMapsLink}
    date = {entry.dates}
    text = {entry.text}
    />

  ))
  return (
    <>
      <Header />
      {entryComponents}
    </>
  )
}

export default App
