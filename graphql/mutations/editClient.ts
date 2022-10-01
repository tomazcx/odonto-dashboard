import { gql } from "@apollo/client";

export const EDIT_CLIENT = gql`
mutation updateClient($id: ID!, $address: String, $age: Int, $anamnese: String, $budget: String, $budgetDescription: String, $city: String, $district: String, $email:String, $name:String, $phoneNumber: String) {
  updateClient(
    data: {address: $address, age: $age, anamnese: $anamnese, budget: $budget, budgetDescription: $budgetDescription, city: $city, district: $district, email: $email, name: $name, phoneNumber: $phoneNumber}
    where: {id: $id}
  ) {
    id
  }

  publishClient(where: {id: $id}){
    id
  }
}
`