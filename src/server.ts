import { ServerCredentials } from 'grpc';
import { grpcServer } from './config';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

let port = 50051;
if (process.env.NODE_APP_INSTANCE) {
  port += Number(process.env.NODE_APP_INSTANCE);
}

async function start() {
  grpcServer.bind(`0.0.0.0:${port}`, ServerCredentials.createInsecure());
  grpcServer.start();

  console.log(`server stated at port 50051`);
}

start();
