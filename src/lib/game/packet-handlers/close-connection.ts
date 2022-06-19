import serverOpcodes from '../opcodes/server.json';

export default {
	[serverOpcodes.CLOSE_CONNECTION]: function () {
		this.closeConnection();
	}
};
