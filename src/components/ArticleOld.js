import React, {Component} from 'react';
import CommentList from './CommentList';

const ArticleOld=React.createClass({

    getInitialState(){
        return{
            isOpen: false
        }
    },

    render(){
        const {article: {title,text,comments}}=this.props;
        const {isOpen}=this.state;
        const body=isOpen? <section>{text} <CommentList comments={comments} /></section>:null;
        return(
            <div>
                <h1 onClick={this.toggleOpen}>{title}</h1>
                {body}
            </div>
        )
    },

    toggleOpen(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

});
export default ArticleOld;
