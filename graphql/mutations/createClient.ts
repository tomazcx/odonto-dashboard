import { gql } from "@apollo/client";

export const CREATE_CLIENT = gql`
mutation MyQuery($name: String!, $email: String, $age: Int!, $phoneNumber: String!, $city: String!, $district: String, $budget: String, $budgetDescription: String, $anamnese: String, $address: String) {
  createClient(
    data: { name: $name, email: $email, age: $age, phoneNumber: $phoneNumber, city: $city, district: $district, budget: $budget, budgetDescription: $budgetDescription, anamnese: $anamnese, address: $address}
  ) {
    id
  }

  publishManyClients(where: {name: $name}){
    count
  }
}

`