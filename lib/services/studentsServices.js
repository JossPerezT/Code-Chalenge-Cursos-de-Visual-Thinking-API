class studentsServices {
    static getHaveCertification (students) {
        const certification = students.filter((student) => student.haveCertification === true); 
        const studentsCertification = certification.map((certifications) => certifications.email);
        return studentsCertification;
    }
    static getCredits(students){
        const studentsCredits = students.filter((student) => student.credits >= 500);
        return studentsCredits;
    }
    static getAllStudents(students) {
        return students;
    }
}

module.exports = studentsServices; 