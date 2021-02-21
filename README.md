# LocalDemo

A demo in Angular pushing the bounderies of what's possible with current web technologies. 

This demo can read a local file, perform some processing on it, and save it to a local IndexedDb instance via the Dexie library. A form is then created showing every value in a select control. The existing processing logic expects a comma seperated value with the first element being a fips code (01-76) and the second element being the state name, like this: 69,Northern Mariana Islands
