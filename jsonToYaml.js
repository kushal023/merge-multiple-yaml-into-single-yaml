const fs = require('fs');
const YAML = require('json-to-pretty-yaml');
const json = require('./apiSpec.json');

const data = YAML.stringify(json);
fs.writeFileSync('output.yaml', data);
