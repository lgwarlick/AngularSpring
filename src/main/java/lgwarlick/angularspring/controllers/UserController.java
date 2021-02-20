package lgwarlick.angularspring.controllers;

import lgwarlick.angularspring.model.User;
import lgwarlick.angularspring.repositories.UserRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//Used since Angular is using 4200
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }


    @PostMapping("/users")
    void addUser(@RequestBody User user) {
        userRepository.save(user);
    }

}
