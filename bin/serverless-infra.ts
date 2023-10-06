#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ServerlessInfraStack } from '../lib/serverless-infra-stack';

const app = new cdk.App();
new ServerlessInfraStack(app, 'ServerlessInfraStack', {
  //Create the SeverApplication Infra
});
