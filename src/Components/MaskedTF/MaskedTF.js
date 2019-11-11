const dateInputMask = (el) => {
    
    el.addEventListener('keyup', function(e) {
    if( e.keyCode < 47 || e.keyCode > 57) {
        e.preventDefault();
    }
 
    let len = el.value.length;
    
    let reg = new RegExp(/^(([1-9]|[0-2]\d|[3][0-1])\.([1-9]|[0]\d|[1][0-2])\.[2][0]\d{2})$|^(([1-9]|[0-2]\d|[3][0-1])\.([1-9]|[0]\d|[1][0-2])\.[2][0]\d{2}\s([1-9]|[0-1]\d|[2][0-3])\:[0-5]\d)$/g);
    let isValid = el.value.match(reg);
    console.log(isValid)
    console.log(reg)
    
        switch(len){
            case !1 || !3 : {
                if(e.keyCode == 47) {
                    e.preventDefault();
                }
                break;
            }
            case 2 : {
                if (e.keyCode !== 8 && e.keyCode !== 46) { 
                    el.value += '.';
                }
                break;
            }
            case 5 : {
                if (e.keyCode !== 8 && e.keyCode !== 46) { 
                el.value +='.';
                }
                break;
            }
        }
  });
};
export default dateInputMask;