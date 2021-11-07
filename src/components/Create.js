import { Container, Form, Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";
const Create = () => {
    const [title, setTitle] = useState('');
    const [chapterBody, setChapterBody] = useState('');
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const chapterContent = {title, chapterBody};
    }

    return ( 
        <section className="write">
            <Container>
                <h2>Write a new chapter</h2>
                <Form onSubmit={ handleSubmit }> 
                    <Form.Group className="mb-3" controlId="formBasicChapter">
                        <Form.Label style={{color:"rgb(201, 201, 201)"}}>Chapter title</Form.Label>
                        <Form.Control type="text" required value={title} placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)}
                        style={{background:'rgb(31, 31, 31)', color:'rgb(201, 201, 201)', borderColor:'#676bd6'}}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="basicChapterBody">
                        <Form.Label style={{color:"rgb(201, 201, 201)"}}>Chapter content</Form.Label>
                        <Form.Control as="textarea" rows={30} required value={chapterBody} placeholder="Start writing..." onChange={(e)=>setChapterBody(e.target.value)}
                        style={{background:'rgb(31, 31, 31)', color:'rgb(201, 201, 201)', borderColor:'#676bd6'}}/>
                    </Form.Group>
                    <Button style={{background:"#676bd6", border:"none"}} variant="primary" type="submit">
                        Post Chapter
                    </Button>
                </Form>
            </Container>
        </section>
     );
}
 
export default Create;
