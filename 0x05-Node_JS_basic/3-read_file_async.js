const fs = require('fs');

const countStudents = async (path) => {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // Perform splits and turn row into an array
  const students = data.split('\n')
    .map((row) => row.split(','))
    // Skip first row and onvert into objects
    .filter((row) => row.length === 4 && row[0] !== 'firstname')
    .map((row) => ({
      firstName: row[0],
      lastName: row[1],
      age: row[2],
      field: row[3].replace('\r', ''),
    }));
  // Creating CS students
  const CS = students.filter((student) => student.field === 'CS')
    .map((student) => student.firstName);
  // Creating Software Engineering students
  const SWE = students.filter((student) => student.field === 'SWE')
    .map((student) => student.firstName);
  // Print length || convert each into a string
  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
  console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
  return { students, CS, SWE };
};

// Export as a module
module.exports = countStudents;
