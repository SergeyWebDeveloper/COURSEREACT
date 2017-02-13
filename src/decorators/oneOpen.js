import React,{Component} from 'react';

export default (Component)=>class OneOpen extends Component{
    state={
        openArticleId: null
    };

    openArticle = id =>ev=>{
        if(ev) ev.preventDefault();
        id==this.state.openArticleId ? this.setState({openArticleId: null}): this.setState({openArticleId: id})
    };

    render(){
        return <Component {...this.props} openArticleId={this.state.openArticleId} openArticle={this.openArticle} />
    }

}