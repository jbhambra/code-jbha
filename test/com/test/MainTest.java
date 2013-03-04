package com.test;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import com.main.Main;

public class MainTest {
	
	Main main;
	
	@Before
	public void setup() {
		main = new Main();
	}
	
	@Test
	public void assertMainWorks() {
		
	 assertTrue(main.printHelloWorld());
	
	}

}
