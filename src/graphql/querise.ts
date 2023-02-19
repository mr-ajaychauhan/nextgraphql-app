import { gql } from '@apollo/client'
export const GET_ACTIVECHANNEL = gql`
  {
    activeChannel{
      id,
    }
  }
`;
