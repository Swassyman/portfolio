<script lang="ts">
	import ShellTerminal from '$lib/components/ShellTerminal.svelte';
</script>

<div class="fade-in">
	<div id="archive" class="p-8">
		<div class="mb-8 flex items-center gap-4">
			<h2 class="text-sm font-bold tracking-widest text-white uppercase">02. Archive_Terminal</h2>
			<div class="h-[1px] flex-1 bg-[#333333]"></div>
		</div>
		<ShellTerminal />
	</div>
</div>

<style>
	.fade-in {
		animation: fadeIn 1s ease-out forwards;
		opacity: 0;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
