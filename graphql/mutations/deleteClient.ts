import { gql } from "@apollo/client";

export const DELETE_CLIENT = gql`
    mutation MyMutation($id: ID!) {
  deleteClient(where: {id: $id}) {
    id
  }
}
`