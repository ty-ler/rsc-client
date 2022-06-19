import Long from 'long';

class GameCharacter {
	hash: any;
	name: any;
	serverIndex: number;
	serverId: number;
	currentX: number;
	currentY: number;
	npcId: number;
	stepCount: number;
	animationCurrent: number;
	animationNext: number;
	movingStep: number;
	waypointCurrent: number;
	message: any;
	messageTimeout: number;
	bubbleItem: number;
	bubbleTimeout: number;
	damageTaken: number;
	healthCurrent: number;
	healthMax: number;
	combatTimer: number;
	colourHair: number;
	colourTop: number;
	colourBottom: number;
	colourSkin: number;
	incomingProjectileSprite: number;
	attackingPlayerServerIndex: number;
	attackingNpcServerIndex: number;
	projectileRange: number;
	skullVisible: number;
	waypointsX: Int32Array;
	waypointsY: Int32Array;
	equippedItem: Int32Array;
	level: number;

	constructor() {
		/**
		 * original line... new Long() requires at least 1 arg 'low'
		 * this.hash = new Long();
		 */

		this.hash = new Long(0);
		this.name = null;
		this.serverIndex = 0;
		this.serverId = 0;
		this.currentX = 0;
		this.currentY = 0;
		this.npcId = 0;
		this.stepCount = 0;
		this.animationCurrent = 0;
		this.animationNext = 0;
		this.movingStep = 0;
		this.waypointCurrent = 0;
		this.message = null;
		this.messageTimeout = 0;
		this.bubbleItem = 0;
		this.bubbleTimeout = 0;
		this.damageTaken = 0;
		this.healthCurrent = 0;
		this.healthMax = 0;
		this.combatTimer = 0;
		this.colourHair = 0;
		this.colourTop = 0;
		this.colourBottom = 0;
		this.colourSkin = 0;
		this.incomingProjectileSprite = 0;
		this.attackingPlayerServerIndex = 0;
		this.attackingNpcServerIndex = 0;
		this.projectileRange = 0;
		this.skullVisible = 0;
		this.waypointsX = new Int32Array(10);
		this.waypointsY = new Int32Array(10);
		this.equippedItem = new Int32Array(12);
		this.level = -1;
	}
}

export default GameCharacter;
