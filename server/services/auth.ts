import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from 'uuid';

// Set the AWS Region.
const REGION = "ap-southeast-2"; // e.g. "us-east-1", 'ap-southeast-2" (Sydney)

export const register = (username: string, email: string, password: string) => {
  const id = uuidv4();
  const client = new DynamoDBClient({ region: REGION });
  const command = new PutItemCommand({
    TableName: 'todos',
    Item: {
      id: { S: id },
      username: { S: username },
      password: { S: password },
      email: { S: email }
    },
  });
  return client.send(command);
};
