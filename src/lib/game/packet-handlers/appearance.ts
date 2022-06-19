import serverOpcodes from '../opcodes/server.json';

export default {
	[serverOpcodes.APPEARANCE]: function () {
		this.showAppearanceChange = true;
	}
};
