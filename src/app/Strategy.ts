interface Strategy<Input, Output> {
  determine(input: Input): Output;
}

export default Strategy;