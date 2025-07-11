<script lang="ts">
	export let proj: {
		'image source': string;
		'project name': string;
		'project description': string;
	};
</script>

<div class="mx-1.5">
	<div
		class="shadow-sm hover:shadow-md duration-100 ease-in-out rounded-lg overflow-visible bg-white cursor-pointer hover:scale-105 transition"
	>
		<div class="relative flex flex-col flex-grow-0 justify-start flex-wrap w-full h-full">
			<img
				class="h-[180px] w-full object-cover rounded-lg"
				src="{proj['image source']}.png"
				alt="coverImg"
			/>
		</div>
	</div>
	<p class="text-center text-base font-mono text-gray-600 mt-2">
		{proj['project name']}
	</p>
	<p class="whitespace-pre-wrap text-sm font-mono text-gray-600">
		{proj['project description']}
	</p>
</div>
