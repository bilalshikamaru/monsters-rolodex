import  {Component} from 'react';
import './App.css';
import { CardList } from './components/CardList/CardList';
import { SearchField } from './components/SearchField/SearchField';



class App extends Component {
  constructor(){
    super()
    this.state={
      monsters: [],
      searchField:''
    }
    //this.handleChange= this.handleChange.bind(this)
  }

  componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/users')
                    .then(res => res.json())
                    .then (users => this.setState({monsters : users}))

  }

  handleChange = (event) => {
    this.setState({searchField : event.target.value})
  }
  render(){
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters rolodex</h1>
        <SearchField handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}/>
      </div>
    );

  }
}


export default App;
