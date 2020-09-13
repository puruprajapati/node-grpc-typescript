import { ServiceError as grpcServiceError, status, ServerUnaryCall } from 'grpc';
import { logger } from './';

export class ServiceError implements grpcServiceError {
  public name: string = 'ServiceError';

  constructor(public code: status, public message: string) {}
}

export function serviceError(code: status, message: string): grpcServiceError {
  return {
    name: 'ServiceError',
    code,
    message,
  };
}

/*
- errorHandler will log all the required information
- errorHandler will parse the error and throw customized or meaningfull information
- errorHandler contains 5 parameter
  1. call : call data, it contains all the request information and metadat
  2. errorName: it is the name of the error thats get logged
  3. code: it is GRPC error status code
  4. message: this is the message to be displayed in error in application
              this is optional parameter
  5. error: this is custom error, if need to pass error from any place other than handler, this is the best choice
            this will override option 4 messge
            this is also optional parameter
- if neither parameter 4 and 5 being passed to all this method, errorHandler will return error message 'Something went wrong' as default
*/
export function errorHandler(call: ServerUnaryCall<any>, errorName: string, code: status, message?: string, error?: CustomError) {
  logger.error(errorName, error && error.message ? error.message : '', call.request.toObject(), call.metadata.getMap());
  if (error && error.hasOwnProperty('type')) {
    return new ServiceError(code, error.message);
  } else {
    return new ServiceError(code, message || 'Something Went Wrong');
  }
}

export class CustomError extends Error {
  public type: string;
  constructor(message) {
    super(message);
    this.type = 'CustomError';
  }
}
