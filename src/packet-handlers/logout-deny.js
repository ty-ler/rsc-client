import serverOpcodes from '../opcodes/server';

module.exports = {
	[serverOpcodes.LOGOUT_DENY]: function () {
		this.cantLogout();
	}
};
