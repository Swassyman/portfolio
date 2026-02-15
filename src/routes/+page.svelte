<script lang="ts">
	import SystemHero from '$lib/components/SystemHero.svelte';
	import BioSection from '$lib/components/BioSection.svelte';
</script>

<!-- Innovation.exe Landing Page -->
<div class="fade-in px-6 md:px-12">
	<SystemHero />
	<BioSection />
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
