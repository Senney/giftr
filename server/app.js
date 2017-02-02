import http from 'http';
import Fortune from 'fortune';
import FortuneHTTP from 'fortune-http';
import FortuneMongoDBAdapter from 'fortune-mongodb';
import FortuneJSONAPISerializer from 'fortune-json-api';
import gift from './types/gift';

const store = Fortune(gift, {
  adapter: [
    FortuneMongoDBAdapter,
    { url: 'mongodb://localhost:27017/giftr' }
  ]
});

const fortuneHttp = FortuneHTTP(store, {
  serializers: [
    FortuneJSONAPISerializer
  ]
})

const server = http.createServer((request, response) => {
  fortuneHttp(request, response).catch((error) => console.error(error));
});

server.listen(3000);
