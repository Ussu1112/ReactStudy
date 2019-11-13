import React, { Component } from 'react'

export default class MyComponent extends Component {
    state = {
        value : 0
    };
    //props 값을 state와 동기화 시키고 싶을 때 사용
    static getDerivedStateFromProps (nextProps, prevState) {
        if (prevState.value !== nextProps.value){
            return {
                value : nextProps.value
            };
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){//특정 조건에 따라 업데이트
        if(nextProps.value === 10) return false;
        return true;
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.value !== prevProps.value) {
            console.log('value 값이 바뀜');
        }
    }
    componentWillUnmount() {
        console.log('Good Bye');
    }

    render() {
        return (
            <div>
                <p>props : {this.props.value}</p>
                <p>state : {this.state.value}</p>
            </div>
        );
    }
}
