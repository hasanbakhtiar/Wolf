

class ListItem extends Component{
    render(){
        return(
            <li>{this.props.title}</li>
        )
    }
}


class List extends Component{
    render(){
        return(
            <ul>
                <ListItem title="Home"/>
                <ListItem title="About"/>
                <ListItem title="Service"/>
                <ListItem title="Blog"/>
                <ListItem title="Contact"/>
            </ul>
        )
    }
}

class Nav extends Component{
    render(){
        return(
            <nav>
                <List />
                <List />
            </nav>
        )
    }
}


class Header extends Component{
    render(){
        return(
<header>
            <Nav />
</header>
        )
    }
}


class App extends Component{
    render(){
        return(
            <Header />
            
        )
    }
}


