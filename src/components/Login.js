import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        }

        setValidated(true);
    }

    return ( 
        <section className="login">
            <Container>
                <div className="login-form">
                    <h4>Log in to Writer's Log</h4>
                        <Form noValidate validated={validated} onSubmit={ handleSubmit }>
                            <Form.Group hasValidation className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" required value={email} placeholder="Enter email" 
                                onChange={(e)=>setEmail(e.target.value)} style={{background:'rgb(31, 31, 31)', color:'rgb(201, 201, 201)', borderColor:'#676bd6'}}/>
                                <Form.Control.Feedback type="invalid">
                                    Enter valid email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group hasValidation className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required value={password} placeholder="Password" 
                                onChange={(e)=>setPassword(e.target.value)} style={{background:'rgb(31, 31, 31)', color:'rgb(201, 201, 201)', borderColor:'#676bd6'}}/>
                                <Form.Control.Feedback type="invalid">
                                    Enter the password
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button style={{background:"#676bd6", border:"none"}} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                </div>         
            </Container>
        </section>
     );
}
 
export default Login;