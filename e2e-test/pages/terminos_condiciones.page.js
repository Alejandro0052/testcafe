import { Selector } from "testcafe";

class Terminos_CondicionesPage {
    constructor(){
        this.card = Selector("#terminosid");
        this.backButton = Selector("#backterminos");
    }

async validatePage(t){
    await t.expect(this.card.exists).ok();
}

async goBack(t){
     await t.click(this.backButton);

}


}

export default new Terminos_CondicionesPage();