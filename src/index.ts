import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql" 
import  "reflect-metadata"
import { createConnection } from "typeorm"
import { User } from "./entities/user"
import { Hello } from "./resolvers/resolvers"



const main = async() => {
     const schema = await buildSchema(
        {
            resolvers : [Hello]
        }
       );
    const server = new ApolloServer({
         schema,
        })
    server.listen(4001, () => {
        console.log("server started")
    })  }  

    main();

createConnection({
    type:"postgres",
    url: "postgresql://postgres:Abhishek@77@localhost:5432/db",
    entities: [User],
    logging: true,
    synchronize: true

}).then(() => {
    console.log("Data Connected")
})

