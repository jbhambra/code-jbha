  xquery version "1.0-ml";
declare namespace x = "com:x";
(: querying a collection for an element that has sub-element with values given in a sequence :)	 	 		
 	
(: <x:something>
  <x:some-var>
   <x:some-var-element>Boom
   </x:some-var-element>
  </x:some-var>
</x:something>
:)
let $uris := cts:uris((), (),
 	 	 		 	               cts:and-query((
 	 	 		 	                cts:collection-query("some-collection"),
 	 	 		 	                cts:element-query
 	 	 	 	                (
 	 	 		 	                  xs:QName("x:some-var"),
 	 	 	 	                  cts:element-value-query(xs:QName("x:some-var-element"),("Blah", "Boom"))
 	 	 	 	                )
 	 	 		 	               ))
 	 	 	 	             )
 	 	 		 	            
 	 	 		 	return (fn:count($uris), $uris)
