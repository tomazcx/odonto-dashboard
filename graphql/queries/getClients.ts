import { gql } from '@apollo/client'

export const LOAD_CLIENTS = gql`
query getClients {
    clients {
        clientSlug
        age
        city
        email
        name
        phoneNumber
        district
        budget
        budgetDescription
        }
    }

`