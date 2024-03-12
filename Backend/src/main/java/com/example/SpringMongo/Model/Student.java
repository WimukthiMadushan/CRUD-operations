package com.example.SpringMongo.Model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Student")
public class Student {
    @Id
    private String ID;
    private String StudentName;
    private String StudentAddress;
    private String Mobile;

    public Student(String ID, String studentName, String studentAddress, String mobile) {
        this.ID = ID;
        StudentName = studentName;
        StudentAddress = studentAddress;
        Mobile = mobile;
    }

    public Student() {
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getStudentName() {
        return StudentName;
    }

    public void setStudentName(String studentName) {
        StudentName = studentName;
    }

    public String getStudentAddress() {
        return StudentAddress;
    }

    public void setStudentAddress(String studentAddress) {
        StudentAddress = studentAddress;
    }

    public String getMobile() {
        return Mobile;
    }

    public void setMobile(String mobile) {
        Mobile = mobile;
    }

    @Override
    public String toString() {
        return "Student{" +
                "ID='" + ID + '\'' +
                ", StudentName='" + StudentName + '\'' +
                ", StudentAddress='" + StudentAddress + '\'' +
                ", Mobile='" + Mobile + '\'' +
                '}';
    }
}
