'format cjs';

const CC_CONFIG_NAME = '.cc-config.js';

var findConfig = require('find-config');
var path = require('path');
var engine = require('./engine');
var configLoader = require('commitizen').configLoader;

const readConfigFile = () => {
  let ccConfig = findConfig.require(CC_CONFIG_NAME, { home: false });
  if (ccConfig) {
    return ccConfig;
  }
  let pkg = findConfig('package.json', { home: false });
  if (pkg) {
    const pkgDir = path.dirname(pkg);
    pkg = require(pkg);
    if (pkg.config && pkg.config['cc-customizable'] && pkg.config['cc-customizable'].config) {
      // resolve relative to discovered package.json
      const pkgPath = path.resolve(pkgDir, pkg.config['cc-customizable'].config);
      return require(pkgPath);
    }
  }
  ccConfig = findConfig.require(CC_CONFIG_NAME, { home: true });
  if (ccConfig) {
    return ccConfig;
  }
  ccConfig = require('./config');
  if (ccConfig) {
    return ccConfig;
  }
  return null;
};

var conventionalCommitConfig = readConfigFile();
var config = configLoader.load() || {};

var options = {
  types: conventionalCommitConfig.types || config.types,
  messages: conventionalCommitConfig.messages || {} ,
  defaultType: process.env.CZ_TYPE || config.defaultType,
  defaultScope: process.env.CZ_SCOPE || config.defaultScope,
  defaultSubject: process.env.CZ_SUBJECT || config.defaultSubject,
  defaultBody: process.env.CZ_BODY || config.defaultBody,
  defaultIssues: process.env.CZ_ISSUES || config.defaultIssues,
  disableScopeLowerCase:
    process.env.DISABLE_SCOPE_LOWERCASE || config.disableScopeLowerCase,
  maxHeaderWidth:
    (process.env.CZ_MAX_HEADER_WIDTH &&
      parseInt(process.env.CZ_MAX_HEADER_WIDTH)) ||
    config.maxHeaderWidth ||
    100,
  maxLineWidth:
    (process.env.CZ_MAX_LINE_WIDTH &&
      parseInt(process.env.CZ_MAX_LINE_WIDTH)) ||
    config.maxLineWidth ||
    100
};

(function(options) {
  try {
    var commitlintLoad = require('@commitlint/load');
    commitlintLoad().then(function(clConfig) {
      if (clConfig.rules) {
        var maxHeaderLengthRule = clConfig.rules['header-max-length'];
        if (
          typeof maxHeaderLengthRule === 'object' &&
          maxHeaderLengthRule.length >= 3 &&
          !process.env.CZ_MAX_HEADER_WIDTH &&
          !config.maxHeaderWidth
        ) {
          options.maxHeaderWidth = maxHeaderLengthRule[2];
        }
      }
    });
  } catch (err) {}
})(options);

module.exports = engine(options);
