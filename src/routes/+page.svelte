<script>
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaGitlab from 'svelte-icons/fa/FaGitlab.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import IoIosWarning from 'svelte-icons/io/IoIosWarning.svelte';
	import { base } from '$app/paths';
</script>

<div class="top sticky z-10 text-center bg-yellow-300">
	<p>⚠️ Website is under construction 🚧</p>
</div>
<div
	class="h-screen w-full grid grid-flow-col porto-bg md:px-20 md:py-10 porto-blob justify-center"
>
	<div class="flex flex-col m-auto justify-center">
		<div
			class="max-w-lg lg:p-10 lg:pb-2 p-4 sm:p-10 md:pb-0 pt-0 z-10 porto-glasmorph md:grid md:grid-flow-col md:grid-cols-3 md:grid-rows-2 gap-2"
		>
			<img
				src="{base}/images/openPeeps-avatar.svg"
				class="rounded-full m-auto transform -translate-y-10 md:translate-y-0 hover:scale-110 hover:rotate-6 md:transition-transform border-2 border-white max-w-[100px] max-h-[100px] md:max-w-[150px] md:max-h-[150px] md:order-last md:mr-0 "
				alt="openpeeps-avatar-mikhael"
			/>
			<div
				class="md:col-span-2 md:order-first flex items-center md:justify-center md:items-start gap-2 flex-col"
			>
				<h1
					class="text-xl lg:text-3xl font-bold md:transform-none transform -translate-y-5 text-center flex items-center gap-2"
				>
					Hi! i'm Mikhael <span class="animate-waving inline-block">👋</span>
				</h1>
				<p class="text-start text-xs md:text-base transform -translate-y-5 md:transform-none">
					❤️ Front-End Web Development
				</p>
			</div>
			<div
				class="max-h-xs mx-w-xs md:max-w-md flex gap-2 justify-between md:order-2 md:col-span-3 md:items-center"
			>
				<a href="https://www.instagram.com/mikhael_37/" target="_blank" rel="noopener noreferrer"
					><div
						class="porto-icon inline-block hover:transform hover:scale-110 transition-transform group hover:rotate-6"
					>
						<FaInstagram />
					</div>
				</a>
				<a href="https://github.com/mikhael7" target="_blank" rel="noopener noreferrer"
					><div
						class="porto-icon inline-block hover:transform hover:scale-110 transition-transform group hover:-rotate-6"
					>
						<FaGithubSquare />
					</div>
				</a>
				<a href="https://gitlab.com/mikhael7" target="_blank" rel="noopener noreferrer"
					><div
						class="porto-icon inline-block hover:transform hover:scale-110 transition-transform group hover:rotate-6"
					>
						<FaGitlab />
					</div>
				</a>
				<a href="https://www.linkedin.com/in/mikhael37/" target="_blank" rel="noopener noreferrer"
					><div
						class="porto-icon inline-block hover:transform hover:scale-110 transition-transform group hover:-rotate-6"
					>
						<FaLinkedin />
					</div>
				</a>
			</div>
		</div>
	</div>
	<div />
</div>
