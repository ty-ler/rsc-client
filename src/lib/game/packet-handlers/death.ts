import serverOpcodes from '../opcodes/server.json';

export default {
	[serverOpcodes.PLAYER_DIED]: function () {
		this.deathScreenTimeout = 250;
	}
};
