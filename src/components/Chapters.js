import useFetch from "./useFetch";
import { useParams, useHistory, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Chapters = () => {
    const {usr} = useParams();
    const {data:chapter, error, isPending} = useFetch('http://localhost:8000/api/v1/chapters/');
    const {ref, inView} = useInView();

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: inView ? 1:0,
          transition: {
            staggerChildren: 0.5
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: inView ? 1:0 }
      }
    return ( 
        <section className="chapters">
            <Container>
                <motion.div 
                    className="chapterlist" 
                    ref={ref}
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {isPending && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                    {chapter && chapter.map(ch=>(
                        <motion.div className="chapterPre" variants={item}>
                            <Link to={`/chapters/${ch.id}`}>
                                <h4>{ch.title}</h4>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
        
     );
}
 
export default Chapters;