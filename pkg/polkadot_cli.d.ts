/* tslint:disable */
/* eslint-disable */
/**
* Starts the client.
* @param {string} chain_spec 
* @param {string} log_level 
* @returns {any} 
*/
export function start_client(chain_spec: string, log_level: string): any;
/**
* A running client.
*/
export class Client {
  free(): void;
/**
* Allows starting an RPC request. Returns a `Promise` containing the result of that request.
* @param {string} rpc 
* @returns {any} 
*/
  rpcSend(rpc: string): any;
/**
* Subscribes to an RPC pubsub endpoint.
* @param {string} rpc 
* @param {any} callback 
*/
  rpcSubscribe(rpc: string, callback: any): void;
}

/**
* If `module_or_path` is {RequestInfo}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {RequestInfo | BufferSource | WebAssembly.Module} module_or_path
*
* @returns {Promise<any>}
*/
export default function init (module_or_path?: RequestInfo | BufferSource | WebAssembly.Module): Promise<any>;
        