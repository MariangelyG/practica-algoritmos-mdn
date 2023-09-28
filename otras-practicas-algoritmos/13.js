// ¡Suzuki necesita ayuda para alinear a sus alumnos!
// ¡Suzuki necesita ayuda para alinear a sus alumnos!
// Hoy Suzuki entrevistará a sus alumnos para asegurarse de que estén progresando en su formación. 
// Decidió programar las entrevistas basándose en la longitud del nombre de los estudiantes en orden descendente. 
// Los estudiantes se alinearán y esperarán su turno.
// Se le dará una serie de nombres de estudiantes. Ordenarlos y devolver una lista de nombres en orden descendente.
// Los nombres de igual longitud se devolverán en orden alfabético inverso (Z->A), de modo que:
  
 const lineupStudents = (students) => {
        return students.split(" ").sort((a,b)=> b.length - a.length || b.localeCompare(a))    
  }
  
console.log(lineupStudents('Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'));
  
