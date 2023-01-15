#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ArtilleryInDockerLambdaStack } from '../lib/artillery-in-docker-lambda-stack';

const app = new cdk.App();
new ArtilleryInDockerLambdaStack(app, 'ArtilleryInDockerLambdaStack', {
});