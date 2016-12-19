//Esta manera de crear componentes se usan para la UI
function Hola(props) {
	const name = props.name;

	return (
		<h1 id="title" onClick={props.onClick} >
			Hola {props.name}, chingala {props.count} veces
		</h1>	
	);
}

function Segundo(props){
	return (
		<h2>
			Esto es una prueba, el/la {props.objeto} es {props.objeto}
		</h2>
	)
}

const segundoElemento = React.createElement(Segundo,{
	objeto: "dinero"
})

// const hola = React.createElement(Hola, {
// 	name: 'Pitero'
// });

// setTimeout(
// 	() => {
// 		ReactDOM.render(React.createElement(Hola, {name: "Charls"}),
// 			document.getElementById('inicio'));
// 	},
// 	1000
// 	)


//Esta es una manera de crear componentes
class MiComponente extends React.Component {
	constructor(props){
		super(props);
		const self = this;

		this.state = {
			count: 0, 
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event){
		this.setState({
			count: this.state.count + 1
		})
	}

	componentWillMount(){
		console.log("Apenas se va a montar, aun no hay DOM");
	}

	componentDidMount(){
		document.addEventListener("click", this.handleClick);
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			count: this.state.count * 2
		});
	}

	shouldComponentUpdate(nextProps, nextState){
		if (nextState.count !== this.state.count) {
			return true
		}
		return false;
	}

	componentWillUpdate(){
		console.log("El componente se va a actualizar");
	}

	componentDidUpdate(){
		console.log("El componente se actualizó");
	}

	componentWillUnmount(){
		document.removeEventListener("click", this.handleClick);
	}

	render() {
		const nombre = this.props.name;
		return(
			/*<h1 id="titulo" onClick={this.handleClick}>
				Hola {nombre}, chingala {this.state.count} veces
			</h1>*/
			<Hola
				name = {this.props.name}
				count={this.state.count}
				onClick={this.handleClick}
			/>
		)
	}
}

//Esta es otra manera de crear componentes
const OtroComponente = React.createClass({
	getInitialState() {
		return{
			count:0
		}
	},
	handleClick() {
		this.setState({
			count: this.state.count + 1
		})
	},
	render() {
		return(
			<h1 id="title" onClick={this.handleClick} >
				Hola {this.props.name}, ahora la estas chingando {this.state.count} veces pero con OtroComponente
			</h1>
		)
	}
})

ReactDOM.render(
	<MiComponente name="Charls"/>, 
	// <OtroComponente name="Charls"/>, 
	document.getElementById('inicio')
);

ReactDOM.render(
	segundoElemento,
	document.getElementById("dinero")
)
