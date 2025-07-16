import { Selector } from "testcafe";

class QuienesSomosPage {
    constructor(){
        this.card = Selector("#quienessomosid");
        this.backButton = Selector("#backquienessomos");
    }

async validatePage(t) {
    await t.expect(this.card.exists).ok();

}

async goBack(t) {
    await t.click(this.backButton);

}


}

export default new QuienesSomosPage();