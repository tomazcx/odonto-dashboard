import { gql } from '@apollo/client'

export const LOAD_CLIENTS = gql`
query getClients($skip: Int!) {
    clients(first: 100,skip:$skip , orderBy: publishedAt_DESC) {
        id
        age
        city
        name
        phoneNumber
        email
        }
    }
`