<script lang="ts">
	import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>

<div class="fade-in flex min-h-[50vh] flex-col justify-center p-8">
	<div id="contact" class="w-full">
		<div class="mb-12 flex items-center gap-4">
			<h2 class="text-sm font-bold tracking-widest text-white uppercase">03. Contact Protocol</h2>
			<div class="h-[1px] flex-1 bg-[#333333]"></div>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			<a
				href="https://github.com/Swassyman"
				target="_blank"
				class="group border border-[#333333] bg-[#0a0a0a] p-8 transition-all hover:bg-[#111] hover:shadow-lg hover:shadow-[#FFB86C]/10"
			>
				<Github size={32} class="mb-4 text-[#888888] transition-colors group-hover:text-white" />
				<h3 class="mb-2 font-bold text-white">GITHUB</h3>
				<p class="text-xs text-[#666666]">View source code repositories and contributions.</p>
			</a>

			<a
				href="https://www.linkedin.com/in/swarag-siby/"
				target="_blank"
				class="group border border-[#333333] bg-[#0a0a0a] p-8 transition-all hover:bg-[#111] hover:shadow-lg hover:shadow-[#50FA7B]/10"
			>
				<Linkedin size={32} class="mb-4 text-[#888888] transition-colors group-hover:text-white" />
				<h3 class="mb-2 font-bold text-white">LINKEDIN</h3>
				<p class="text-xs text-[#666666]">Professional network and work history.</p>
			</a>

			<a
				href="mailto:swarag2005@gmail.com"
				class="group border border-[#333333] bg-[#0a0a0a] p-8 transition-all hover:bg-[#111] hover:shadow-lg hover:shadow-[#FF5555]/10"
			>
				<Mail size={32} class="mb-4 text-[#888888] transition-colors group-hover:text-white" />
				<h3 class="mb-2 font-bold text-white">EMAIL</h3>
				<p class="text-xs text-[#666666]">Direct communication channel.</p>
			</a>
		</div>
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
