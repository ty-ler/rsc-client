import serverOpcodes from '../opcodes/server';

module.exports = {
	[serverOpcodes.APPEARANCE]: function () {
		this.showAppearanceChange = true;
	}
};
