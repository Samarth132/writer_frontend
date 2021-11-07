import { Container } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const ChapterContent = () => {
    const {id} = useParams();
    const {data:chapter, error, isPending} = useFetch('http://localhost:8000/chapters/'+id);
    return ( 
        <section className="chapterDetail">
            <Container>
            <div className="chapterContent">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {chapter && (
                    <article className="chapterBody">
                        <h2>{chapter.title}</h2>
                        <div>{chapter.content}</div>
                    </article>
                )}
            </div>
            </Container>
        </section>
     );
}
 
export default ChapterContent;