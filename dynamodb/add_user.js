import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();
const command = new PutItemCommand({
  TableName: 'todos',
  Item: {
    id: { S: "foo" },
    password: { S: "password" },
    email: { S: "foo@example.com" }
  },
});

export const run = async () => {
  try {
    const data = await client.send(command);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();
