import { Selector } from "testcafe";

class PrivacidadPage {
    constructor() {
        this.card = Selector("#privacidadid")
        this.backButton = Selector("#backpoliticas")
    }

async validatePage(t){
    await t.expect(this.card.exists).ok();
}

async goBack (t){
    await t.click(this.backButton);
}

}

export default new PrivacidadPage();
