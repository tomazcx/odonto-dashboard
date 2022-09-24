import { gql } from "@apollo/client";

export const DELETE_CLIENT = gql`
   mutation deleteClient($id: ID!) {
  unpublishClient(where: {id: $id}) {
    id
  }
  
  deleteClient(where: {id: $id}) {
    id
  }
}
`