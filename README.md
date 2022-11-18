# Workflow App Back-End Server

### Introduction

Workflow Back-End

## Table of contents

<!-- - [Installation](#Installation) -->
<!-- - [Usage](#usage) -->

- [Endpoints](#Endpoints)
- [Authors](#authors)

### Endpoints

<table>
    <tr>
      <td> HTTP Verbs </td>
      <td> Endpoints </td>
      <td> PostData fields </td>
      <td> Actions </td>
      <td> Response </td>
    </tr>
  <tr>
      <td> POST </td>
      
  <td>
   
   `/api/auth`
  </td>

<td>

```json
{
  "token": value
}
```

  </td>

  <td>

    Authenticates the user using a token to get the user id and checks if the user exists with the token

  </td>
   <td>
   
```json
{
  "status": value,
  "client_id": value,
  "isAuthenticated": true/false
}
```
  </td>
</tr>

<tr>
      <td> POST </td>
  <td>
   
   `/api/create/account`
  </td>

<td>

```json
{
  "name": value,
  "email": value,
  "password": value,
  "role": value,
  "team_leader": true / false,
  "admin": true / false
}
```

  </td>
  <td>
  Creates a user account for all users and generates a token for each user
  </td>
   <td>
  
```json
{
  "message": value,
  "token": value,
}
```
  </td>
</tr>
</table>

<!-- ### Technologies Used

- [Flask](https://nodejs.org/) is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.
- [Gunicorn](https://gunicorn.org/) The Gunicorn "Green Unicorn" is a Python Web Server Gateway Interface HTTP server. It is a pre-fork worker model, ported from Ruby's Unicorn project.
- [scikit-learn](https://scikit-learn.org/stable/) Scikit-learn is a free software machine learning library for the Python programming language.

- [tensorflow-cpu 2.10.0](https://pypi.org/project/tensorflow-cpu/) TensorFlow is an open source software library for high performance numerical computation. Its flexible architecture allows easy deployment of computation across a variety of platforms (CPUs, GPUs, TPUs), and from desktops to clusters of servers to mobile and edge devices. -->

  ### Authors

  - [Sibusiso Nkosi](https://github.com/sbuDiction)
  - [
HLOBISILE NATASIA MAHURE](https://github.com/natasia-mahure)
  - [
Mpho Nkadimeng](https://github.com/gnkadimeng)
  - [Poroto-Kekana](https://github.com/Poroto-Kekana)

<!-- <div id="header" align="center">
  <img src="https://media.giphy.com/media/WLk8YgE2N4mB2/giphy.gif" width="100%"/>
</div> -->
