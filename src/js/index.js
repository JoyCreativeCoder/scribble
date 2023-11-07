const myList = [];
const btn = document.querySelector(".add");
const body = document.querySelector('body');

function addToList() {
  let textArea = document.createElement("textArea");
  body.appendChild(textArea);

  let newContent = {
    id: myList.length + 1,
    content: "",
  };

  textArea.addEventListener("input", (e) => {
      newContent.content = e.target.value;
      console.log(newContent);
    });
    myList.push(newContent);

};

btn.addEventListener("click", () => {
  addToList();
});
 

/*
when the add icon is clicked
1; go and render a new note form component;
2; create new note object
3; Add input event to the textarea
4; on input :
1. get the object content property and set it to be e.target.value
5; push the object to the notes array.
*/ 