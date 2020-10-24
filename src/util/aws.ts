import AWS, { AWSError } from 'aws-sdk';
import { ItemList, ScanOutput } from 'aws-sdk/clients/dynamodb';
import { PromiseResult } from 'aws-sdk/lib/request';
import { isPost, Post } from '../types';

AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:e1959c98-b6d1-4c50-aaad-f200deab99c6',
});

const db = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

/**
 * Unmarshall post objects obtained from DynamoDB
 * @param - response from AWS.DynamoDB.scan
 */
function unmarshallPosts(itemsList: ItemList): Array<Post> {
  const res = itemsList.reduce((result: Array<Post>, item) => {
    const unmarshalledItem = AWS.DynamoDB.Converter.unmarshall(item);
    if (isPost(unmarshalledItem)) {
      result.push(unmarshalledItem);
    }
    return result;
  }, []);
  return res;
}

/** Scan DynamoDB table for all posts */
export async function getAllPosts(): Promise<Array<Post> | undefined> {
  const params = {
    ProjectionExpression: 'title, content, created',
    TableName: 'posts',
  };
  const res: PromiseResult<ScanOutput, AWSError> = await db
    .scan(params)
    .promise();
  if (res?.Items) {
    return unmarshallPosts(res.Items);
  }
}
