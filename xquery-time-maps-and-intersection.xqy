(: more on maps and intersection testing :)

xquery version "1.0-ml";

declare namespace qm = "http://marklogic.com/xdmp/query-meters";

let $map1 := map:map()
let $map2 := map:map()

let $map1-size := 10000
let $map2-size := 10000000
let $keys := ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J")
let $values := (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

let $test1 := 
  for $i in (1 to $map1-size)
  return map:put($map1, $keys[$i mod 10], $keys[$i mod 10])

let $test2 := 
  for $i in (1 to $map2-size)
  return map:put($map2, $keys[$i mod 10], $keys[$i mod 10])

let $result := $map1 * $map2

return "Test1: ", xdmp:query-meters()//qm:elapsed-time/text();

xquery version "1.0-ml";

declare namespace qm = "http://marklogic.com/xdmp/query-meters";

let $size1 := 10000
let $size2 := 10000000

let $test1 := 
  for $i in (1 to $size1)
  return ($i mod 10)

let $test2 := 
  for $i in (1 to $size2)
  return ($i mod 10)

let $result := 
  for $i in $test1
  return if ($i = $test2) then $i else ()

return "Test2: ", xdmp:query-meters()//qm:elapsed-time/text()
