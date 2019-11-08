import './index.scss';
import dateInputMask from './Components/MaskedTF/MaskedTF'
class TestClass {
    constructor() {
        let msg = "Using ES2015+ syntax";
        console.log(msg);
    }
}
let test = new TestClass();

let input = document.querySelector('.masked-tf');

dateInputMask(input);