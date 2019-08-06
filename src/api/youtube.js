//this is an axios module that will allow us to tuck away our
//REST API, this will make our code easier to read rather than calling
//axios directly prepending base url all the time
//we can also store a token in the module for reusability and always added
//to any request.
//it keeps all the REST API calls in one place allowing you to build an
//SDK for that API, which as the project grows can have its own life cycle.
import axios from 'axios';

//to have our code organized better, we will use .create
export default axios.create({
    //this is the base url
    baseURL: 'https://www.googleapis.com/youtube/v3'
});
