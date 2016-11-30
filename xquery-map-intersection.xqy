xquery version "1.0-ml";
declare namespace html = "http://www.w3.org/1999/xhtml";

let $map1 := map:map()
let $map2 := map:map()

let $_ := map:put($map1, "blah", 1)
let $_ := map:put($map1, "boom", 1)

let $_ := map:put($map2, "boom", 1)

let $intersection := $map1 * $map2

return $intersection


(: Result :)

(: <?xml version="1.0" encoding="UTF-8"?>
<results warning="atomic item">
  <map:map xmlns:map="http://marklogic.com/xdmp/map" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <map:entry key="boom">
      <map:value xsi:type="xs:integer">1</map:value>
    </map:entry>
  </map:map>
</results>

:)
