import React from "react";
import { Sprite } from "./Sprite";
import {shallowEqual} from "./shallowequal";//from shallowequal.tsx get exported function shallowEqual

export interface AnimatedSpriteSheetProps { 
  filename: string;  
  bounds: {
    x: number;
    y: number;
    width: number;
    height: number;
  },
  speed: number;
  marcosPorFila: number;
  numeroFilas: number;
  marcosUltimaFila: number;     
}

export interface AnimatedSpriteSheetState {
  frame: number,
  maxFrames: number
}

export class AnimatedSpriteSheet extends React.Component<AnimatedSpriteSheetProps, AnimatedSpriteSheetState> {
  isPlaying: boolean;
  timerId : number;
  /*static propTypes = {
    filename: React.PropTypes.string,
    initialFrame: React.PropTypes.number,
    frame: React.PropTypes.shape({
      height: React.PropTypes.number,
      width: React.PropTypes.number,
    }),
    bounds: React.PropTypes.shape({
      x: React.PropTypes.number,
      y: React.PropTypes.number,
      width: React.PropTypes.number,
      height: React.PropTypes.number,
    }),
    isPlaying: React.PropTypes.bool,
    loop: React.PropTypes.bool,
    speed: React.PropTypes.number,
  };*/

  static defaultProps = {
    frame: {
      width: 0,
      height: 0,
    },
    bounds: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
    //isPlaying: true,
    //loop: true,
    speed: 300,
    marcosPorFila: 4,
    numeroFilas: 1,
    marcosUltimaFila: 4
  };

  constructor(props: any) {
    super(props);
    this.timerId = -1;
    this.isPlaying = true;
    const maxFrames = (this.props.marcosPorFila * this.props.numeroFilas) - (this.props.marcosPorFila-this.props.marcosUltimaFila);

    this.state = {
      frame: 0,
      maxFrames,
    };
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      if (this.state.frame === this.state.maxFrames) {
        return this.setState({
          frame: 0,
        });
      }

      return this.setState({
        frame: this.state.frame + 1,
      });
    }, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  shouldComponentUpdate(nextProps: Readonly<AnimatedSpriteSheetProps>, nextState: Readonly<AnimatedSpriteSheetState>) {

    if (!shallowEqual(this.props.bounds, nextProps.bounds)) {
      return true;
    }

    if (!shallowEqual({
      filename: this.props.filename,
      //isPlaying: this.props.isPlaying,
      //loop: this.props.loop,
      speed: this.props.speed,
    }, {
      filename: nextProps.filename,
      //initialFrame: nextProps.initialFrame,
      //isPlaying: nextProps.isPlaying,
      //loop: nextProps.loop,
      speed: nextProps.speed,
    })) {
      return true;
    }

    if (!shallowEqual(this.state, nextState)) {
      return true;
    }

    return false;
  }

  render() {
	var anchoMarco = this.props.bounds.width/this.props.marcosPorFila;
	var altoMarco = this.props.bounds.height/this.props.numeroFilas;	
    const spriteData = {
      filename: this.props.filename,
      width: anchoMarco,
      height: altoMarco,
      x: anchoMarco * Math.floor(this.state.frame%this.props.marcosPorFila),
	    y: altoMarco * Math.floor(this.state.frame/this.props.marcosPorFila),
    };

    return <Sprite {...spriteData} />;
  }
};
