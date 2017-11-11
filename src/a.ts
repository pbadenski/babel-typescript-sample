interface X<A> {}
interface F<A, B, C> {}
export const liftA2 = <T, V> (fa: X<T>, fb: X<V>): <U>(f: F<T, V, U>) => X<U> =>
  f => null;
