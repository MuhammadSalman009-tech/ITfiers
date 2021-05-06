import React from 'react'
import Card from './components/Card'
import { articles } from './data'

function Articles() {
    return (
        <div className="container mx-auto px-20 mt-10 articles">
             <div className="grid grid-cols-3 gap-4">
                 {articles.map(article=>(
                    <Card key={article.id} article={article}/>
                 ))}
             </div>
             
        </div>
    )
}

export default Articles
