function scope01() {
  const x = 1;

  if (true) {
    x = 2;
    console.log(x);
  }

  console.log(x);
}

scope01();
