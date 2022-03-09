import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import dog from "./web/dog.jpeg"
import cat from "./web/gato.jpg"

const Globalstyle = createGlobalStyle `
*{
  padding: 0;
  margin:  0;
  box-sizing: border-box;
  list-style: none;
}
`
const Title = styled.h1 `
margin-bottom: 5px;
color: #5f545c;
text-shadow: 0px 0px 2px #5f545c;
`
const Img = styled.img `
border-radius: 50%;
`
const Adote = styled.div `
padding-left: 5vw;
align-items: center;
justify-content: space-between;
flex-direction: column;
width: 15vw;
`
const Pet = styled.div `
align-items: center;
justify-content: space-evenly;
flex-direction: column;
height: 25vh;
margin-top: 3vw;
`
const Span = styled.span `
font-size: 2vw;
font-family: Arial, Helvetica, sans-serif;
color: #1e5c3f;
text-shadow: 0px 0px 2px #1e5c3fb6;
-webkit-text-stroke-width: 1px;
margin-top: 5px;
`
const Box = styled.div `
height: 66.5vh;
width: 80vw;
align-items: center;
justify-content: ce;
flex-direction: column;
text-shadow: 0px 0px 10px #1e5c3fb6;
text-shadow: 0px 0px 5px #1e5c3fb6;
text-shadow: 0px 0px 5px #1e5c3f;
`
const Section = styled.section `
align-items: center;
justify-content: flex-start;
flex-direction: column;
font-size: 1.5vw;
width: 50vw;
`
const Div = styled.div `
display: flex;
flex-direction: column;
font-size: ;
`

class App extends Component {

  state= {
    dogs:[{name:'Tulio', breed:'Chiwawa', age:'5 years'},
    {name:'Pipoca', breed:'SRD', age:'9 years'},
    {name:'Spike', breed:'Pastor', age:'2 years'}],
    cats:[{name:'Oliver', breed:'angorá', age:'10 years'},
    {name:'Lola', breed:'persa', age:'12 years'},
    {name:'Garfield', breed:'malandro', age:'7 years'}],
    list:[]
}

dogs = () =>{
  this.setState({list: this.state.dogs.map((item)=>(
      <div>
          <h2>DOG'S NAME : {item.name}</h2>
      </div>
  )) })
  }
  
  
  cats = ()=>{
     this.setState({list: this.state.cats.map((item) =>(
         <div>
             <h2>CAT'S NAME : {item.name}</h2>
         </div>
     ))}) 
  }

  sobre = ()=>{
    this.setState({ 
      list: <div>
        <Div>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p><br/>
      <p> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. </p>
       </Div>
       </div>
    }) 
  }

 render() {

// const XYZ => 

   return (
     <div>
       <Globalstyle />
       <Adote>
       <Title> Adote-nos</Title>
       <Pet>
       <Img src={dog} alt="dogs" onClick={this.dogs}/>
       <Span>Cachorrinhos</Span>
       </Pet>
       <Pet onClick={this.cats}>
       <Img src={cat} alt="dogs"/>
       <Span>Gatinho</Span></Pet>
       </Adote>
       <Box>
       <a onClick={this.sobre}><Title>Sobre</Title></a>
       <Section>
         {this.state.list}
       </Section>
       </Box>
     </div>
   );
 }
}
export default App;
