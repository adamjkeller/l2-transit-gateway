import '@aws-cdk/assert/jest';
import * as core from '@aws-cdk/core';
import { TransitGateway } from '../src';

let stack: core.Stack;

beforeEach(() => {
  stack = new core.Stack();
});

describe('transit-gateway', () => {
  test('transit gateway is created correctly', () => {
    // GIVEN & WHEN
    new TransitGateway(stack, 'TGW');

    // THEN
    expect(stack).toHaveResource('AWS::EC2::TransitGateway');

  });
});