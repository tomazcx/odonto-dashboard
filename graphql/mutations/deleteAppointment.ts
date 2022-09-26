import { gql } from "@apollo/client";

export const DELETE_APPOINTMENT = gql`
mutation MyMutation($id:ID! ){
    deleteAppointment(where:{id: $id}){
        id
    }
}
`