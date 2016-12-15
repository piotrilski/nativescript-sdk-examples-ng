Creating a service file to keep our HTTP logic separated from our component file (which does not need to know details on how we fetch our data)
<snippet id="http-post-service"/>

Finally, we can provide our service in our component. Note that the services should be explicitly declared in `providers`
and then should be provided as an argument in our component's constructor.
<snippet id="http-post-component"/>



