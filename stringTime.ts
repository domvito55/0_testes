// ------------------- 1) Time Conversion -------------------------

function timeConversion(s: string): string {
  // Write your code here
  // let arr = s.split(":")
  // let hour = Number.parseInt(arr[0])

  // if (arr[2].charAt(2).toLowerCase() === 'a'){
  //   hour === 12 ? hour -= 12 : hour;
  // } else {
  //   hour === 12 ? hour : hour += 12;
  // }
  // arr[2] = arr[2].slice(0, 2)
  // arr[0] = hour.toString().padStart(2, '0')
  
  // let result = arr.join(":")
  // return result

    let components = 
    s.match(/(\d{2}):(\d{2}):(\d{2})(AM|PM)/) || [];
    let hour = Number.parseInt(components[1]);
  
  if (components[4].toLowerCase() === 'am'){
    hour === 12 ? hour -= 12 : hour;    
  } else {
    hour === 12 ? hour : hour += 12;        
  }
  components[1] = hour.toString().padStart(2,'0');
  
  return components.slice(1,4).join(":")
}

const result: string = timeConversion("12:40:22AM");
console.log(result);

