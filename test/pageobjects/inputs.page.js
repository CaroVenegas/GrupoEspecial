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

    setInpuntsValuebyIndex(index){
        return this.getInputs.selectByIndex(index);
    }

    currentSelected(){
        return $('#inputs option[selected="selected"]');
    }
}
export default new Inputspage();