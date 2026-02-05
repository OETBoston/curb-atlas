<script>
	let { value, onToggle, label } = $props();
</script>

<div class="Toggle">
	<label class="switch">
		<input type="checkbox" checked={value} onchange={onToggle} />
		<span class="slider"></span>
	</label>
	{#if label}
		<div class="toggle-label">{label}</div>
	{/if}
</div>

<style lang="scss">
	.Toggle {
		display: flex;
		gap: 0.5rem;
		align-items: center;

		.toggle-label {
			font-family: var(--primary-font);
			font-size: var(--font-size-ms);
			font-weight: var(--font-weight-medium);
			color: var(--white);
		}

		.switch {
			position: relative;
			display: inline-block;
			width: 2.25rem;
			height: 1.25rem;

			border-radius: 1rem;

			&:focus-within {
				outline: 1px solid var(--optimistic-blue-hover);
			}
		}

		.switch input {
			opacity: 0;
			width: 0;
			height: 0;
		}

		.slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: var(--support-gray-4);
			-webkit-transition: 0.4s;
			transition: 0.4s;
			border-radius: 1rem;
		}

		.slider:before {
			position: absolute;
			content: '';
			height: calc(1rem - 0.25rem);
			width: calc(1rem - 0.25rem);
			left: 0.25rem;
			bottom: 0.25rem;
			background-color: var(--white);
			-webkit-transition: 0.4s;
			transition: 0.4s;
			border-radius: 50%;
		}

		input:checked + .slider {
			background-color: var(--support-blue-1);
		}

		input:focus + .slider {
			box-shadow: 0 0 1px var(--support-blue-1);
		}

		input:checked + .slider:before {
			-webkit-transform: translateX(1rem);
			-ms-transform: translateX(1rem);
			transform: translateX(1rem);
		}
	}
</style>
