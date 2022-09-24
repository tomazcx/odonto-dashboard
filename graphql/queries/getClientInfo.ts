import { gql } from "@apollo/client";

export const LOAD_INFO = gql`
query MyQuery($slug: String!) {
  client(stage:DRAFT, where: {clientSlug: $slug}) {
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
  }
}
`