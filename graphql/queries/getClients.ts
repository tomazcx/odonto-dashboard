import { gql } from '@apollo/client'

export const LOAD_CLIENTS = gql`
query getClients {
    clients(orderBy: publishedAt_DESC) {
        id
        age
        city
        name
        phoneNumber
        email
        }
    }
`