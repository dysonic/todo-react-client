import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();
const command = new CreateTableCommand({
  TableName: 'todos',
  AttributeDefinitions: [
    {
      AttributeName: "id",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "id",
      KeyType: "HASH",
    },
  ],
  ProvisionedThroughput: {
    "ReadCapacityUnits": 1,
    "WriteCapacityUnits": 1,
  },
  StreamSpecification: {
    StreamEnabled: false,
  },
});

export const run = async () => {
  try {
    const data = await client.send(command);
    console.log("Table Created", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
run();
