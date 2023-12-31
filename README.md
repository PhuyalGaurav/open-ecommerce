﻿
![Logo](.github/logo.png)

# open-ecommerce

open-ecommerce is a ecommerce webstore made using django rest framework and react. As the name implies, it is open source and you can use it as a template in any of your projects (Or build a company?)


## Features

*   Full featured shopping cart
*   Product reviews and ratings
*   Top products carousel
*   Product pagination
*   Product search feature
*   User profile with orders
*   Admin product management
*   Admin user management
*   Admin Order details page
*   Mark orders as delivered option
*   Checkout process (shipping payment method etc)
*   PayPal / credit card integration
*   Database seeder (products & users)


## Tech Stack

**Client:** React, Redux, Bootstrap

**Server:** Django
## Requirements
* Python 3.10+
* Node LTS, npm, npx

## Installation

First clone the repo in your desired folder using :

```bash
    > git clone https://github.com/PhuyalGaurav/open-ecommerce.git
    // Now cd into the repository
    > cd open-ecommerce
```
To install this site i recommend you to use a python virtual environment.

Here is a step by step tutorial on how you can :

```bash
    >python -m venv venv
    // Now activate the venv
    >/venv/Scripts/activate
    // Now the venv has been activated so install all the dependencies for server
    (venv) > pip install -r requirements.txt
```
For the frontend client (Note: You need to be in the frontend directory): 
```bash
    > npm install
```
    
## Deployment

Note: make sure port 8000 and 3000 are not occupied in your machine

To deploy the site make sure to activate the virtual environment

Deploy client (Note: You need to be in the frontend directory):
```bash
  // run the client
  > npm start
```
Now come back to the root directory.

Deploy server (Note: You need to be in the backend directory):

If you are fine with the dummy data (Dummy database) : 

```bash
  //run the server
  >python manage.py runserver
```
If you want a new database delete the previous database & run : 

```bash
  //update the database
  >python manage.py makemigrations
  >python manage.py migrate
  //run the server
  >python manage.py runserver
```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Contributing

Contributions are always welcome!




## Feedback

If you have any feedback, please reach out to me at phuyalgaurav90@gmail.com or add me on discord : technofan. 

