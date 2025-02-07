function saveAttendance() {
    let data = [];
    let csvContent = "Name,Login Time,Logout Time,Working Hours\n";
    
    document.querySelectorAll("#attendanceBody tr").forEach(row => {
        let name = row.cells[0].textContent;
        let loginTime = row.cells[1].textContent;
        let logoutTime = row.cells[2].textContent;
        let workingHours = row.cells[3].textContent;
        data.push({ name, loginTime, logoutTime, workingHours });

        csvContent += `${name},${loginTime},${logoutTime},${workingHours}\n`;
    });

    let blob = new Blob([csvContent], { type: "text/csv" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Attendance_Report.csv";
    link.click();
}
