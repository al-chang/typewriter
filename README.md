# typewriter
JavaScript typewriter

Provide three arguments to create a typewriter. Need an array of strings that will be iterated through, the html id of the element whose text will be changed, a boolean representing if the typewriter should loop through the words or not, and an integer representing the speed of the typewriter. 

Example of creating a type writer 

```
let typewriter = new TypeWriter(["Hello", "World"], "type-wrtier-text", true, 100);
```

Example of starting the type writer

```
typewriter.type()
```
