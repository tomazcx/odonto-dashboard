import { gql } from "@apollo/client";

export const CREATE_APPOINTMENT = gql`
    mutation myMutation($teeth: String!, $proccedure: String!, $date: String!, $clientID: ID!) {
    createAppointment(
        data: {teeth: $teeth, proccedure: $proccedure, date: $date, cl860sl2x19nw01uog09gevpf: {connect: {id: $clientID}}}
    ) {
        id
    }
    publishManyAppointments(where: {date: $date}){
        count
    }
}
`