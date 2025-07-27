package dev.juanes.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class AppController {
	@GetMapping
	public ResponseEntity<String> status() {
		return ResponseEntity.ok("OK");
	}
}
