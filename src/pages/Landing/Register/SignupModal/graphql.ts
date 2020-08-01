import gql from 'graphql-tag'

export const SIGNUP = gql`
    mutation signup($student: StudentInput!) {
        signup(student: $student) {
            _id
        }
    }
`