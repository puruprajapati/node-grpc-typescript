import { Server } from 'grpc';
import { CatalogService, catalogHandler } from '../api/handlers/catalog.handler';

const grpcServer = new Server({
  'grpc.max_receive_message_length': -1,
  'grpc.max_send_message_length': -1,
});

grpcServer.addService(CatalogService, catalogHandler);

export { grpcServer };
