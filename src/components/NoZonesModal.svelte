<script>
	const { onClose } = $props();
	import Close from '../icons/Close.svelte';
</script>

<div class="NoZonesModal" role="alertdialog">
	<button class="background" onclick={onClose}></button>
	<div class="modal">
		<p>No curb zones found within selected area.</p>
		<p>Please select a different area.</p>
		<button onclick={onClose} class="close-button"><Close /></button>
	</div>
</div>

<style lang="scss">
	.NoZonesModal {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.background {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal {
		position: relative;
		background-color: var(--white);
		border-radius: 0.5rem;
		box-shadow: 0 0 0.75rem 0.125rem rgba(0, 0, 0, 0.5);
		color: var(--charles-blue);
		font-family: var(--primary-font);
		font-size: var(--font-size-m);
		padding: 4rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}

	.close-button {
		position: absolute;
		top: 0;
		right: 0;
		margin: 1rem;
		cursor: pointer;

		:global(svg) {
			width: 1rem;
			height: 1rem;

			:global(path) {
				fill: var(--charles-blue);
			}
		}
	}
</style>
