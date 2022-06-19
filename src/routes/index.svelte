<script lang="ts">
	import { onMount } from 'svelte';

	let gameClientContainer: HTMLElement;

	onMount(async () => {
		const mudclient = await (await import('$lib/game/mudclient')).default;

		const mc = new mudclient(gameClientContainer);

		Object.assign(mc.options, {
			middleClickCamera: true,
			mouseWheel: true,
			resetCompass: true,
			zoomCamera: true,
			accountManagement: true,
			mobile: false
		});

		mc.members = true;
		mc.server = '127.0.0.1';
		mc.port = 43595;

		await mc.startApplication(512, 346, 'Runescape by Andrew Gower');
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div bind:this={gameClientContainer} id="game-client" />
