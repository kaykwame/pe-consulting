<script lang="ts">
	import Footer from '$lib/components/footer/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	const tabs: string[] = ['Skills', 'Experience', 'Education', 'Resume'];
</script>

<div class="app mb-10">
	<!-- <Header {tabs} /> -->
	<main class=" mx-auto h-full overflow-hidden overflow-x-hidden">
		<div class="">
			<div class="">
				<slot />
				<Footer />
			</div>
		</div>
	</main>
</div>
