<script>
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import TopBar from '$lib/components/TopBar.svelte';
	import { isSidebarOpen } from '$lib/stores/ui';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="relative min-h-screen bg-[var(--bg-main)] font-mono text-[var(--text-main)] selection:bg-white selection:text-black"
>
	<!-- Right Sidebar (Fixed) -->
	<Sidebar />

	<!-- Main Content Area -->
	<div
		class="relative flex min-h-screen flex-col transition-all duration-300 ease-in-out"
		class:mr-64={$isSidebarOpen}
		class:mr-0={!$isSidebarOpen}
	>
		<!-- Background Grid (Local to main content or global?) -->
		<div class="border-grid pointer-events-none fixed inset-0 z-0"></div>
		<div class="scanline pointer-events-none fixed inset-0 z-50"></div>

		<TopBar />

		<main class="relative z-10 flex-1 p-12">
			<slot />
		</main>
	</div>
</div>
