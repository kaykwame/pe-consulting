<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import projects from '$lib/jsondata/projects.json';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div>
	<p class="text-center font-semibold font-mono text-gray-600">Projects</p>
	<div
		class="grid grid-cols-1 desktop:grid-cols-2 laptop:grid-cols-2 tablet:grid-cols-2 justify-center"
	>
		{#each projects as proj}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="col-span-1 my-3"
				on:click={() => {
					dispatch('slideProject');
				}}
			>
				<ProjectCard {proj} />
			</div>
		{/each}
	</div>
</div>
