import React from "react";
import axios from "axios";
import "../App.css"
import {Navbar,Container,Nav} from "react-bootstrap";
import logo from "./Hourglass.gif"
class Best extends React.Component {
   constructor(){
     super();
     this.state={
       array:[],
       news:[]
     }
   }
   componentDidMount = async () => {
     let arr=[]
    await axios.get('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty').then((res)=>{
       
      for(let i = 0 ; i < 30 ;i++){
       arr[i] = res.data[i];
      }
       this.setState({
         array:arr
       },()=>{
         this.display();
       })
    }).catch((err)=>{
      console.log(err);
    })
   }

  display=()=>{
    this.state.array.map(async (arr)=>{
      await axios.get(`https://hacker-news.firebaseio.com/v0/item/${arr}.json?print=pretty`).then((res)=>{


       let ob = [...this.state.news,[res.data.by,res.data.title,res.data.url,res.data.kids.length]]
     //
        this.setState({
          news:ob
        },()=>{
         
        })
       })
    }
    )
  }

    render() {
      
      return (
        <div>
        
          {this.state.news.length === 0 ? <img src = {logo} className = "img" width = "100" height = "100"></img>:""}
        {this.state.news.map((n)=>{
            return <div className = "best">
              Author:{n[0]}
              <br />
              Title:{n[1]}
              <br />
              Comments:{n[3]}
              <br />
              <a href = {n[2]}>Click to know more</a>
              </div>
        })}
        </div>
      );
    }
  }
  export default Best;
