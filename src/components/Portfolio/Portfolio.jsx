import React from 'react'
import './Portfolio.css'
import Toolbar from '../Toolbar/Toolbar'
import ProjectList from '../ProjectList/ProjectList'

export default class Portfolio extends React.Component{
    constructor(props){
        super(props)
        this.filters = props.filters
        this.projects = props.projects;
        this.state = {
            selected: 'All'
        }

        this.onSelectFilter = this.onSelectFilter.bind(this)
    }

    onSelectFilter(event){
        this.state.selected = event.target.textContent
        this.setState({selected: this.state.selected})
    }

    render(){
        return( 
            <div className="app-wrapper">
                <Toolbar 
                filters={this.filters} 
                selected={this.state.selected} 
                onSelectFilter={this.onSelectFilter}></Toolbar>
            <ProjectList selected={this.state.selected} projects={this.projects}></ProjectList>
            </div>

        )
    }
}