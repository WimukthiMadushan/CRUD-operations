package com.example.SpringMongo.Controller;


import com.example.SpringMongo.Model.Student;
import com.example.SpringMongo.Repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/student")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    @Autowired
    private StudentRepo studentRepo;

    @PostMapping("save")
    public void saveStudent(@RequestBody Student student){
        studentRepo.save(student);
    }

    @GetMapping("/all")
    public List<Student> getAllStudents(){
        return studentRepo.findAll();

    }
    @PutMapping("/edit/{id}")
    public Student update(@RequestBody Student student, @PathVariable(name = "id") String ID){
        student.setID(ID);
        studentRepo.save(student);
        return student;


    }

    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable(name = "id") String ID){
        studentRepo.deleteById(ID);
    }

    @RequestMapping("/search/{id}")
    public Optional<Student> getStudentByID(@PathVariable(name = "id") String ID){
        return studentRepo.findById(ID);

    }
}
