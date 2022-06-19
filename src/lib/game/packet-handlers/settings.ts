import Utility from '../utility';
import serverOpcodes from '../opcodes/server.json';

export default {
	[serverOpcodes.PRIVACY_SETTINGS]: function (data) {
		this.settingsBlockChat = data[1];
		this.settingsBlockPrivate = data[2];
		this.settingsBlockTrade = data[3];
		this.settingsBlockDuel = data[4];
	},
	[serverOpcodes.GAME_SETTINGS]: function (data) {
		this.optionCameraModeAuto = !!Utility.getUnsignedByte(data[1]);
		this.optionMouseButtonOne = !!Utility.getUnsignedByte(data[2]);
		this.optionSoundDisabled = !!Utility.getUnsignedByte(data[3]);
	}
};
