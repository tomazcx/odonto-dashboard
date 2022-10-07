import { gql } from '@apollo/client'

export const LOAD_CLIENTS = gql`
query getClients {
    clients(first: 1000, orderBy: publishedAt_DESC) {
        id
        age
        city
        name
        phoneNumber
        email
        }
    }
`