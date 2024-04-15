let students = [
  { id: 1, name: "Trang", grade: "A" },
  { id: 2, name: "Hai", grade: "B" },
  { id: 3, name: "Linh", grade: "C" },
];

function updateStudentGrade(studentsArray, idToUpdate, newGrade) {
  // Tạo một bản sao sâu của mảng studentsArray
  const updatedStudentsArray = JSON.parse(JSON.stringify(studentsArray));
  // Tìm chỉ mục của học sinh có id cần cập nhật
  const indexToUpdate = updatedStudentsArray.findIndex((student) => student.id === idToUpdate);
  if (indexToUpdate !== -1) {
      // Cập nhật grade của học sinh tại chỉ mục tìm được
      updatedStudentsArray[indexToUpdate].grade = newGrade;
      return updatedStudentsArray;
  } else {
      console.log('Student was not found.');
      return studentsArray;
  }
}

// In ra mảng students ban đầu
console.log("Original students array:");
console.log(students);

// Cập nhật grade của học sinh có id 2 thành "A"
let updatedStudents = updateStudentGrade(students, 2, "A");

// In ra mảng students sau khi cập nhật
console.log("\nUpdated students array:");
console.log(updatedStudents);
