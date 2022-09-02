
<h4 align="center"> 
	 Status: Finished
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#layout">Layout</a> • 
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> 
</p>


## About
A Nodejs Microservice that is able to convert between Unix time and Human readable time. This project was proposed as a challenge in freecodecamp's "Back End Development and APIs" course.

---


## Layout
![timestamp](https://user-images.githubusercontent.com/80289718/187510478-13395d8d-bb02-4864-aa38-161b2df66d08.png)


---

## User Stories

    * The API endpoint is GET [project_url]/api/timestamp/:date_string
    
    * A date string is valid if can be successfully parsed by new Date(date_string).
    
    * Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
    
    * If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.
    
    * If the date string is valid the api returns a JSON having the structure
      {"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
      e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
    
    * If the date string is invalid the api returns a JSON having the structure
    {"error" : "Invalid Date" }.


---
### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

#### Running the application (server)

```bash
# Clone this repository
$ git clone https://github.com/Gahbr/Timestamp-Microservice
# Access the project folder cmd/terminal
$ cd Timestamp-Microservice
# install the dependencies
$ npm install
# Run the application in development mode
$ npm run dev
# The server will start at port: 5000 - go to http://localhost:5000
```

---

## Tech Stack

The following tools were used in the construction of the project:


> See the file  [package.json](https://github.com/Gahbr/Timestamp-Microservice/blob/main/package.json)
#### [](https://github.com/Gahbr/Timestamp-Microservice)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [HTML/CSS](https://pt.wikipedia.org/wiki/HTML))
    
-   **[Nodejs](https://nodejs.org/)**
-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[dotENV](https://github.com/motdotla/dotenv)**

---
