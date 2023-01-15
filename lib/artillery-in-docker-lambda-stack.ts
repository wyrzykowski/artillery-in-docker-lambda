import * as cdk from 'aws-cdk-lib';
import * as lambda from "aws-cdk-lib/aws-lambda"
import { Construct } from 'constructs';
import path = require('path');

export class ArtilleryInDockerLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.DockerImageFunction(this, 'ArtilleryInDocker', {
      code: lambda.DockerImageCode.fromImageAsset(path.join(__dirname, `../image`)),
      memorySize: 3008,
      architecture: lambda.Architecture.X86_64,
      timeout: cdk.Duration.minutes(5),
      functionName: "ArtilleryInDockerLambda",
      environment: {
        NO_UPDATE_NOTIFIER: 'true'
      }
    });
  }
}
