<script>
	import { Circle } from 'svelte-loading-spinners';

	export let helperText;
</script>

<div class="loader">
	<div class="container">
		<Circle size="100" color="white" unit="px" />
		<div class="text">{helperText ?? 'loading'}</div>
	</div>
</div>

<style>
	.loader {
		height: 100%;
		width: 100%;
		background-color: lightgray;
		opacity: 50%;
		position: fixed;
		z-index: 10000;
	}

	.container {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.text {
		margin-top: 36px;
		font-size: 24px;
		color: white;
		font-weight: bold;
	}
</style>
