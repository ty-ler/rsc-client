import PCMPlayer from 'pcm-player';
import { mulaw } from 'alawmulaw';

class StreamAudioPlayer {
	player: PCMPlayer;

	constructor() {
		this.player = new PCMPlayer({
			flushTime: 0,
			inputCodec: 'Int16',
			channels: 1,
			sampleRate: 8000
		});
	}

	stopPlayer() {
		this.player.destroy();
	}

	writeStream(buffer, offset, length) {
		const decoded = mulaw.decode(new Uint8Array(buffer.slice(offset, offset + length)));

		this.player.feed(decoded);
	}
}

export default StreamAudioPlayer;
