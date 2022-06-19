import serverOpcodes from '../opcodes/server.json';

export default {
	[serverOpcodes.LOGOUT_DENY]: function () {
		this.cantLogout();
	}
};
