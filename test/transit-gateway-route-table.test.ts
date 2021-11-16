import '@aws-cdk/assert/jest';
import * as core from '@aws-cdk/core';
import { TransitGateway, TransitGatewayRouteTable } from '../src';

let stack: core.Stack;
let tgw: TransitGateway;

beforeEach(() => {
  stack = new core.Stack();
  tgw = new TransitGateway(stack, 'TGW');
});

describe('transit-gateway-route-table', () => {
  test('transit gateway route table is created correctly', () => {
    // GIVEN
    const samples = [
      {
        name: 'TGWRouteTable',
        transitGateway: tgw,
        tags: [
          new core.Tag('ExampleKeyA', 'ExampleValueA'),
          new core.Tag('ExampleKeyB', 'ExampleValueB'),
        ],
      },

    ];

    // WHEN
    for (const [i, sample] of samples.entries()) {
      new TransitGatewayRouteTable(stack, `RouteTable${i}`, {
        ...sample,
      });

      // THEN
      expect(stack).toHaveResource('AWS::EC2::TransitGatewayRouteTable');
    }

  });
});