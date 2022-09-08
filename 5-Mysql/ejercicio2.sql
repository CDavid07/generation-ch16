use genetation;
SELECT Students.*, idtypes.name FROM Students INNER JOIN idtypes ON Students.IdType_id = idtypes.id_idtypes ;

/*Escriba una instrucción SQL adicional para UNIRSE a la tabla Estudiantes con la tabla CourseHasStudent para
 obtener el código de los cursos en los que está inscrito cada estudiante.*/
 
SELECT Students.*, idtypes.name FROM Students INNER JOIN idtypes ON Students.IdType_id = idtypes.id_idtypes ;

SELECT Students.*, idtypes.name, courses_has_students.course_code FROM Students INNER JOIN idtypes ON Students.IdType_id = idtypes.id_idtypes
INNER JOIN courses_has_students ON Students.idStudent = courses_has_students.students_id_student;

SELECT courses_has_students.* , courses.name, courses.credits, courses.module_code FROM courses_has_students INNER JOIN courses ON courses_has_students.course_code = courses.code ;

SELECT Students.*, idtypes.name, courses_has_students.* , courses.name, courses.credits, courses.module_code
FROM Students INNER JOIN idtypes ON Students.IdType_id = idtypes.id_idtypes
INNER JOIN courses_has_students ON Students.idStudent = courses_has_students.students_id_student
INNER JOIN  courses ON courses_has_students.course_code = courses.code;