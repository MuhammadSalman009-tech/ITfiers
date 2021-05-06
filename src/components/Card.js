import React from 'react'

function Card({article}) {
    return (
        <div className="rounded overflow-hidden shadow-lg card">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-green-400">{article.title}</div>
                <p className="text-gray-700 text-base">
                    {article.body}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 justify-end">
                {article.author}
            </div>
        </div>
    )
}

export default Card
