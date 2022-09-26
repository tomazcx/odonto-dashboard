import { gql } from '@apollo/client'

export const LOAD_CLIENTS = gql`
query getClients($order: ClientOrderByInput!) {
    clients(orderBy: $order) {
        id
        age
        city
        name
        phoneNumber
        email
        }
    }
`