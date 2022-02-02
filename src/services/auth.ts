import { DynamoDBClient, DynamoDBClientConfig, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { fromEnv } from '@aws-sdk/credential-providers';

const config: DynamoDBClientConfig = {
  region: process.env.REACT_APP_AWS_REGION,
  credentials: fromEnv(),
};

const register = (username: string, email: string, password: string) => {
  const client = new DynamoDBClient(config);
  const command = new PutItemCommand({
    TableName: 'todos',
    Item: {
      id: { S: username },
      password: { S: password },
      email: { S: email }
    },
  });
  return client.send(command);
}

const authService = {
  register,
  // login,
  // logout,
};

export default authService;
