import { gql } from "@apollo/client";

export const LOAD_INFO = gql`
query MyQuery($id: ID!) {
  client(where: {id: $id}) {
    age
    address
    anamnese
    budget
    budgetDescription
    city
    clientSlug
    createdAt
    district
    email
    id
    name
    phoneNumber
    appointments{
      date
      teeth
      proccedure
      id
    }
  }
}
`