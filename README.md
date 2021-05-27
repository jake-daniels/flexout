# flexout

Flexout is a minimal set of React components designed for quick prototyping of layouts using CSS flexbox model.

Create layout like this...

![Layout](docs/example-layout.jpg)

simply with code like this...

```
import { Row, Col } from 'flexout'
import './app.css'

export default function App() {
    return (
        <Col width={'100vw'} height={'100vh'} spacing={'1rem'} padding={'1rem'}>
            <Row className={'panel'} align={'center'} justify={'center'} height={'3rem'}>
                Header
            </Row>
            <Row flex={1} spacing={'1rem'}>
                <Col className={'panel'} width={'15rem'}>
                    Sidebar
                </Col>
                <Col className={'panel'} flex={1}>
                    Workspace
                </Col>
            </Row>
        </Col>
    )
}
```

with `app.css` containing just

```
.panel {
    padding: 1rem;
    border: solid 1px grey;
    border-radius: 4px;
}
```