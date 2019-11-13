import React from 'react';

// export default class MyName extends Component {
//     static defaultProps ={
//         name:'기본이름'
//     }
//     render() {
//         return (
//             <div>
//                 {this.props.name}
//             </div>
//         )
//     }
// }

const MyName = ({name}) => {
    return <div> 안녕하세요 {name}입니다. </div>;
};

MyName.defaultProps = {
    name: 'hyoung'
};

export default MyName;
