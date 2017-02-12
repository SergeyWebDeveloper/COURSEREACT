import React, {Component,PropTypes} from 'react';
import Comment from './Comment';

class CommentList extends Component{
    state={
        isOpen: false
    }

    render(){
        const {comments}=this.props;
        if(typeof comments!=='object') return <h3>no comments yet</h3>
        const {isOpen} = this.state;
        const commentItems=comments.map(comment=><li key={comment.id}><Comment comment={comment} /></li>);
        const body=isOpen? <ul>{commentItems}</ul>:null;
        const linkText=isOpen? 'close comment':'show comments';
        return(
            <div>
                <a onClick={this.toggleOpen} href="#">{linkText}</a>
                {body}
            </div>
        )
    }
    toggleOpen=(ev)=>{
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList;
