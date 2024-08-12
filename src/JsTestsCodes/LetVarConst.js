function myFunc() {
  if (true) {
    var hello = "hello";
    let let_hello = "let_hello";
  }

  const newFunc1 = () => {
    let hello1 = "hello1";
  };

  console.log(hello);
  //   console.log(let_hello);
  //   console.log(hello1);
  //   newFunc1();
}

export default myFunc;
