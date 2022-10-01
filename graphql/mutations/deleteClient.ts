import { gql } from "@apollo/client";

export const DELETE_CLIENT = gql`
   mutation deleteClient($id: ID!) {
    deleteManyAppointments(where: {client: {id: $id}}) {
      count
    }

    deleteClient(where: {id: $id}) {
      id
    }
   
}
`