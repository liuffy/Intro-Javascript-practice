def range(start,final)
  return [] if final >= start

 r = range(start, final - 1) + range(final -1)
 return r
end
