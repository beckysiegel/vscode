/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as nodeFs from 'fs';
import { Abortable } from 'node:events';
import * as nodePromises from 'node:fs/promises';

export function stat(path: string, cb: (err: NodeJS.ErrnoException | null, stat: nodeFs.Stats) => void): void {
	console.log(`fs.stat called with path: ${path}`);
	return nodeFs.stat(path, cb);
}
export function accessSync(path: string, mode?: number): void {
	console.log(`fs.accessSync called with path: ${path}`);
	return nodeFs.accessSync(path, mode);
}
export function exists(path: string, cb: (exists: boolean) => void): void {
	console.log(`fs.exists called with path: ${path}`);
	return nodeFs.exists(path, cb);
}
function native(path: string, options: nodeFs.EncodingOption, cb: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void): void {
	console.log(`fs.exists called with path: ${path}`);
	return nodeFs.realpath.native(path, options, cb);
}

export const realpath = {
	native,
};

export function unlinkSync(file: string): void {
	console.log(`fs.unlinkSync called with file: ${file}`);
	return nodeFs.unlinkSync(file);
}
export function writeFileSync(file: string, data: string, options?: nodeFs.WriteFileOptions): void {
	console.log(`fs.writeFileSync called with file: ${file}`);
	return nodeFs.writeFileSync(file, data, options);
}
export function createReadStream(path: string, options?: BufferEncoding | undefined | { encoding: BufferEncoding | undefined }): nodeFs.ReadStream {
	console.log(`fs.createReadStream called with path: ${path}`);
	return nodeFs.createReadStream(path, options);
}
export function readFile(path: string,
	options:
		| ({
			encoding: BufferEncoding;
			flag?: string | undefined;
		} & Abortable)
		| BufferEncoding, cb: (err: NodeJS.ErrnoException | null, data: string) => void): void {
	console.log(`fs.readFile called with path: ${path}`);
	return nodeFs.readFile(path, options, cb);
}

function unlink(ipcHandlePath: string) {
	console.log(`promises.unlink called with ipcHandlePath: ${ipcHandlePath}`);
	return nodePromises.unlink(ipcHandlePath);
}

function promisesStat(path: string): Promise<nodeFs.Stats> {
	console.log(`promises.stat called`);
	return nodePromises.stat(path);
}

function readdir(path: string, options: nodeFs.ObjectEncodingOptions & {
	withFileTypes: true;
}): Promise<nodeFs.Dirent[]> {
	console.log(`promises.readdir called with path: ${path}`);

	return nodePromises.readdir(path, options);
}

function mkdir(path: string, mode?: number): Promise<void> {
	console.log(`promises.mkdir called`);
	return nodePromises.mkdir(path, mode);
}

function promiseReadFile(path: string,
	options:
		| ({
			encoding: BufferEncoding;
			flag?: string | undefined;
		} & Abortable)
		| BufferEncoding): Promise<string> {
	console.log(`fs.readFile called with path: ${path}`);
	return nodePromises.readFile(path, options);
}

export const promises = {
	unlink,
	readFile: promiseReadFile,
	stat: promisesStat,
	mkdir,
	readdir
};

export { Stats } from 'fs';
export { constants } from 'fs';
