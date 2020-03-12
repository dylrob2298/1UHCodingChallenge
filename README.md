Clone/download repository

In main folder in terminal:
npm install

Once that is done:
cd client

Then again:
npm install

After installing dependencies return to the top project folder, to run project:
npm run dev



Some Stuff I didn't get to:

I wanted to make the result of the $everything query more readable, but wasn't able to get it done in time to be much
more than the JSON converted to a string and formatted to be readable.
My strategy to do this would be to categorize all the resources in the entry by their resourceType. Each resourceType
would then have its own display section that contains every entry of its type.
I was not able to accomplish this in time due to not fully understanding connecting to the epic health system 
and how to find the proper patient ids. I had mistakenly believed that adding a patient myself would be sufficient 
and then later found the id for Jason Argonaut. Instead I focused on connecting a React frontend with a Node backend
to make the api calls and then retrieving all the data when it was paginated.

Some other things I would have wanted to add would be a nicer React Frontend UI. I've used react bootstrap before and
that could have helped the client display look nicer. Something I could have done would be to have different tabs for
each resourceType returned from the $everything query. 
