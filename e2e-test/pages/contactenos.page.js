// contactenosid
// backcontactenos

import { Selector } from "testcafe";

class ContactenosPage {
    constructor (){
        this.card = Selector("#contactenosid")
        this.backButton = Selector("#backcontactenos")
    }

async validatePage(t) {
    await t.expect(this.card.exists).ok();

}

async goBack(t) {
    await t.click(this.backButton);
}


}

export default new ContactenosPage();