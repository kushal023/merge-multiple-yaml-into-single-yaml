let eventsSchema = require('/home/kushal/Documents/practice JS/multiple-yam/last.json');
const _ = require('lodash');
const fs = require('fs');

const swaggerCommanPart = {
  swagger: '2.0',
  info: {
    title: 'This is my SWAGGER',
    description: 'This is my documentation made by me',
    version: 1.0,
    contact: {
      email: 'kushal@mindgrep.com',
    },
    liscence: {
      name: 'Apache 2.0',
      url: 'http://apache.org/',
    },
    servers: {
      '-url': 'http://company.com/',
      description: 'This is my company server',
    },
  },
  schemes: ['http', 'https'],
  paths: {},
};
const apiSpecdata = 'finalApiSpecdata.json';

Object.keys(eventsSchema).forEach((event) => {
  if (event.includes('.post')) {
    const apiEndPoint = event.split('.')[0];
    const method = event.split('.')[2];
    const eventSchema = eventsSchema[event];
    let responsesData = eventsSchema[event].responses;
    swaggerCommanPart.paths[apiEndPoint] = {
      [method]: {
        responses: responsesData,
        parameters: eventSchema.data.schema.body,
        //  parameters: eventSchema.data.schema.params,
      },
    };
    fs.writeFileSync(apiSpecdata, JSON.stringify(swaggerCommanPart));
  }
});
