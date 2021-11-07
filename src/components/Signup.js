import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();
    const [validated, setValidated] = useState(false);
    const {ref, inView} = useInView();

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: inView ? 1:0,
          transition: {
            staggerChildren: 0.3,
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: inView ? 1:0 }
      }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        }

        setValidated(true);
        const userDetails = {username, email, password};
        fetch('http://localhost:8000/api/v1/users', {
           method:'POST',
           headers:{"Content-Type":"application/json"},
           body: JSON.stringify(userDetails)
        })
        .then(()=>{
           history.push('/');
        });
    }
    return ( 
        <section className="signup" id="signup">
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <div className="signup-text">
                            <div className="joinnow" ref={ref}>
                                <motion.h4 
                                    initial={{opacity:0}}
                                    animate={{opacity: inView ? 1:0}}
                                    transition={{duration:2}}
                                >
                                    Join Now!
                                </motion.h4>
                                <motion.p
                                    initial={{opacity:0}}
                                    animate={{opacity: inView ? 1:0}}
                                    transition={{duration:2}}
                                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, suscipit omnis ratione delectus asperiores quod autem? Commodi rem laborum aut.</motion.p>
                            </div>
                        </div>    
                    </Col>

                    <Col xs={12} lg={6}>
                        <div className="signup-form">
                            <motion.div 
                                ref={ref}
                                variants={container}
                                initial="hidden"
                                animate="show"
                            >
                                <Form noValidate validated={validated} onSubmit={ handleSubmit }>
                                    <motion.div
                                        variants={item}
                                    >
                                        <Form.Group hasValidation className="mb-3" controlId="formBasicUsername">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" required value={username} placeholder="Enter username" 
                                            onChange={(e)=>setUsername(e.target.value)} style={{background:'rgb(31, 31, 31)', color:'rgb(201, 201, 201)', borderColor:'#676bd6'}}/>
                                            <Form.Control.Feedback type="invalid">
                                                Enter a username.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </motion.div>
                                    <motion.div
                                        variants={item}
                                    >
                                        <Form.Group hasValidation className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" required value={email} placeholder="Enter email" 
                                            onChange={(e)=>setEmail(e.target.value)} style={{background:'rgb(31, 31, 31)', color:'rgb(201, 201, 201)', borderColor:'#676bd6'}}/>
                                            <Form.Control.Feedback type="invalid">
                                                Enter valid email.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </motion.div>
                                    <motion.div
                                        variants={item}
                                    >
                                        <Form.Group hasValidation className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" required value={password} placeholder="Password" 
                                            onChange={(e)=>setPassword(e.target.value)} style={{background:'rgb(31, 31, 31)', color:'rgb(201, 201, 201)', borderColor:'#676bd6'}}/>
                                            <Form.Control.Feedback type="invalid">
                                                Enter the password
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </motion.div>
                                    <motion.div
                                        variants={item}
                                    >
                                        <Button style={{background:"#676bd6", border:"none"}} variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </motion.div>
                                </Form>
                            </motion.div>
                        </div>           
                    </Col>
                </Row>
            </Container>
        </section>
     );
}
 
export default Signup;