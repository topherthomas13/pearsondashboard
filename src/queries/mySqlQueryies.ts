export class MySqlQueries {
    public classListQuery = `SELECT fullname AS Text, id AS Value
        FROM mdl_course c 
        WHERE c.visible = 1 AND c.enddate > 0;
    `;
    
    public attendance = `SELECT c.fullname AS CourseName,
            concat(u.firstname, ' ', u.lastname)  AS Fullname,
            u.email,
            u.idnumber AS StudentId,
            from_unixtime(ue.timecreated) AS EnrollDateTime
        FROM mdl_course c
        INNER JOIN  mdl_enrol e ON c.id = e.courseid
        INNER JOIN mdl_user_enrolments ue ON e.id = ue.enrolid
        INNER JOIN mdl_user u ON ue.userid = u.id
        WHERE c.visible = 1
            AND c.enddate > 0
    `;
}

