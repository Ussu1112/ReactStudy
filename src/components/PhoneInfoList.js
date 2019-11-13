import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo';

export default class PhoneInfoList extends Component {
    static defaultProps = {
        data : []
    }
    render() {
        const { data, onRemove, onUpdate } = this.props;
        //컴포넌트 업데이트
        //if (!idea) return null; //비어있을 경우 Null 반환

        console.log('rendering List')

        const list = data.map(
            info => (
            <PhoneInfo 
            onRemove={onRemove}
            onUpdate={onUpdate}
            info={info} 
            key={info.id} 
            />)
        )
        return (
            <div>
                {list}
            </div>
        )
    }
}
