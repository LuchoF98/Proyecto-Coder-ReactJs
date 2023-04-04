import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const ItemCount = ({ stock, initial = 1, onAdd }) => {
	const [contador, setContador] = useState(initial);


	const sumar = () => {
		if (contador < stock) {
			setContador(contador + 1);
		}
	};

	const restar = () => {
		if (contador > 1) {
			setContador(contador - 1);
		}
	};

	return (
		<div>
			<h2> {contador}</h2>
			<div style={{
				display: 'flex',
				gap: '20px',
				
			}}>
			<Button onClick={sumar}>Sumar</Button>

			<Button onClick={restar}>Restar</Button>

			<Button onClick={() => onAdd(contador)}>Agregar al carrito</Button>
			</div>
		</div>
	);
};

export default ItemCount;