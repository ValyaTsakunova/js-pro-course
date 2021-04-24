import React from 'react';
import CardItem from './CardItem';
import './CardsContainer.css';

function CardsContainer(props){
    const {users, posts, limitOfCards} = props;
    
    const cardItem = posts.map((post) =>  {
        if (post.id <= limitOfCards){
            const userOfPost = users.find((user) => user.id == post.id)
            return <CardItem post={post} key={post.id} user={userOfPost}/>
        }    
    })

    return (
      <div className="cardsBlock">
          {cardItem}

      </div>
    )
}

export default CardsContainer;