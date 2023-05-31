//import logo from './logo.svg';
import './App.css';
import React from "react"

//Conceitos iniciais
//todo elemento precisa ter o tipo, propriedades e filhos
var reactElement = React.createElement( /*tipo*/"h1", /*props*/{
    className: "abc",
    style:{textAlign: "center",},
    onClick: function(){
      alert("click")
    },
}, /*filho*/ "Hello, world!")

//forma simplificada
var umElementoQualquer = React.createElement("p", null, "Um paragrafo legal.")

var reactElementDois = 
    <h1 
        className='exemplo-dois'
        style= {{textAlign: "center"}}
        onClick = {function(){
          alert("click!")}
        }>
      Clique!
    </h1>

var reactElementTres =
        React.createElement(
          "h1",
          {className: "abc",
           style:{textAlign: "center"},
           onClick: function(){
            alert('click')}
          },
          "Clique novamente!"
        )

//Exemplo de elementos aninhados
var reactElementQuatro =
          <div className='abc'>
            <h1>Hello</h1>
            <h2>world</h2>
          </div>
//De forma dinamica
var minhaClasse = "abc"
function meuTexto(){
  return "world"
}

var reactElementCinco =
  <div className={minhaClasse}>
    <h1>Hello {10 * 10}</h1>
    <h2>{meuTexto}</h2>
  </div>

//ou
var elementoAninhado = <h2>world</h2>
var reactElementSeis =
  <div>
    <h1>Hello</h1>
    {elementoAninhado}
  </div>

//espalhamento tras todas as propriedades criadas numa variavel
var properties = {
  className: "abc",
  onClick: function(){alert("click")},
}
var reactElementSete = 
  <div {...properties}> 
    <h1>Hello!!</h1>
    <h2>world!!</h2>
  </div>

//Componentes
function MeuComponente(){
  var data = "world"
  return(
    <div>
      <h1>Hello2</h1>
      <h2>{data}</h2>
  </div>
  )
}
//array componentes
function MeuArrayComponentes(){
  var data = "world"
  return[
    <h1 key="hello">Hello3</h1>, //não esquecer as virgulas
    <h2 key="world">{data}</h2>
  ]
}

function MeuComponenteEspecial(){//mesmo resultado do array, porem sem a necessidade de informar o key
  var data = "world"
  return(
    <React.Fragment>
      <h1>Hello4</h1>
      <h2>{data}</h2>
    </React.Fragment>
  )
}

//uma função componente pode ser usada como um elemento também:
var reactElementOito = <MeuComponente/>

//Prioriedades
function MeuComponenteDois(props){
  return(
    <div className={props.className}>
      <h1>Hello!!!</h1>
      <h2>{props.customData}</h2>
    </div>
  )
}
var reactElementNove = <MeuComponenteDois className="abc" customData="world"/>

//usando no objeto o operador de espalhamento de propriedade
var props = {
  className: "abc",
  customData: "world",
}
var reactElementDez = <MeuComponente {...props}/>
console.log(reactElementDez.props)

//criando componentes com conteudo dinamico
var planets = ["earth", "mars", "venus"]

var elements = planets.map(function(planet, index){
  return <MeuComponente className="myClass" customData={planet} key={index}/>
})

var reactElementOnze = <div>{elements}</div>
console.log(elements)

//Tipos de Propriedades
//definindo padrão
MeuComponenteDois.defaultProps = {
  customData: "default",
  className: "default-class",
}
var reactElementDoze = <MeuComponenteDois/>

//Exemplos de propriedades
function DateSpan(props){
  var date = props.date,
  day = date.getDate(),
  month = date.getMonth() +1,
  year = date.getFullYear()

  return <span>{day}.{month}.{year}</span>
}
var reactElementTreze = <DateSpan date={new Date()}/>//o date aqui é a propriedade new Date que precisamos informar nesse caso





//função usada para unir os elementos criados, o app está sendo renderizado no index.js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {reactElement}
        {umElementoQualquer}
        {reactElementDois}
        {reactElementTres}
        {reactElementQuatro}
        {reactElementCinco}
        {reactElementSeis}
        {reactElementSete}
        <MeuComponente/>
        <MeuArrayComponentes/>
        <MeuComponenteEspecial/>
        {reactElementOito}
        {reactElementNove}
        {reactElementDez}
        {reactElementOnze}
        {reactElementDoze}
        {reactElementTreze}
      </header>   
    </div>  

  );
}

export default App;
 