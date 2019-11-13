import React, { Component } from 'react'
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

export default class App extends Component {

    id = 3;

    state = {
        information : [
            {
                id : 0,
                name : '홍길동',
                phone : '010-9999-0000'
            },
            {
                id : 1,
                name : '콩길동',
                phone : '010-2299-0000'
            },
            {
                id : 2,
                name : '삼길동',
                phone : '010-1119-0000'
            }
        ],
        keyword : '',
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value,
        })
    }

    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information : information.concat(Object.assign({}, data, {
                id : this.id++
            }))
        });
    }

    handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        });
    }

    handleUpdate = (id, data) => {
        const {information} = this.state
        this.setState({
            information : information.map(
                info => info.id === id
                    ? {id, ...data}
                    : info
            )
        })
    }

    render() {
        const { information } = this.state;
        return (
            <div className="App">
                <PhoneForm onCreate={this.handleCreate}/>
                <input 
                    value={this.state.keyword}
                    onChange={this.handleChange}
                    placeholder="검색..."
                    />
                <PhoneInfoList data={information.filter(
                    info => info.name.indexOf(this.state.keyword) > -1
                )}
                onRemove={this.handleRemove}
                onUpdate={this.handleUpdate}/>
            </div>
        )
    }
}
