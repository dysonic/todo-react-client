import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();
const command = new GetItemCommand({
  TableName: 'todos',
  Key: {
    id: { S: "foo" },
  },
  ProjectionExpression: "id, email",
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
