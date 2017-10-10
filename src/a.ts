export {};

const o = <any> { a: 2 };

const f = () => (<any> {
  property: "value"
});

const f2 = () => {
  return <any> {
    property: "value"
  };
};
