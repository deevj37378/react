//.render() is an inbuilt react function that lets us display something in a html container, it is like the print function
//Babel is an external library that is also known as the javascript compiler, it converts other languages into javascript
//jsx is html inside javascript
//components are the pieces of the website, more like small containers
//components are designed to be reusable
//every component has one parameter called props
//props render the attributes of the jsx file as object(kind of like json)
//state makes our website interactive(the logic part)
//there is another feature called the ternary operator
//const result = value1 ? value2 : value3
//it means if value1 is true then its result is value2 otherwise its value3, it allows us to insert an if-else statement directly inside jsx without using the if keyword.
//.map() lets us assign a new value to the original value, in an array.

//<div style={{ maxWidth: "500px", margin: "20px auto", fontFamily: "sans-serif" }}>
            //   <ChatInput />
            //   {chatMessages.map((chatMessage, index) => (
            //     <ChatMessage
            //       key={index}
            //       message={chatMessage.message}
            //       sender={chatMessage.sender}
            //     />
            //   ))}
            // </div>

//state is data that is connected to HTML, when we will update this data, it will update the html
//... is the spread operator, it takes the values in an array and copies it into a new array.
//keep in mind that state is used when the data is changed over time, and we need the changed data to append on its own.
//we usually have nested components, therefore we will use lifting the state up feature that allows us to share state between multiple component.
//all we have to do is update the state in the updater function and react will change the html for us.