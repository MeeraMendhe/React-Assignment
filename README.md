# Airmeet Backend Assignment

## Problem Statement

 - Use a mock API to show a list of any data (comic characters etc), List should load minimum 1000 data items.
 - Show loading while waiting for API results and add error handling of API failures.
 - Each list should have a checkbox to select that item
 - Selected item should be highlighted
 - We should be able to deselect the item also
 - Provide following actions to be done on selected items
      - Delete
      - Favorite (store in local storage)

# **[Airmeet Assignment](https://airmeet.vercel.app/)**

 ##Techstack Use
 - Frontend
    - React
    - Redux
    - Infinite Scrolling
    - Debouncing
    - CustomHook
    - React-router-dom
    - Model
    - React-slideshow-image
    - Deploy(vercel)
 - Backend
    - Express
    - MongoDb
    - Mongoose  
    - Cors
    - Mongo Atlas
    - MVC model
    - Deploy(heroku)




## API Reference

#### Post Data

```http
  GET /data
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. Your API key |
| `title` | `string` | **Required**. Movie Title |
| `type` | `string` | **Default**. type of Movie |
| `posterURL` | `string` | **Required**. Image of Movie |
| `imdbId` | `string` | **Required**. Movie imdbId |
| `flag` | `Boolean` | **Required**. Default = false |

```http
  GET /data/filter/:type
```
 
 ```http
   PATCH /data/:id
```

```http
  POST /data/:id
```

## Screenshots

![App Screenshot](https://i.ibb.co/XFTtJvn/Screenshot-2022-03-14-at-5-37-28-PM.png)

![App Screenshot](https://i.ibb.co/F0Xpxjs/Screenshot-2022-03-14-at-5-37-44-PM.png)

![App Screenshot](https://i.ibb.co/55Wz2F0/Screenshot-2022-03-14-at-5-37-59-PM.png)

![App Screenshot](https://i.ibb.co/SKSrNx6/Screenshot-2022-03-14-at-5-38-25-PM.png)

![App Screenshot](https://i.ibb.co/QXqTznh/Screenshot-2022-03-14-at-5-38-45-PM.png)

![App Screenshot](https://i.ibb.co/pyMwSS2/image.png)

