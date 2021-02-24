# Angular Frontend Meets Spring Boot Backend

## Goal/Purpose

This was a learning project to learn Angular as well as how it integrates with Spring Boot to provide a fully functioning SPA. 

## Structure

### Backend

Using a Spring MVC design the backend is comprised of:
- "User" POJO
- Vanilla repository interface that simply extends CrudRepository
- Controller with two abilities:  GetMapping for fetching all current users and PostMapping for adding new users
- CommandLineRunner to populate the repository with some inital data

### Frontend

Angular was added using the Angular CLI and four components were added:
- "User" based on the backend model
- Service layer (user.service) with the same two abilities: find all current users and add a new user
- User-list to pull current users from the database and render them in HTML
- User-form to save new users via an onSubmit method and automatic rerouting to the user list after successful submission
