<script lang="ts">
	import { page } from '$app/state';

	// import { slide } from 'svelte/transition';
	import { heroText } from '$lib/general/helpers';
	export let pageTitle: string = 'home';
</script>

<div class="flex justify-center">
	<div class="laptop:grid-cols-1 tablet:grid-cols-1 phone:grid-cols-1 mt-10 grid">
		<div
			class="laptop:col-span-1 tablet:col-span-1 phone:grid-cols-1 flex items-center justify-center"
		>
			<div class="mx-auto">
				<h4
					class="phone:text-2xl tablet:text-2xl laptop:text-3xl desktop:text-3xl mb-10 text-left text-xl font-bold text-gray-50"
				>
					{heroText[pageTitle].title}
				</h4>
				<p
					class="phone:text-xl tablet:text-xl laptop:text-xl desktop:text-xl mx-auto font-mono text-sm text-wrap text-gray-50"
				>
					{heroText[pageTitle].description}
				</p>
			</div>
		</div>
	</div>
</div>
