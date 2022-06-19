import type mudclient from '../mudclient';

import appearance from './appearance';
import bank from './bank';
import closeConnection from './close-connection';
import death from './death';
import duel from './duel';
import inventory from './inventory';
import logoutDeny from './logout-deny';
import messages from './messages';
import optionList from './option-list';
import playerStats from './player-stats';
import prayer from './prayer';
import regionEntityUpdate from './region-entity-update';
import regionGroundItems from './region-ground-items';
import regionNpcUpdate from './region-npc-update';
import regionNpcs from './region-npcs';
import regionObjects from './region-objects';
import regionPlayerUpdate from './region-player-update';
import regionPlayers from './region-players';
import regionWallObjects from './region-wall-objects';
import settings from './settings';
import shop from './shop';
import sleep from './sleep';
import social from './social';
import sound from './sound';
import teleportBubble from './teleport-bubble';
import trade from './trade';
import worldInfo from './world-info';

const handlersArray = [
	appearance,
	bank,
	closeConnection,
	death,
	duel,
	inventory,
	logoutDeny,
	messages,
	optionList,
	playerStats,
	prayer,
	regionEntityUpdate,
	regionGroundItems,
	regionNpcUpdate,
	regionNpcs,
	regionObjects,
	regionPlayerUpdate,
	regionPlayers,
	regionWallObjects,
	settings,
	shop,
	sleep,
	social,
	sound,
	teleportBubble,
	trade,
	worldInfo
];

function getPacketHandlers(mudclient: mudclient) {
	const packetMap = {};

	handlersArray.forEach((handler) => {
		Object.entries(handler).forEach(([id, fn]) => {
			packetMap[id] = fn.bind(mudclient);
		});
	});

	return packetMap;
}

export default getPacketHandlers;
