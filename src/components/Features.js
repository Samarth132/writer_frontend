import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { Eye, Mouse, Tv } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
const Features = () => {
    const {ref, inView} = useInView();
    return ( 
        <section className="features" id="features">
            <Container>
                <div className="featureCard">
                    <div ref={ref} className="fcard">
                        <Row>
                            <Col xs={12}>
                                <div id="fheading">
                                    <motion.h3 
                                    initial={{opacity:0}}
                                    animate={{opacity: inView ? 1:0}}
                                    transition={{duration:2}}>
                                        Features
                                    </motion.h3>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} lg={4}>
                                <div className="herocard">
                                    <Card className="mb-3" style={{width: '18rem',height: '18rem',background: 'rgb(17, 17, 17)',display:"grid",placeItems:"center"}}>
                                        <Card.Body>
                                            <Row>
                                                <Col xs={12}>
                                                    <Card.Title className="mb-3" style={{color:"#676bd6"}}>
                                                        <motion.h1
                                                            initial={{opacity:0, x:"-50vw"}}
                                                            animate={{opacity: inView ? 1:0, x: inView ? 0:'-50vw'}}
                                                            transition={{duration:1}}
                                                        >
                                                            <Mouse/>
                                                        </motion.h1>
                                                    </Card.Title>
                                                </Col>
                                                <Col xs={12}>
                                                    <Card.Text style={{color:"rgb(201, 201, 201)"}}>
                                                        <motion.h5
                                                            initial={{opacity:0, x:"-50vw"}}
                                                            animate={{opacity: inView ? 1:0, x: inView ? 0:'-50vw'}}
                                                            transition={{duration:1}} 
                                                        >
                                                            Easy to use Interface
                                                        </motion.h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col xs={12} lg={4}>
                                <div className="herocard">
                                    <Card className="mb-3" style={{width: '18rem',height: '18rem',background: 'rgb(17, 17, 17)', display:"grid",placeItems:"center"}}>
                                        <Card.Body>
                                            <Row>
                                                <Col xs={12}>
                                                    <Card.Title className="mb-3" style={{fontSize:"3rem", color:"#676bd6"}}>
                                                        <motion.h1
                                                            initial={{opacity:0}}
                                                            animate={{opacity: inView ? 1:0}}
                                                            transition={{duration:2}}
                                                        >
                                                            <Eye/>
                                                        </motion.h1>
                                                    </Card.Title>
                                                </Col>
                                                <Col xs={12}>
                                                    <Card.Text style={{color:"rgb(201, 201, 201)"}}>
                                                        <motion.h5
                                                            initial={{opacity:0}}
                                                            animate={{opacity: inView ? 1:0}}
                                                            transition={{duration:2}}
                                                        >
                                                            Let's you focus solely on your work
                                                        </motion.h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col item xs={12} lg={4}>
                                <div className="herocard">
                                    <Card className="mb-3" style={{width: '18rem',height: '18rem',background: 'rgb(17, 17, 17)',display:"grid",placeItems:"center"}}>
                                        <Card.Body>
                                            <Row>
                                                <Col xs={12}>
                                                    <Card.Title className="mb-3" style={{fontSize:"3rem", color:"#676bd6"}}>
                                                        <motion.h1
                                                            initial={{opacity:0, x:"50vw"}}
                                                            animate={{opacity: inView ? 1:0, x: inView ? 0:'50vw'}}
                                                            transition={{duration:1}} 
                                                        >
                                                            <Tv/>
                                                        </motion.h1>
                                                    </Card.Title>
                                                </Col>
                                                <Col xs={12}>
                                                    <Card.Text style={{color:"rgb(201, 201, 201)"}}>
                                                        <motion.h5
                                                            initial={{opacity:0, x:"50vw"}}
                                                            animate={{opacity: inView ? 1:0, x: inView ? 0:'50vw'}}
                                                            transition={{duration:1}} 
                                                        >
                                                            No advertisements
                                                        </motion.h5>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
     );
}
 
export default Features;