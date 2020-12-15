import NB from "./Component/Navbar";
import Caro from "./Component/Carousel";
import Recent from "./Component/recently";
import { Col, Container, Row } from "react-bootstrap";
import Kawkab from "./Component/kawkab";
import Shakhsiat from "./Component/shakhsiat";
import line from './img/Line 3.svg'
import "./App.css";

function App() {
	return (
		<div>
			<NB className="navbar" />
			<Container variant="fluid">
				<Caro />
				<Row>
					<img src={line} alt="line" className="line" />
				</Row>
				<Row>
					
						<Kawkab />
					
						<Recent />
					
				</Row>
				<img src={line} alt="line" className="line" />
				
				<Row><Shakhsiat /></Row>
			</Container>
		</div>
	);
}

export default App;
