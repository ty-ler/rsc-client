import serverOpcodes from '../opcodes/server';

module.exports = {
	[serverOpcodes.CLOSE_CONNECTION]: function () {
		this.closeConnection();
	}
};
