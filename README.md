# Foton Redux Challenge
You can start the Redux Saga [Challenge](https://github.com/FotonTech/Challenge-RN-ReduxSaga) right now! Just clone the repo and build a Home/List/Detail app with Redux Saga and ReactNative.

## API
Use the [Google Books API](https://developers.google.com/books/docs/v1/using), for example:
```
const query = 'harry pot'
https://www.googleapis.com/books/v1/volumes?q=${query}
```

1. __Must use__ redux saga for async operations.

If you need help don't hesitate to ask us.

## Design
The design is available [here](https://www.figma.com/file/NcOoOquO96zSQkxB4rM5SM5Q/books-app-travishowell?node-id=0%3A2) for the `List` and `Detail` views.
For the `Home` screen there is no design, please make the screen based on your judgement and the other designs.

1. Build the user interface to be **as close as possible** to the design.

#### Home
The Home is a welcome screen.
1. Make the user feel at home.
2. Build the screen with no design to look at.
4. The home should "match" the other screens and look very similar.

On this screen it's __required__ that the user is able to:
1. Press a button and navigate to the List screen.

#### List
On this screen it's __required__ that the user is able to:
1. See a list of items.
2. Pull to refresh the list (refetch).
3. Scroll down and load more books (pagination).
4. Search the books in the list (filter).
5. Press one of the items and navigate the user to the Detail screen.

#### Detail
On this screen it's __required__ that the user is able to:
1. See more information about the pressed book.
2. Like, Rate and Buy the book.

For 2. no need for API calls, just make the buttons clickable.


### Thanks for reading and don't forget to be a finisher. Byee o/

<Image src='https://user-images.githubusercontent.com/15015324/48946886-4f169880-ef16-11e8-92ba-5754dcff6068.png'>

_Designs copied here in case the link goes down. List (Books) in on the left, Detail (Single Book) on the right._
_Design by travishowell_.
