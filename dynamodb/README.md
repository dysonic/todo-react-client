# AWS DynamoDB

The scripts here are for the set up/tear down of the [AWS DynamoDB](https://aws.amazon.com/dynamodb/), a NoSQL database service. This uses the [AWS SDK for JavaScript, V3](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html).

## Prerequisites

1. An AWS IAM account (it is not recommended to use your `root` user).

2. Set up your credentials. See [getting your credentials](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-your-credentials.html) and [setting your credentials](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials-node.html).

3. Set the `AWS_REGION` environment variable. e.g.
```
export AWS_REGION=us-west-2
```
See [regions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html) for a list of valid codes.

4. Create the `todo` table:

```
node create_table.js
```
