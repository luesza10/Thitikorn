import {gql} from 'apollo-server-express';

//fake database
const user=[
    {
    id: '1',
    name: 'อาหร่อย',
    username: 'Aroy',
    password: '123456',
    email: 'AroyMakkk@hotmail.com',
    },
    {
        id: '2',
        name: 'อาหร่อยa',
        username: 'Aroya',
        password: '123456a',
        email: 'aAroyMakkk@hotmail.com',
        },
        {
            id: '3',
            name: 'สมหวัง',
            username: 'Aroya',
            password: '123456a',
            email: 'aAroyMakkk@hotmail.com',
            }
    
]
export const resolvers = {
    Query :{
        user:(parent, args, context, info)=>{
            return user.filter((user) => user.id.toString() === args.id) [0];
        },
        users:(parent, args, context, info)=>{
            return user;
        },
    },
};
export const typeDefs = gql`

type User{
    id: ID!
    name: String!
    username: String!
    password: String!
    email: String!
}

type Query{
    user(id:ID!):User
    users:[User]!
}
`