import appearancePanel from './appearance-panel';
import bankDialog from './bank-dialog';
import chatMessageTabs from './chat-message-tabs';
import combatStyle from './combat-style';
import inventoryTab from './inventory-tab';
import loginPanels from './login-panels';
import logoutDialog from './logout-dialog';
import magicTab from './magic-tab';
import minimapTab from './minimap-tab';
import mobileUI from './mobile-ui';
import optionMenu from './option-menu';
import optionsTab from './options-tab';
import passwordDialog from './password-dialog';
import playerInfoTab from './player-info-tab';
import recoveryPanl from './recovery-panel';
import reportDialog from './report-dialog';
import serverMessageDialog from './server-message-dialog';
import setActiveUiTab from './set-active-ui-tab';
import shopDialog from './shop-dialog';
import sleep from './sleep';
import socialDialog from './social-dialog';
import socialTab from './social-tab';
import tradeConfirmDialog from './trade-confirm-dialog';
import tradeDialog from './trade-dialog';
import welcomeDialog from './welcome-dialog';
import wildernessDialog from './wilderness-dialog';
import type mudclient from '../mudclient';

const components = [
	appearancePanel,
	bankDialog,
	chatMessageTabs,
	combatStyle,
	inventoryTab,
	loginPanels,
	logoutDialog,
	magicTab,
	minimapTab,
	mobileUI,
	optionMenu,
	optionsTab,
	passwordDialog,
	playerInfoTab,
	recoveryPanl,
	reportDialog,
	serverMessageDialog,
	setActiveUiTab,
	shopDialog,
	sleep,
	socialDialog,
	socialTab,
	tradeConfirmDialog,
	tradeDialog,
	welcomeDialog,
	wildernessDialog
];

function applyUIComponents(mudclient: mudclient) {
	components.forEach((comp) => {
		for (const [propertyName, member] of Object.entries(comp)) {
			if (typeof member === 'function') {
				mudclient[propertyName] = member.bind(mudclient);
			} else {
				mudclient[propertyName] = member;
			}
		}
	});
}

// function applyUIComponents(mudclient) {
// 	const components = bulk(__dirname, ['*.js']);

// 	for (const [componentName, component] of Object.entries(components)) {
// 		if (/^_|index/.test(componentName)) {
// 			continue;
// 		}

// 		for (const [propertyName, member] of Object.entries(component)) {
// 			if (typeof member === 'function') {
// 				mudclient[propertyName] = member.bind(mudclient);
// 			} else {
// 				mudclient[propertyName] = member;
// 			}
// 		}
// 	}
// }

export default applyUIComponents;
