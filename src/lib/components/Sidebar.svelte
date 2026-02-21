<script lang="ts">
	import {
		Activity,
		Coffee,
		GitBranch,
		Terminal,
		Zap,
		FolderGit2,
		GitCommit,
		Github
	} from 'lucide-svelte';
	import { isSidebarOpen } from '$lib/stores/ui';
	import { page } from '$app/stores';

	// Access data from layout
	$: stats = $page.data.githubStats;
</script>

<aside
	class="fixed top-0 right-0 bottom-0 z-50 flex w-64 flex-col border-l border-[#333333] bg-[#050505] font-mono transition-transform duration-300 ease-in-out"
	class:translate-x-0={$isSidebarOpen}
	class:translate-x-full={!$isSidebarOpen}
>
	<!-- Header -->
	<div class="border-b border-[#333333] p-6">
		<div class="mb-1 flex items-center gap-2">
			<Github class="h-5 w-5 text-white" />
			<h1 class="text-sm font-bold tracking-wider text-white">GITHUB ACTIVITY</h1>
		</div>
	</div>

	<!-- Stats -->
	<div class="flex-1 space-y-8 overflow-y-auto p-6">
		<!-- Activity -->
		<div>
			<div class="mb-2 flex items-center gap-3 text-xs tracking-wider text-[#888888] uppercase">
				<Activity class="h-4 w-4" />
				<span>System Activity</span>
			</div>
			<div class="pl-7 text-2xl font-bold text-white">
				{#if stats && stats.activityPercent !== undefined}
					{stats.activityPercent.toFixed(2)}%
				{:else}
					99.9982%
				{/if}
			</div>
		</div>

		<!-- Contributions -->
		<div>
			<div class="mb-2 flex items-center gap-3 text-xs tracking-wider text-[#888888] uppercase">
				<GitCommit class="h-4 w-4 text-[#FFB86C]" />
				<span>Total Contributions</span>
			</div>
			<div class="pl-7 font-bold text-white">
				{#if stats && stats.totalContributions}
					{new Intl.NumberFormat('en-US').format(stats.totalContributions)}
				{:else}
					---
				{/if}
			</div>
		</div>

		<!-- System Vitals -->
		<div class="space-y-6 border-t border-[#333333] pt-6">
			<div>
				<div class="mb-2 flex items-center gap-3 text-xs tracking-wider text-[#888888] uppercase">
					<Activity class="h-4 w-4 text-[#50FA7B]" />
					<span>System Uptime</span>
				</div>
				<div class="pl-7 text-xl font-bold text-white">99.9982%</div>
			</div>

			<div>
				<div class="mb-2 flex items-center gap-3 text-xs tracking-wider text-[#888888] uppercase">
					<Coffee class="h-4 w-4 text-[#FFB86C]" />
					<span>Caffeine Level</span>
				</div>
				<div class="w-full pl-7">
					<div class="h-1 overflow-hidden rounded-full bg-[#222222]">
						<div class="h-full w-[85%] bg-[#FFB86C]"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer Action -->
	<div class="border-t border-[#333333] p-6">
		<button
			class="flex w-full items-center justify-center gap-2 border border-white py-3 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-white hover:text-black"
		>
			Secret?
		</button>
	</div>
</aside>
