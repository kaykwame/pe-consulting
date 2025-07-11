<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	const tabs: string[] = ['Skills', 'Experience', 'Education', 'Resume'];
</script>

<div class="app">
	<!-- <Header {tabs} /> -->
	<main class=" mx-auto h-full overflow-hidden overflow-x-hidden">
		<div class="">
			<div class="">
				<slot />
			</div>
		</div>
	</main>
</div>
