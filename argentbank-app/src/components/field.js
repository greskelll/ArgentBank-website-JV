export function Field({ type, id, value, onChange }) {
	return (
		<input type={type} id={id} value={value} onChange={onChange} required />
	);
}
