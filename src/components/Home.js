import { Col, Container, Row } from "react-bootstrap";
import main from './main1.jpg';
import { motion } from "framer-motion";

const Home = () => {
    return ( 
        <section className="home" id="home">
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <motion.div
                        initial={{x:"-100vw"}}
                        animate={{ x: 0 }}
                        transition={{type:"tween", duration:1}} 
                        className="herotxt">
                            <div className="herocontent">
                                <h2 className="mb-5 text-center text-lg-start">Welcome to writer's log,</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi temporibus 
                                officia facere minima iste officiis repellat, quo vero nostrum quasi?</p>
                            </div>
                        </motion.div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <motion.div
                        initial={{opacity:0}}
                        animate={{opacity:1}} 
                        transition={{type:"tween", delay:1, duration:1}} 
                        className="heroimg">
                            <img src={main} alt="ink bottle"/>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
     );
}
 
export default Home;
