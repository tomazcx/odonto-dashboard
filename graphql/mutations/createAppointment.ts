import { gql } from "@apollo/client";

export const CREATE_APPOINTMENT = gql`
    mutation myMutation($teeth: String!, $proccedure: String!, $date: String!, $clientID: ID!) {
    createAppointment(
        data: {teeth: $teeth, proccedure: $proccedure, date: $date, client: {connect: {id: $clientID}}}
    ) {
        id
    }
    publishManyAppointments(where: {date: $date}){
        count
    }
}
`