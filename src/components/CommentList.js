import React, {Component,PropTypes} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component{

    // componentWillMount(){
    //     console.log(this.props)
    // }
    // componentDidMount(){
    //     console.log('mounted')
    // }

    render(){
        const {comments,isOpen,toggleOpen}=this.props;
        if(typeof comments!=='object') return <h3>no comments yet</h3>
        const commentItems=comments.map(comment=><li key={comment.id}><Comment comment={comment} /></li>);
        const body=isOpen? <ul>{commentItems}</ul>:null;
        const linkText=isOpen? 'close comment':'show comments';
        return(
            <div>
                <a onClick={toggleOpen} href="#">{linkText}</a>
                {body}
            </div>
        )
    }

}

export default toggleOpen(CommentList);
