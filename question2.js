// QUESTION 2

const timein24hrs = (hh, mm, ss, pmoram) => {
    if (hh === 12 && mm === 00 && ss === 00 && pmoram === "AM" ) {
      return "00" + ":" + (00+45) + ":" + (00+45); 
    } else 
    if (hh === 12 && mm === 00 && ss === 00 && pmoram === "PM" ) {
      return "12" + ":" + (00+45) + ":" + (00+45); 
    } else 
    if (hh >= 1 && hh < 12 && pmoram === "PM") {
      return (hh + 12) + ":" + (mm+45) + ":" + (ss+45); 
    } else
    if (hh >= 12 && pmoram === "AM") {
      return (hh - 12) + ":" + (mm+45) + ":" + (ss+45);
    }
      return hh + ":" + (mm+45) + ":" + (ss+45); 
  };
  
  console.log(timein24hrs(12,01,00,"PM"));
  console.log(timein24hrs(12,01,00,"AM"));
  