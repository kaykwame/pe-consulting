<script lang="ts">
	import CloseSVG from '$lib/components/SVGs/CloseSVG.svelte';
	import { about, aboutImages, people, tabsObj } from '$lib/general/helpers';
	import { showProj } from '$lib/stores/showProjStore';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import Hero from '$lib/components/Hero.svelte';
	import Card from '$lib/components/cards/Card.svelte';
	import whoweare from '../../../static/images/icons/whoweare.png?url';
	import ThreeLinesSVG from '$lib/components/SVGs/ThreeLinesSVG.svelte';

	let showMobileMenu: boolean = false;

	onMount(() => {
		showProj.set(false);
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page" />
</svelte:head>
<div>
	<section
		class="phone:min-h-[80svh] tablet:min-h-[100svh] laptop:min-h-[70vh] desktop:min-h-[70vh] relative min-h-[100svh] items-center justify-center space-y-12 bg-cover bg-center bg-no-repeat"
		style="background-image: url('/images/header-hero-img-4.jpg');"
	>
		<!-- <Header {tabs} /> -->
		<div class="mx-auto max-w-[1120px] min-w-[300px] px-3">
			<header class="inset-x-0 top-0 z-50 flex h-16 border-b border-gray-50">
				<div class="mx-auto flex w-full max-w-7xl items-center justify-between">
					<div class="flex flex-1 items-center gap-x-3">
						<button
							on:click={() => {
								showMobileMenu = true;
							}}
							type="button"
							class="laptop:hidden -m-3 p-3"
						>
							<span class="sr-only">Open main menu</span>
							<ThreeLinesSVG />
						</button>
						<button
							on:click={() => goto('/')}
							class="laptop:gap-x-11 phone:text-2xl flex min-w-full text-xl leading-6 font-bold text-gray-50"
							>P&E Consulting LLC</button
						>
					</div>
					<nav
						class="laptop:flex laptop:gap-x-11 laptop:font-semibold laptop:leading-6 laptop:text-gray-50 hidden text-lg"
					>
						{#each Object.entries(tabsObj) as [key, tab]}
							<a href="/{tab == 'Home' ? '' : key.toLocaleLowerCase()}">{tab}</a>
						{/each}
					</nav>
				</div>
				{#if showMobileMenu}
					<!-- Mobile menu, show/hide based on menu open state. -->
					<div class="tablet:hidden" role="dialog" aria-modal="true">
						<!-- Background backdrop, show/hide based on slide-over state. -->
						<div class="fixed inset-0 z-50"></div>
						<div
							class="tablet:max-w-sm tablet:px-6 tablet:ring-1 tablet:ring-gray-900/10 fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-none px-4 pb-6 backdrop-blur-sm"
						>
							<div class="-ml-0.5 flex h-16 items-center gap-x-6">
								<!-- svelte-ignore a11y_click_events_have_key_events -->
								<!-- svelte-ignore a11y_no_static_element_interactions -->
								<div
									on:click={() => {
										showMobileMenu = false;
									}}
									class="-m-2.5 p-2.5 text-gray-700"
								>
									<span class="sr-only">Close menu</span>
									<button
										on:click={() => {
											showProj.set(false);
										}}
									>
										<CloseSVG />
									</button>
								</div>
							</div>
							<div class="mt-2 space-y-2">
								{#each Object.entries(tabsObj) as [key, tab]}
									<a
										href="/{tab == 'Home' ? '' : key.toLocaleLowerCase()}"
										on:click={() => {
											showMobileMenu = false;
										}}
										class="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7 font-semibold text-white"
										>{tab}</a
									>
								{/each}
							</div>
						</div>
					</div>
				{/if}
			</header>
			<Hero pageTitle="about" />

			<style>
				#myname {
					font-family: 'Brush Script MT', cursive;
				}
			</style>
		</div>
	</section>

	<section class="bg-gray-100/45 py-16">
		<div class="laptop:grid-cols-2 mx-auto grid max-w-[1120px] grid-cols-1 gap-x-10 gap-y-10 px-4">
			{#each Object.entries(about) as [title, description]}
				<Card extraClass="col-span-1 px-8 py-6" bg="blue">
					<div class="flex justify-center">
						<img
							src={`/images/icons/${aboutImages[title]}`}
							alt={title}
							class="phone:h-12 phone:w-12 tablet:h-14 tablet:w-14 laptop:h-16 laptop:w-16 desktop:h-20 desktop:w-20 align-middle text-blue-500"
						/>
					</div>
					<p class="mb-3 text-center text-2xl font-bold text-gray-700">
						{title}
					</p>
					<div class="">
						{#each description as item}
							<p class="flex justify-center text-center text-lg text-gray-500">
								{item}
							</p>
						{/each}
					</div>
				</Card>
			{/each}
		</div>
	</section>
	<section class=" bg-white pt-12 pb-20">
		<p class="mb-8 text-center text-4xl font-bold text-gray-800">Meet Our Expert Consultants</p>
		<hr class="gull mx-auto mb-8 w-[80%] border-t-2 border-yellow-500" />
		<div class="laptop:grid-cols-2 mx-auto grid max-w-[1120px] grid-cols-1 gap-x-10 gap-y-10 px-4">
			{#each Object.values(people) as person}
				<Card extraClass="col-span-1 px-8 py-6">
					<div class="flex flex-col items-center gap-y-4">
						<img
							src={`/images/about/${person.image}`}
							alt={person.name}
							class="phone:h-24 phone:w-24 tablet:h-32 tablet:w-32 laptop:h-44 laptop:w-44 desktop:h-56 desktop:w-56 rounded-full object-cover shadow"
						/>
						<p class="text-center text-3xl font-bold text-gray-800">
							{person.name}
						</p>
						<p class="text-center text-xl font-semibold text-gray-700">
							{person.title}
						</p>
						<p class="text-center text-base font-normal text-gray-500">
							{person.years}
						</p>
						<p class="text-center text-lg text-gray-500">
							{person.bio}
						</p>
					</div>
				</Card>
			{/each}
		</div>
	</section>
</div>

<style>
	#myname {
		/* font-family: 'Brush Script MT', cursive; */
	}
</style>
