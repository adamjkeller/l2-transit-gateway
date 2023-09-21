import { awscdk } from "projen";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Adam Keller",
  authorAddress: "adam@adamjkeller.com",
  cdkVersion: "2.96.2",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.0.0",
  name: "l2-transit-gateway",
  projenrcTs: true,
  repositoryUrl: "https://github.com/adam/l2-transit-gateway.git",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
