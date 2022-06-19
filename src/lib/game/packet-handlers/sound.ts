import serverOpcodes from '../opcodes/server.json';

function fromCharArray(a) {
	return Array.from(a)
		.map((c: number) => String.fromCharCode(c))
		.join('');
}

export default {
	[serverOpcodes.SOUND]: function (data, size) {
		const soundName = fromCharArray(data.slice(1, size));
		this.playSoundFile(soundName);
	}
};
