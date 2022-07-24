import LoginForm from '@/components/LoginForm';
import {mount} from '@vue/test-utils';

describe('Login Form' , () => {
    it('emits an event with a user data payload' , () => {
        const wrapper = mount(LoginForm);
        const input = wrapper.find('[data-testid="name-input"]');

        input.setValue('Maria Silva');
        wrapper.trigger('submit');

        const formSubmittedCalls = wrapper.emitted('formSubmitted');
        expect(formSubmittedCalls).toHaveLength(1);

        const expectedPayload = {name: 'Maria Silva'};
        expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload);

    })
})