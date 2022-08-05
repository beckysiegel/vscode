/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as nodePath from 'path';

export function join(...paths: string[]): string {
	console.log(`path.join called with paths: ${paths}`);
	return nodePath.join(...paths);
}
export function normalize(path: string): string {
	console.log(`path.normalize called with path: ${path}`);
	return nodePath.normalize(path);
}
export function isAbsolute(path: string): boolean {
	console.log(`path.isAbsolute called with path: ${path}`);
	return nodePath.isAbsolute(path);
}
export function basename(path: string): string {
	console.log(`path.basename called with path: ${path}`);
	return nodePath.basename(path);
}
export function dirname(path: string): string {
	console.log(`path.dirname called with path: ${path}`);
	return nodePath.dirname(path);
}
export function relative(from: string, to: string): string {
	console.log(`path.relative called with from: ${from}, to: ${to}`);
	return nodePath.relative(from, to);
}

function posixExport() {
	console.log('path.posix called');
	return nodePath.posix;
}

function sepExport() {
	console.log('path.sep called');
	return nodePath.sep;
}

export const posix = posixExport();
export const sep = sepExport();
