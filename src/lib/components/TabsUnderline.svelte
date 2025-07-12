<script lang="ts">
	export let possibleTabs: string[];
	export let currentTab: string = possibleTabs[0];
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<div class="">
	<div class="border-b border-gray-200">
		<nav class="-mb-px flex justify-center" aria-label="Tabs">
			<!-- Current: "border-deernsblue-500 text-deernsblue-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
			{#each possibleTabs as tab}
				<button
					on:click
					on:click={() => {
						currentTab = tab;
						dispatch('tabSelect', tab);
						// localStorage.setItem('currentTab', tab);
					}}
					class="{currentTab === tab
						? 'border-deernsblue-500 text-deernsblue-600'
						: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} border-b-2 px-4 py-4 text-center text-sm font-medium"
					>{tab}</button
				>
			{/each}
		</nav>
	</div>
</div>
