# Angular Frontend Meets Spring Boot Backend

## Goal/Purpose

This was a learning project to learn Angular as well as how it integrates with Spring Boot to provide a fully functioning SPA. 

## Structure

### Backend

Using a Spring MVC design the backend is comprised of:
- A "User" POJO
- A vanilla repository interface that simply extends CrudRepository
- A controller with two abilities:  GetMapping for fetching all current users and PostMapping for adding new users
- A CommandLineRunner to populate the repository with some inital data
