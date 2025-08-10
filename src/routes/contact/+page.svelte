<script lang="ts">
	import CloseSVG from '$lib/components/SVGs/CloseSVG.svelte';
	import { tabsObj } from '$lib/general/helpers';
	import { showProj } from '$lib/stores/showProjStore';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import about from '$lib/jsondata/about.json';

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
		in:fly={{ y: 150, duration: 1700 }}
		class="phone:h-[20vh] tablet:h-[30vh] laptop:h-[40vh] desktop:h-[40vh] relative mb-12 h-[30vh] items-center justify-center space-y-12 bg-cover bg-center bg-no-repeat"
		style="background-image: url('/images/header-hero-img-0.jpg');"
	>
		<!-- <Header {tabs} /> -->
		<div class="mx-auto max-w-[1120px] min-w-[400px] px-3">
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
							<svg
								class="h-5 w-5 text-gray-50"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
						<a
							href="/"
							class="laptop:gap-x-11 phone:text-2xl flex min-w-full text-xl leading-6 font-semibold text-gray-50"
							>P&E Consulting</a
						>
					</div>
					<nav
						class="laptop:flex laptop:gap-x-11 laptop:text-sm laptop:font-semibold laptop:leading-6 laptop:text-gray-50 hidden"
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
							class="tablet:max-w-sm tablet:px-6 tablet:ring-1 tablet:ring-gray-900/10 fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6"
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
										href="/{key.toLocaleLowerCase()}"
										on:click={() => {
											showMobileMenu = false;
										}}
										class="-mx-3 block rounded-lg px-3 py-2 font-mono text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
										>{tab}</a
									>
								{/each}
								<a
									href="/"
									on:click={() => {
										showMobileMenu = false;
									}}
									class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
									>Home</a
								>
							</div>
						</div>
					</div>
				{/if}
			</header>

			<style>
				#myname {
					font-family: 'Brush Script MT', cursive;
				}
			</style>

			<div class="">
				<div
					class="laptop:grid-cols-1 tablet:grid-cols-1 phone:grid-cols-1 desktop:mt-26 mt-10 grid"
				>
					<div
						class="laptop:col-span-1 tablet:col-span-1 phone:grid-cols-1 flex items-center justify-start"
					>
						<h1
							class="phone:text-2xl tablet:text-2xl laptop:text-3xl desktop:text-5xl mb-6 text-left text-xl font-bold text-gray-50"
						>
							Contact Us
						</h1>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section>
		<div class="mx-auto grid max-w-[1120px] min-w-[400px] grid-cols-3 gap-y-10 px-4">
			<!-- <form class="col-span-3" method="POST" action="?/login">
				<label>
					Email
					<input name="email" type="email" />
				</label>
				<label>
					Message
					<input name="password" type="text" />
				</label>
				<button>Send</button>
			</form> -->
		</div>
	</section>
</div>

<style>
	#myname {
		/* font-family: 'Brush Script MT', cursive; */
	}
</style>
