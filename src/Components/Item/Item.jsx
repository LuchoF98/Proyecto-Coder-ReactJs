import React from "react";
import "./Item.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

const Item = ({ element }) => {
	return (
		<Card className='card1'>
			<CardMedia sx={{ height: 400 }} image={element.img} title='green iguana' />
			<CardContent className='cardContent'>
				<Typography gutterBottom variant='h5' component='div'>
					<b>{element.title}</b>
				</Typography>				
				<Typography variant='body, h5'>US${element.price}</Typography>
			</CardContent>
			<CardActions>
				<Link to={`/item/${element.id}`}>
					<Button size='small' variant='contained' color='primary'>
						Ver detalle
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default Item;