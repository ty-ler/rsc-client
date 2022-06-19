import { Buffer } from 'buffer';
// import { decompress as bzip2 } from 'compressjs';
import Bunzip from 'seek-bzip';
// import { decompress as bzip2 } from './bzip2';
// import { deflate } from 'pako';

// BZ is a magic symbol, h is for huffman and 1 is the level of compression (
// from 1-9)
const BZIP_HEADER = Buffer.from('BZh1'.split('').map((c) => c.charCodeAt(0)));

export function decompress(fileData, _, archiveData, fileSizeCompressed, offset) {
	const compressed = Buffer.from(archiveData.slice(offset, fileSizeCompressed + offset));

	console.log(compressed);
	const decompressed = Bunzip.decode(Buffer.concat([BZIP_HEADER, compressed]));

	console.log(decompressed);

	fileData.set(decompressed);
}
