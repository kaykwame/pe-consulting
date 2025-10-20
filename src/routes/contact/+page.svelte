<script lang="ts">
	import CloseSVG from '$lib/components/SVGs/CloseSVG.svelte';
	import { tabsObj } from '$lib/general/helpers';
	import { showProj } from '$lib/stores/showProjStore';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import about from '$lib/jsondata/about.json';
	import { goto } from '$app/navigation';
	import Hero from '$lib/components/Hero.svelte';

	let showMobileMenu: boolean = false;

	onMount(() => {
		showProj.set(false);
	});

	// New: client submit handler (no UI layout changes)
	let submitting = false;

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (submitting) return;
		submitting = true;

		const form = e.currentTarget as HTMLFormElement;
		const fd = new FormData(form);

		try {
			const res = await fetch('/api/send-mail', {
				method: 'POST',
				body: fd
			});

			if (res.ok) {
				alert('Message sent successfully.');
				form.reset();
			} else {
				const json = await res.json().catch(() => null);
				alert('Send failed: ' + (json?.error ?? res.statusText));
			}
		} catch (err: any) {
			alert('Send failed: ' + (err?.message ?? 'unknown error'));
		} finally {
			submitting = false;
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page" />
</svelte:head>
<div>
	<section
		in:fade={{ duration: 1000 }}
		class="phone:h-[50vh] tablet:h-[60vh] laptop:h-[70vh] desktop:h-[70vh] relative h-[60vh] items-center justify-center space-y-12 bg-cover bg-center bg-no-repeat"
		style="background-image: url('/images/header-hero-img-0.jpg');"
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
						<button
							on:click={() => goto('/')}
							class="laptop:gap-x-11 phone:text-2xl flex min-w-full text-xl leading-6 font-bold text-gray-50"
							>P&E Consulting LLC</button
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
										href="/{tab == 'Home' ? '' : key.toLocaleLowerCase()}"
										on:click={() => {
											showMobileMenu = false;
										}}
										class="-mx-3 block rounded-lg px-3 py-2 font-mono text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
										>{tab}</a
									>
								{/each}
								<!-- <a
									href="/"
									on:click={() => {
										showMobileMenu = false;
									}}
									class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
									>Home</a
								> -->
							</div>
						</div>
					</div>
				{/if}
			</header>
			<Hero pageTitle="contact" />

			<style>
				#myname {
					font-family: 'Brush Script MT', cursive;
				}
			</style>
		</div>
	</section>
	<section
		class="tablet:min-h-[50vh] laptop:min-h-[60vh] desktop:min-h-[70vh] relative flex min-h-[40vh] items-center justify-center bg-gray-100 bg-cover bg-center bg-no-repeat pt-8 pb-10"
	>
		<div class="mx-auto w-full max-w-[1120px] px-4">
			<h2
				class="phone:text-2xl tablet:text-2xl laptop:text-3xl desktop:text-4xl mb-6 text-center text-2xl font-bold text-gray-700"
			>
				Contact Us
			</h2>

			<form
				class="mx-auto w-full max-w-lg rounded-lg bg-white p-4 shadow-md sm:p-6"
				method="POST"
				action="/api/contact"
				on:submit|preventDefault={handleSubmit}
			>
				<div class="mb-4">
					<label for="name" class="mb-1 block text-sm font-medium text-gray-700">Name</label>
					<input
						id="name"
						name="name"
						type="text"
						required
						class="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						autocomplete="name"
					/>
				</div>
				<div class="mb-4">
					<label for="email" class="mb-1 block text-sm font-medium text-gray-700">Email</label>
					<input
						id="email"
						name="email"
						type="email"
						required
						class="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						autocomplete="email"
					/>
				</div>
				<div class="mb-4">
					<label for="message" class="mb-1 block text-sm font-medium text-gray-700">Message</label>
					<textarea
						id="message"
						name="message"
						required
						rows="5"
						class="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					></textarea>
				</div>
				<button
					type="submit"
					class="w-full rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
					disabled={submitting}
				>
					Send Message
				</button>
			</form>
		</div>
	</section>
</div>

<style>
	#myname {
		/* font-family: 'Brush Script MT', cursive; */
	}
</style>
