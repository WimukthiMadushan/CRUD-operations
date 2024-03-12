import React, { useState, useEffect } from "react";
import axios from "axios";

function Student() {
  const [id, setId] = useState("");
  const [studentName, setstudentName] = useState("");
  const [studentAddress, setstudentAddress] = useState("");
  const [mobile, setmobile] = useState("");
  const [students, setStudents] = useState([]);

  useEffect((e) => {
    (async () => Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:8081/api/student/all");
    setStudents(result.data);
    console.log(result.data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new student object with the entered data
    const newStudent = {
      studentName: studentName,
      studentAddress: studentAddress,
      mobile: mobile,
    };
    console.log(newStudent);
    //send data to the server

    try {
      const response = await axios.post(
        "http://localhost:8081/api/student/save",
        newStudent
      );

      if (response.status === 200) {
        console.log("Data sent successfully");
        // Update the list of students

        alert("Data sent successfully");
      } else {
        console.error("Failed to send data to the server");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      alert("User Registration Failed");
    }

    // Clear the form fields
    setId("");
    setstudentName("");
    setstudentAddress("");
    setmobile("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            value={studentName}
            onChange={(e) => setstudentName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">studentAddress address</label>
          <input
            type="studentAddress"
            className="form-control"
            value={studentAddress}
            onChange={(e) => setstudentAddress(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">mobile</label>
          <input
            type="mobile"
            className="form-control"
            value={mobile}
            onChange={(e) => setmobile(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* Display Table */}
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Address</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.studentName}</td>
              <td>{student.studentAddress}</td>
              <td>{student.mobile}</td>
              <td>
                <button type="edit" className="btn btn-primary">
                  Edit
                </button>
              </td>
              <td>
                <button type="delete" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
