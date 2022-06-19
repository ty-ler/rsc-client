import { Buffer } from 'buffer';

// BZ is a magic symbol, h is for huffman and 1 is the level of compression (
// from 1-9)
const BZIP_HEADER = Buffer.from('BZh1'.split('').map((c) => c.charCodeAt(0)));

export function decompress(fileData, _, archiveData, fileSizeCompressed, offset) {
	const compressed = Buffer.from(archiveData.slice(offset, fileSizeCompressed + offset));

	console.log(compressed);
	// const decompressed = Bzip2(Buffer.concat([BZIP_HEADER, compressed]));

	// fileData.set(decompressed);
}
