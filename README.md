# Foton Full-stack Challenge

<table align="center">
  <tr>
    <td> <img src="https://i.imgur.com/wwrDFDG.jpg" alt="List of all books" width="300"/> </td>
    <td> <img src="https://i.imgur.com/cubYmPm.jpg" alt="Filtred list with only the book called Hooked" width="300"/> </td>
   </tr> 
   <tr> 
      <td><img src="https://i.imgur.com/qtPMYeb.jpg" alt="More detail about the book called Hooked" width="300"/></td>
      <td><img src="https://i.imgur.com/zywfp6n.jpg" alt="Add a new book to the list" width="300"/></td>
  </tr>
</table>
  
  
  
  
## Back-end

- [x] Apollo Express Server
- [x] TypeGraphQL
- [x] TypeORM

Hosted [here](https://foton-challenge-backend.herokuapp.com/graphql).

## Front-end

- [x] React Native
- [x] Styled Components
- [x] Apollo Client

First, clone this repository.

```console
$ git clone https://github.com/miguel-nascimento/fullstack-challenge.git
```

Install dependencies with Yarn.

```console
$ cd mobile
$ yarn
```

I know, the installation of dependencies take a time, use this time to install Expo app in Playstore or App Store.

Now, use yarn start to run Expo.

```console
$ yarn start
```

Great! Now you only need to scam the QR Code. 😉

If the list of books doesn't load at the first time, please, exit from the app and return after ~10seg.
Heroku API takes a time to up the "dyno" of the backend, and unfortunately i didn't take it into consideration in the development.
Pardon.

**App tested only in Android**
