import { gql } from '@apollo/client'

export const LOAD_CLIENTS = gql`
query getClients {
    clients {
        id
        age
        city
        name
        phoneNumber
        email
        }
    }
`