Creating a service file to keep our HTTP logic separated from our component file (which does not need to know details on how we fetch our data)
<snippet id="download-file-service"/>

In this example we are creating a file in the desired destination and populating its
content with the response from our services which returns the content of file `robots.txt`.
Note that the folders from `knownFolders` are not accessible from external apps or users.
To save files to external storage use the native API methods. (e.g. `getExternalStoragePublicDirectory` for Android) 
<snippet id="download-file-component"/>


