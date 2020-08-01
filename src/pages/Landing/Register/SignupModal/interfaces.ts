import { Student } from "../../../../interfaces/Student";

export interface SignupResponse {
    signup: Student
}

export interface SignupVariables {
    student: Partial<Student>
}