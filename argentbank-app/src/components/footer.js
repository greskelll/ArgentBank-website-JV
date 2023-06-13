import './components.css';

export function Footer({ website }) {
	return (
		<footer className="footer">
			<p className="footer-text">
				Copyright {new Date().getFullYear()} {website}
			</p>
		</footer>
	);
}
