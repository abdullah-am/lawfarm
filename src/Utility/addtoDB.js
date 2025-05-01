export const getBookedLawyer=()=>{

    const bookedlawyerSTR=localStorage.getItem("bookList");
    if(bookedlawyerSTR){
        const bookedlawyerData =JSON.parse(bookedlawyerSTR);
        return bookedlawyerData;
    }
    else{
        return [];
    }

}

export const addtoStoredDB=(licenseNumber)=>{

    const bookedlawyerData=getBookedLawyer();

    if(bookedlawyerData.includes(licenseNumber)){
        alert("licenseNumber exist");
    }
    else{
        bookedlawyerData.push(licenseNumber);
        const data= JSON.stringify(bookedlawyerData);
        localStorage.setItem("bookList",data);

    }
}

export const removeFromStoredDB = (licenseNumber) => {
    const bookedlawyerData = getBookedLawyer();
    const updatedData = bookedlawyerData.filter((num) => num !== licenseNumber);
    localStorage.setItem("bookList", JSON.stringify(updatedData));
  };