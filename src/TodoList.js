import React,{Component} from "react";
import TodoItems from "./TodoItems.js"
import "./TodoList.css"

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            items:[]
        };

        this.addItem=this.addItem.bind(this);
        this.deleteItems=this.deleteItems.bind(this);
    }

    addItem(e){
        if(this._inputElement.value!==""){
            var newItem={
                text:this._inputElement.value,
                key:Date.now()
            };

            this.setState((prevState)=>{
                    return{
                        //items:prevState.items.concat(newItem)--this is for adding item in the last
                        items:[newItem].concat(prevState.items) // this is for adding item in the top of the list
                        
                    };
            });
        }

        this._inputElement.value = "";
        e.preventDefault();
    }

    deleteItems(key){
        var filterItems=this.state.items.filter(function(item){
                return(item.key!==key)
        });

        this.setState({
                items:filterItems
        });
    }

    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}> 
                        <input ref={(a)=>this._inputElement=a} 
                        placeholder="Enter task" required ></input>
                        <button type="submit">Add</button>
                        <p>{this.state.items.length}</p>
                    </form>
                </div>

                <TodoItems entries={this.state.items}
                    delete={this.deleteItems}/>
            </div>
        );
    }
}

export default TodoList;