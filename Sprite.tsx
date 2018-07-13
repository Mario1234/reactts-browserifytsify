import React from "react";

export interface SpriteProps { 
	filename: string;
	x: number;
	y: number;
	width: number;
	height: number; 
}

export class Sprite extends React.Component<SpriteProps,{}>{
	render(){
		let {filename, x, y, width, height } = this.props;
		if (!filename) {
			return null;
		}

		const estilo = {
			backgroundImage: `url(${filename})`,
			backgroundPosition: `${x * (-1)}px ${y * (-1)}px`,
			backgroundRepeat: 'no-repeat',
			width,
			height,
		};

		return <div style={estilo} />;
	}
	static defaultProps = {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
	}
	/*static propTypes = {
		filename: React.PropTypes.string,
		x: React.PropTypes.number,
		y: React.PropTypes.number,
		width: React.PropTypes.number,
		height: React.PropTypes.number,
	};*/
};


