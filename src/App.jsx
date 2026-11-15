import {Page,Button,Badge,Card,Checkbox,Input,Row,Stack} from "./ui"


function App() {

  return (
   <Page>
      <Stack>

          <Card>One Card</Card>

          <Row>
            <Input placeholder="Enter Task"/>
            <Button children="Submit"/>
          </Row>

          <Checkbox label="Checked Information"/>

      </Stack>
   </Page>
  )

}

export default App
