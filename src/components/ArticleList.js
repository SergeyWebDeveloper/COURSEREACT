import React, {Component} from 'react';
import Article from './Article';
import OneOpen from '../decorators/oneOpen';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css';

class ArticleList extends Component{

    state={
        selectedArticles: null
    };

    handleSelectChange=(selectedArticles)=>{
        console.log(selectedArticles);
        this.setState({
            selectedArticles
        })
    };

    render() {
        const {articles,openArticleId,openArticle}=this.props;
        const listItems=articles.map((article)=> <li key={article.id}>
            <Article article={article}
            isOpen={article.id==openArticleId}
            openArticle={openArticle(article.id)}
            />
        </li>);
        const options=articles.map((article)=>({
            label: article.title,
            value: article.id
        }));

        return(
            <div>
                <h1>Article list</h1>
                <Select
                    options={options}
                    value={this.state.selectedArticles}
                    onChange={this.handleSelectChange}
                />
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}
export default OneOpen(ArticleList);
