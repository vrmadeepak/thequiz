export const questions = {
    1: 'Which statement is used to find out what databases currently exist on the server?',
    2: 'Which is not a valid comment style in MySQL?',
    3: 'Mysql is ____ ?',
    4: 'In A LIKE Clause, You Can Ask For Any 6 Letter Value By Writing:',
    5: 'Which Statement Is Used To Insert A New Data In A Database?',
    6: 'The SQL Keyword BETWEEN Is Used?',
    7: 'Which Of The Following Is An Aggregate Function In MySQL?',
    8: 'The value of Primary key',
    9: 'Which join refers to join records from the write table that have no matching key in the left table are include in the result set:',
    10: 'Which of the following statements creates a new table temp instructor that has the same schema as instructor.',
    11: 'A relational database consists of a collection of',
    12: 'Which of the following is used to delete an entire MYSQL database?',
    13: 'In order to add a new column to an existing table in SQL, we can use the command',
    14: 'Which is right statement to insert multiple records?',
    15: 'The DISTINCT keyword used along with the SELECT keyword retrieves ______ ?',
    16: 'Which clause is used to sort the result of SELECT statement?',
    17: 'Which statement is wrong to select particular columns from table?',
    18: 'Which statement is used to count number of rows in table?',
    19: 'Which is the right statement to fetch all tables start with "a"?',
    20: 'Which statement is used to change database?',
}

export const answers = {
    1: { 1: 'SHOW DATABASE', 2: 'SHOW DATABASES', 3: 'SHOW ALL DATABASES', 4: 'SHOW ALL DATABASES' },
    2: { 1: '# comment', 2: '/* comment */', 3: '-- comment', 4: '//' },
    3: { 1: 'Object Oriented Database', 2: 'XML Database', 3: 'Relational Database Management System (RDBMS)', 4: 'NoSQL Database' },
    4: { 1: 'LIKE .{6}', 2: 'LIKE ______ (Six Underscore Characters)', 3: 'LIKE ^.{6}$', 4: 'LIKE %______% (Six underscore characters)' }, 
    5: { 1:'INSERT NEW', 2:'Add New', 3:'INSERT INTO', 4:'UPDATE' },
    6: { 1:'To Limit The Columns Displayed', 2:'As A Wildcard', 3:'For Ranges', 4:'None Of The Above' },
    7: { 1:'LIKE', 2:'Union', 3:'Group By', 4:'MAX' },
    8: { 1:'can be duplicated', 2:'can be null', 3:'cannot be null', 4:'none of these' },
    9: { 1:'Left outer join', 2:'Full outer join', 3:'Right outer join', 4:'Half outer join' },
    10: { 1:'create table temp_instructor;', 2:'Create table temp_instructor like instructor;', 3:'Create Table as temp_instructor;', 4:'Create table like temp_instructor;' },
    11: { 1:'Table', 2:'Fields', 3:'Records', 4:'Keys' },
    12: { 1:'drop entiredb dbname', 2:'drop database dbname', 3:'drop db dbname', 4:'drop dbase dbname' },
    13: { 1:'MODIFY TABLE', 2:'EDIT TABLE', 3:'ALTER TABLE', 4:'ALTER COLUMNS' },
    14: { 1:'INSERT INTO job_question VALUES (\'col1\', \'col2\'), (\'col1\', \'col2\'), ...', 2:`INSERT INTO job_question VALUES ('col1', 'col2'), VALUES ('col1', 'col2'), ...`, 3:`A and B Both`, 4:`None of the above` },
    15: { 1:`Duplicate data depending on the column list`, 2:`Unique data depending on the column list`, 3:`Sorted data depending on the column list`, 4:`None of the above` },
    16: { 1:`SORT BY`, 2:`ORDER BY`, 3:`ARRANGE BY`, 4:`None of the above` },
    17: { 1:`SELECT id, question FROM placement_question;`, 2:`SELECT id, question FROM placement_question WHERE id = '2';`, 3:`SELECT id, question FROM placement_question WHERE 1;`, 4:`All are right` },
    18: { 1:`SELECT COUNT(*) FROM placement_question;`, 2:`SELECT COUNT ALL(*) FROM placement_question;`, 3:`SELECT ROWS(*) FROM placement_question;`, 4:`All the above` },
    19: { 1:`SHOW TABLES LIKE 'a%';`, 2:`SHOW TABLES LIKE 'a';`, 3:`SHOW ALL TABLES LIKE 'a%';`, 4:`All the above` },
    20: { 1:`USE db_name;`, 2:`WANT db_name;`, 3:`CHANGE db_name;`, 4:`None of the above` },
}

export const correctAnswers = {
    1: '2', 2: '4', 3: '3', 4: '2', 5: '3', 6: '2', 7: '4', 8: '3', 9: '3', 10: '2', 11: '1', 12: '2', 13: '3',  14: '1', 15: '2', 16: '2', 17: '4', 18: '1',  19: '1', 20: '1', }