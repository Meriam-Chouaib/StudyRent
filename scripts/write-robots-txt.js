#!/bin/node
const fs = require('fs');
const { argv } = require('yargs');

const { env } = argv;

// Accepted environment params.
const acceptedEnvs = ['dev', 'prod'];

// Function that validate if the param passed to the script is a valid environment.
function validateParams() {
  console.log(`Validating params...`);
  if (!env) {
    console.log(`Error.  Please inform a valid environment: ${acceptedEnvs.join(', ')}.`);
    process.exit(1);
  }

  if (!acceptedEnvs.includes(env)) {
    console.log(`Error. Wrong environment, choose one of those: ${acceptedEnvs.join(', ')}.`);
    process.exit(1);
  }
}

// Function that replaces the file content with the right content.
function setEnvironment() {
  console.log(`Setting environmet to ${env}...`);
  // Create a non-crawlable robots.txt in non-production environments
  const crawlableRobotsTxt = `User-agent: *\nAllow: /`;
  const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`;

  const robotsTxt = env === 'prod' ? crawlableRobotsTxt : uncrawlableRobotsTxt;

  // Write out robots.txt file in public folder
  fs.writeFileSync('public/robots.txt', robotsTxt);

  console.log(`Generated a ${env === 'prod' ? 'crawlable' : 'non-crawlable'} public/robots.txt`);
  process.exit(0);
}

// Script initialization
validateParams();
setEnvironment();
