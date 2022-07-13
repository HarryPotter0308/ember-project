import { moduleForModel, test } from "ember-qunit";

moduleForModel("event", "Unit | Model | event", {
    // Specify the other units that are required for this test.
    needs: ["model:transaction", "model:user", "model:currency"],
});

test("it exists", function (assert) {
    const model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
});
