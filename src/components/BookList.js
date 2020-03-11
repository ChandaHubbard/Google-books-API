import React from "react";
import ListItem from "./ListItem";

function BookList() {
    // const bookmarks = this
    // .props
    // .bookmarks
    // .map((bookmark, i) => <ListItem { ...bookmark } key={i}/>);
return (
    <div className="booklist">
        <ListItem />
        {/* {bookmarks} */}
    </div>
  );
}

// BookmarkList.defaultProps = {
//     bookmarks: []
//   };

export default BookList;
