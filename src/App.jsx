import {Button,Badge,Card} from "./ui"


function App() {

  return (
    <div>
       <h1 className="text-red-400">Welcome to Home Page </h1>
       <Badge children="Bangladesh" tone="green"/>
       <Button children="Submit" />
       <Card  children="Bangladesh"/>
    </div>
  )

}

export default App
