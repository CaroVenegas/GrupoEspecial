import Page from './page';

class Inputspage extends Page {
    
     get getTitle() {
        return $('h3');
    }

    get gettextfield(){
        return $('input[type=number]');
    }

    get getNumber(){
        return $('p')
    }

    setInpuntsValueby(){
        return this.getInputs.setvalue(9);
    }
}
export default new Inputspage();