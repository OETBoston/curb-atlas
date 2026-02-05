<script>
	const { label, children = null, open, setOpen, position, disabled, theme = 'dark' } = $props();

	let buttonHeight = $state(0);
</script>

<div class="button-container" style="--button-height: {buttonHeight}px">
	{#if children}
		<div
			role="menu"
			class={['menu-container', { right: position === 'right', open, light: theme === 'light' }]}
		>
			{@render children()}
		</div>
	{/if}
	<button
		class={['MenuButton', { open, disabled }]}
		onclick={setOpen}
		bind:clientHeight={buttonHeight}>{label}</button
	>
</div>

<style lang="scss">
	.MenuButton {
		padding: 0.5rem 1.5rem;
		background-color: var(--optimistic-blue);
		color: var(--white);
		border-radius: 0.5rem;
		cursor: pointer;

		font-family: var(--primary-font);
		font-size: var(--font-size-ms);
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;

		pointer-events: auto;

		&:focus {
			background-color: var(--optimistic-blue-hover);
		}

		&:hover {
			background-color: var(--optimistic-blue-hover);
		}

		&.open {
			background-color: var(--optimistic-blue-hover);
		}

		&.disabled {
			pointer-events: none;
			background-color: var(--support-gray-3);
			color: var(--support-gray-4);
		}
	}

	.button-container {
		position: relative;
	}

	.menu-container {
		pointer-events: auto;
		position: absolute;
		bottom: calc(var(--button-height) + 1rem);
		left: 0;
		padding: 1rem;
		background-color: var(--charles-blue);

		border-radius: 0.5rem;
		display: none;
		min-width: 260px;

		&.light {
			background-color: var(--white);
			box-shadow: 0 0 0.75rem 0.125rem rgba(0, 0, 0, 0.5);
		}

		&.open {
			display: block;
		}

		&.right {
			left: unset;
			right: 0;
		}
	}
</style>
