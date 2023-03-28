interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Pedro',
  lastName: 'Perez',
  age: 20,
  location:'Cali',
};

const student2: Student = {
  firstName: 'Laura',
  lastName: 'Marin',
  age: 21,
  location:'Bogota',
};

const studentsList: Student[] = [student1, student2];

const tableHtml = `
  <table>
    <thead>
      <tr>
        <th>firstName</th>
        <th>location</th>
      </tr>
    </thead>
    <tbody>
      ${studentsList.map((student) => `
        <tr>
          <td>${student.firstName}</td>
          <td>${student.location}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>
`;

document.body.innerHTML = tableHtml;
