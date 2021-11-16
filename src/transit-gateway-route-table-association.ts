import * as ec2 from '@aws-cdk/aws-ec2';
import * as core from '@aws-cdk/core';
import { ITransitGatewayAttachment } from './transit-gateway-attachment';
import { ITransitGatewayRouteTable } from './transit-gateway-route-table';

export interface ITransitGatewayRouteTableAssociation extends core.IResource {
  /**
     * The ID of the transit gateway route table association
     * @attribute
     */
  readonly TransitGatewayRouteTableAssociationId: string;
}

abstract class TransitGatewayRouteTableAssociationBase extends core.Resource implements ITransitGatewayRouteTableAssociation {
  public abstract readonly TransitGatewayRouteTableAssociationId: string;
}

/**
 * Typescript API of https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html
 */
export interface TransitGatewayRouteTableAssociationProps {
  /**
    * The transit gateway attachment you want to associate to a route table
    */
  readonly transitGatewayAttachment: ITransitGatewayAttachment;

  /**
    * The transit gateway route table you want the attachment to associate to
    */
  readonly transitGatewayRouteTable: ITransitGatewayRouteTable;

}

/**
 * An AWS Transit Gateway route table association
 *
 * @resource AWS::EC2::TransitGatewayRouteTableAssociation
 */
export class TransitGatewayRouteTableAssociation extends TransitGatewayRouteTableAssociationBase {
  public readonly TransitGatewayRouteTableAssociationId: string;

  constructor(scope: core.Construct, id: string, props: TransitGatewayRouteTableAssociationProps) {
    super(scope, id);


    const resource = new ec2.CfnTransitGatewayRouteTableAssociation(this, 'Resource', {
      transitGatewayAttachmentId: props.transitGatewayAttachment.transitGatewayAttachmentId,
      transitGatewayRouteTableId: props.transitGatewayRouteTable.transitGatewayRouteTableId,
    });

    this.TransitGatewayRouteTableAssociationId = resource.ref;
  }
}