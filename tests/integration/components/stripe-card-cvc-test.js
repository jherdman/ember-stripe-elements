import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import StripeMock from 'ember-stripe-elements/utils/stripe-mock';
import env from 'dummy/config/environment';

moduleForComponent('stripe-card-cvc', 'Integration | Component | stripe card cvc', {
  integration: true,
  beforeEach() {
    window.Stripe = StripeMock;

    let config = {
      mock: true,
      publishableKey: env.stripe.publishableKey
    };

    this.register('config:stripe', config, { instantiate: false });
    this.inject.service('stripev3', 'config', 'config:stripe');
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{stripe-card-cvc}}`);

  assert.equal(this.$().text().trim(), '');
});
