/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as nodeHttp from 'http';

export function request(options: nodeHttp.RequestOptions, cb?: (res: nodeHttp.IncomingMessage) => void): nodeHttp.ClientRequest {
	console.log(`http.request called`);
	return nodeHttp.request(options, cb);
}

export function createServer(): nodeHttp.Server {
	console.log(`http.createServer called`);
	return nodeHttp.createServer();
}

export { RequestOptions, Server, IncomingMessage, ServerResponse } from 'http';
