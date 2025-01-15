// creating a custome type for the object
interface IStudent{
    name: {
        firstname: string;
        lastname: string;
    };
    age: number;
    isStudying: boolean;
    rollNumber: number;
}

const student = {
    name: {
        firstname:"Dev",
        lastname:"singh"
    },
    age: 22,
    isStudying: true,
    rollNumber: 123456
}
function studentDetails(student: IStudent):string{
    return (`Student Details: ${student.name.firstname} ${student.name.lastname}, Age: ${student.age}, Roll Number: ${student.rollNumber}, is Studying: ${student.isStudying}`);
}
console.log(studentDetails(student));