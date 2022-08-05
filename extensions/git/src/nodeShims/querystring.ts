/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as nodeQuerystring from 'querystring';

export function parse(query: string): nodeQuerystring.ParsedUrlQuery {
	console.log(`querystring.parse called with query: ${query}`);
	return nodeQuerystring.parse(query);
}