const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'NukaCody',
  authorAddress: 'codyjp8@gmail.com',
  cdkVersion: '1.132.0',
  defaultReleaseBranch: 'main',
  name: 'tgw-l2',
  repositoryUrl: 'https://github.com/codyjp8/tgw-l2.git',

  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-ec2',
  ], /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,  /* AWS CDK modules required for testing. */
  // deps: [],                        /* Runtime dependencies of this module. */
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                     /* Build dependencies for this module. */
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
project.synth();