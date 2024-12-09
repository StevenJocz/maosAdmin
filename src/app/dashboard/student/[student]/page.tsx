import { Curso } from "@/components/cursos/cursoView";
import { Nav } from "@/components/nav";

const Student = () => {
  const theme: 'dark' | 'light' = 'dark';
    return (
        <div>
           <Nav  theme={theme}/>
            <Curso/>
        </div>
    );
};

export default Student;