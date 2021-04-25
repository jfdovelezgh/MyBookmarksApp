import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const BookmarkCard = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="work">W</Avatar>
        }
        title="Bookmark Catagory"
        subheader="April 25, 2021"
      >
      
      </CardHeader>

    </Card>
  )
}

export default BookmarkCard;