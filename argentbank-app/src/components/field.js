export function Field({ type, id, value, onChange, readOnly = false }) {
	return readOnly ? (
		<input
			type={type}
			id={id}
			value={value}
			onChange={onChange}
			required
			readOnly
		/>
	) : (
		<input type={type} id={id} value={value} onChange={onChange} required />
	);
}
